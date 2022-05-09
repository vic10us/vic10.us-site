import {
  sleeper,
  isNumeric,
} from "./utils";
import { TypeWriterItem, TypeWriterOptions, TypeWriterState } from './types';
import { Observable, Observer } from './observable';

export class TypeWriter {
  
  texts: string[];

  constructor(texts: string[] | string, options?: TypeWriterOptions) {
    if (!!options && typeof options === "object") {
      this.options = { ...this.options, ...options };
    }
    this._state = {
      text: "",
      cursor: this.options.cursor,
    };
    this.texts = (typeof texts === "string") ? [texts] : texts;
    this._setCurrentString();
  }

  static get is() {
    return "TypeWriter";
  }

  state: Observable<TypeWriterState> = new Observable<TypeWriterState>();

  subscribe(listeners: Observer<TypeWriterState>) {
    return this.state.subscribe(listeners);
  }

  _state: TypeWriterState = {
    text: "",
    cursor: "_",
  };

  options: TypeWriterOptions = {
    cursor: "",
    typeDelay: 100,
    clearDelay: 1000,
    backDelay: 50,
    blinkSpeed: 500,
    humanize: false,
    loop: true
  };

  _current: TypeWriterItem = {
    str: "",
    index: 0,
    position: 0,
    loop: 0,
  };

  _deleteCharacter = () => {
    if (!this._state.text || this._state.text.length <= 0) return;
    this._current.position--;
    this._setState({ text: this._state.text.slice(0, -1) });
  };

  _deleteCharacters(count?: number | undefined) : Promise<unknown> {
    let deleteCharacterCount = (this._state.text || "").length;
    if (typeof count !== "undefined") deleteCharacterCount = count;
    return new Promise((resolve) => {
      if (deleteCharacterCount > 0 && (this._state.text || "").length > 0) {
        this._deleteCharacter();
        return resolve(
          sleeper(this.options.backDelay).then(() =>
            this._deleteCharacters(deleteCharacterCount - 1)
          )
        );
      } else {
        return resolve(null);
      }
    });
  }

  _next() : boolean {
    this._current.index++;
    if (this._current.index >= this.texts.length) {
      this._current.index = 0;
      this._current.loop++;
      if (this.options.loop === false) {
        return false;
      }
    }
    this._current.position = 0;
    this._setCurrentString();
    return true;
  }

  _type() : void {
    if (!this._current.str || this._current.str.length <= 0) {
      console.warn("The current value is empty");
      return;
    }
    const letters = Array.from(this._current.str),
        letter = letters[this._current.position],
        start = this._current.position + 1;
    if (letter == "^" || letter == "~") {
      let end = this._current.str.substr(start).search(/[^0-9]/);
      if (end == -1) {
        end = this._current.str.length;
      }
      let value : string = this._current.str.substr(start, end);
      if (isNumeric(value)) {
        value = value*1;
        // remove control characters from string
        this._current.str = this._current.str.replace(`${letter}${value}`, "");
        
        // Do pause
        if (letter == "^") {
          void sleeper(value).then(() => {
            void sleeper(this._getDelay(this.options.typeDelay)).then(() => {
              this._type()
            });
          });
        } else {
          const index = this._current.position - value;
          this._current.str =
            this._current.str.substr(0, index) +
            this._current.str.substr(this._current.position);
          void sleeper(this._getDelay(this.options.typeDelay)).then(() =>
            this._deleteCharacters(value).then(() => {
              if (Math.max(index, 0) == 0 && this._current.str.length === 0) {
                this._next();
              }
              this._type();
            })
          );
        }
        return;
      }
    }
    if (letter == "|") {
      const value = this._current.str.substr(start, 1);
      this._setState({ cursor: value });
      this._current.str = this._current.str.replace(letter + value, "");
      this._type();
      return;
    }
    if (letter !== undefined) {
      this._setState({ text: `${this._state.text || ""}${letter}`});
    }

    // Increment position
    this._current.position++;

    // if not end of current string
    if (this._current.position < this._current.str.length) {
      void sleeper(this._getDelay(this.options.typeDelay)).then(() => {
          this._type();
      });
    } else {
      void sleeper(this.options.clearDelay).then(() =>
        this._deleteCharacters().then(() => {
          if (this._next()) {
            void sleeper(this.options.typeDelay).then(() => this._type());
          }
        })
      );
    }
  }

  _getDelay(speed: number) : number {
    let time = speed;
    if (this.options.humanize) {
      time += Math.floor(Math.random() * 200);
    }
    return time;
  }

  _setCurrentString() : void {
    if (!!this.texts && this.texts.length > 0) {
      this._current.str = this.texts[this._current.index]; // .replace(/\n/g, "\\n");
    }
  }

  _setState(newState: TypeWriterState, replace: boolean | undefined = false) {
    this._state = replace ? newState : { ...this._state, ...newState };
    this.state.next(this._state);
  }
}
