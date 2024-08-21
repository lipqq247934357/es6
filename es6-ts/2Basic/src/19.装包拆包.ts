// 装包和 拆包

// vue3 中ref  他就是一个包装对象

// 给一个对象 对他的取值操作和设置操作进行重写了
interface Proxy<V> {
  get(): V;
  set(value: any): void;
}
type Proxify<T> = {
  [K in keyof T]: Proxy<T[K]>;
};
const props = {
  name: "jw",
  age: 30,
};

function proxify<T>(obj: T): Proxify<T> {
  const result = {} as Proxify<T>;
  for (let key in obj) {
    let value = obj[key];
    result[key] = {
      get() {
        return value;
      },
      set(val) {
        value = val;
      },
    };
  }
  return result;
}
const proxy = proxify(props);
proxy.name.get(); // 里面可以增加自己的属性
proxy.name.set("abc"); // 更新值

function unProxify<T>(proxy: Proxify<T>): T {
  let result = {} as T;
  for (let key in proxy) {
    result[key] = proxy[key].get();
  }
  return result;
}
let p = unProxify(proxy);
p.name;
export {};
