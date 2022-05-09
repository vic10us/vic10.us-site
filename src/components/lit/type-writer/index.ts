import { LitElement, html, css } from "lit";
import { typeWriterSyles } from "./styles";
import { property, customElement, state } from "lit/decorators.js";
import { TypeWriter } from "../../modules/typewriter";

interface IState {
  text: string;
  cursor: string;
}

@customElement("type-writer")
export class TypeWriterElement extends LitElement {
  @state()
  state: IState;

  @property()
  prompt: string;

  @property({ type: Array })
  texts: string[];

  @property()
  cursor: string;

  static styles = [typeWriterSyles];
  connectedCallback() {
    super.connectedCallback();
    
    this.state = {
      prompt: this.prompt || ">",
      text: "Hello World",
      cursor: this.cursor || "_",
    };

    const tw = new TypeWriter(this.texts, {
      cursor: this.state.cursor,
      typeDelay: 50,
      clearDelay: 1000,
      backDelay: 10,
      blinkSpeed: 700,
      humanize: false,
    });

    tw.state.subscribe({
      next: (twState) => {
        this.state.text = (twState.text || "").replace(
          /(?:\r\n|\r|\n)/g,
          "<br />"
        );
        this.state.cursor = twState.cursor;
        this.requestUpdate();
      },
      error: function (): void {
        // throw new Error("Function not implemented.");
      },
      complete: function (): void {
        // throw new Error("Function not implemented.");
      },
    });
    tw._type();
  }

  constructor() {
    super();
  }

  static get is() {
    return "type-writer";
  }

  render() {
    return html`
      <div class="typewriter__contianer">
        <div class="typewriter__text">
          <span class="typewriter__prompt">${this.state.prompt}</span>
          <span
            ><span .innerHTML="${this.state.text}"></span
            ><span
              class="typewriter__cursor"
              .innerHTML="${this.state.cursor}"
            ></span
          ></span>
        </div>
      </div>
    `;
  }
}
