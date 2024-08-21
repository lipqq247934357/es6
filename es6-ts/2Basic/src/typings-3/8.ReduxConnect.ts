interface Module {
  count: number;
  message: string;
  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;
  syncMethod<T, U>(action: Action<T>): Action<U>;
}
interface Action<T> {
  payload?: T;
  type: string;
}
// 这个要求的结果
type Result = {
  asyncMethod<T, U>(input: T): Action<U>;
  syncMethod<T, U>(action: T): Action<U>;
};

type Connect<T extends object> = {
  [K in keyof T as T[K] extends (...args: any[]) => any
    ? K
    : never]: T[K] extends <T, U>(input: Promise<T>) => Promise<Action<U>>
    ? { <T, U>(input: T): Action<U> }
    : T[K] extends <T, U>(action: Action<T>) => Action<U>
    ? <T, U>(action: T) => Action<U>
    : T[K];
};

type F = Connect<Module>;
