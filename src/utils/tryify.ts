function isPromiseLike(obj: unknown): obj is PromiseLike<unknown> {
    return (
      !!obj &&
      (typeof obj === 'object' || typeof obj === 'function') &&
      typeof (obj as unknown as PromiseLike<unknown>).then === 'function'
    );
  }
  
  export type Try<T, E extends Error = Error> = T | E;
  
  function execute<T, E extends Error = Error>(
    p: PromiseLike<T>,
  ): PromiseLike<Try<T, E>> {
    return p.then(
      (x: T) => x,
      (err: E) => err,
    );
  }
  
  export function isError(e: unknown): e is Error {
    return e instanceof Error;
  }
  
  export function tryify<T>(
    input: () => T | PromiseLike<T>,
  ): Try<T> | PromiseLike<Try<T>> {
    try {
      const v = input();
  
      if (isPromiseLike(v)) {
        return execute<T>(v);
      }
  
      return v;
    } catch (err) {
      if (isError(err)) {
        return err;
      }
  
      if (typeof err === 'string') {
        return new Error(err);
      }
  
      return new Error('Unknown error');
    }
  }
  