export interface Observer<T> {
    next: (value: T) => void;
    error: (err: unknown) => void;
    complete: () => void;
}

export interface UnsubscibeFunc {
    unsubscribe: () => boolean;
}

export class Observable<T> {
    
    listeners: Set<Observer<T>>;

    constructor() {
        this.listeners = new Set<Observer<T>>();
        // exec({
        //     next: (value: T) => this.listeners.forEach(({next}) => next && next(value)),
        //     error: (err) => this.listeners.forEach(({error}) => error && error(err)),
        //     complete: () => this.listeners.forEach(({complete}) => complete && complete())
        // });
    }
    
    next(value: T) {
        this.listeners.forEach(({next}) => next && next(value));
    }

    subscribe(listeners: Observer<T>): UnsubscibeFunc {
        this.listeners.add(listeners);
        return { unsubscribe: () => this.listeners.delete(listeners) }
    }
}