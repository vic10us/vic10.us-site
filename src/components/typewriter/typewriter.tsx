import React, { Component } from 'react';
import { TypeWriter } from '../modules/typewriter';
import './typewriter.scss';

interface IProps {
  prompt?: string;
  texts: string[];
  cursor?: string;
  loop?: boolean;
}

interface IState {
  prompt: string;
  text: string;
  cursor: string;
}

class TypeWriterEffect extends Component<IProps, IState> {

  tw: TypeWriter;

  constructor(props: IProps) {
    super(props);

    this.state = {
      cursor: this.props.cursor || '_',
      text: '',
      prompt: this.props.prompt || '#'
    };

    this.tw = new TypeWriter(this.props.texts, {
      cursor: this.state.cursor,
      typeDelay: 50,
      clearDelay: 1000,
      backDelay: 10,
      blinkSpeed: 700,
      humanize: false,
      loop: this.props.loop || false
    });
  }

  componentDidMount() : void {
    this.tw.state.subscribe({
      next: (twState) => {
        this.setState({
          text: (twState.text || "").replace(/(?:\r\n|\r|\n)/g, '<br />'),
          cursor: twState.cursor
        });
      },
      error: function (): void {
        // throw new Error("Function not implemented.");
      },
      complete: function (): void {
        // throw new Error("Function not implemented.");
      }
    });
    this.tw._type();
  }

  componentDidUpdate() : void {
    // do nothing for now
  }

  componentWillUnmount() : void {
    // this.tw.state.unsubscribe();
  }

  render() {
    return (
      <div className="typewriter__contianer">
        <div className="typewriter__text">
          <span className="typewriter__prompt">{this.state.prompt}</span>
          <span>
            <span dangerouslySetInnerHTML={{ __html: this.state.text }}></span>
            <span className="typewriter__cursor">{this.state.cursor}</span>
          </span>
        </div>
      </div>
    );
  }
}

export default TypeWriterEffect;
