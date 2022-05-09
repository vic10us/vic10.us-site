export interface TypeWriterOptions {
  cursor: string;
  typeDelay: number;
  clearDelay: number;
  backDelay: number;
  blinkSpeed: number;
  humanize: boolean;
  loop: boolean;
}

export interface TypeWriterState {
  text?: string;
  cursor?: string;
}

export interface TypeWriterItem {
  str: string;
  index: number;
  position: number;
  loop: number;
}

