export class Delay {
  time: number;
  timeout: number | null;
  close: unknown;

  constructor(time: number) {
    this.time = time;
    this.timeout = null;
    this.close = null;
  }

  getPromise() {
    return new Promise<void>((resolve, reject) => {
      this.close = reject;
      this.timeout = setTimeout(() => {
        resolve();
      }, this.time);
    });
  }
  
  cancel() {
    this.timeout && clearTimeout(this.timeout);
    this.close && this.close("unmounted");
    return { isCanceled: true };
  }
}

export const isNumeric = (n: string) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export const sleeper = (timeInMs: number) => {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), timeInMs));
}