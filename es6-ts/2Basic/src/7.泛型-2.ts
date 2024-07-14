// 局部数据泛型
// 泛型可以设置默认值解决默认问题 下面默认值是any
interface APIResponse<T = any> {
  error: number;
  data: T;
  message?: string;
}

interface LoginInfo {
  username: string;
  token: string;
}

function login(): APIResponse<LoginInfo> {
  return {
    error: 1,
    data: {
      username: "张三",
      token: "xxx",
    },
    message: "成功",
  };
}

// 平时开发中我们使用联合类型

type IUnion<T = boolean> = T | string | number;

// 限制泛型的类型 extends 约束T

function getVal<T extends String | number>(val: T): T {
  return val;
}

function getLen<T extends { length: number }>(val: T): number {
  return val.length;
}

getLen("123");
getLen({ length: 123 });

function getObjVal<T extends object, K extends keyof T>(target: T, key: K) {
  return target[key];
}

let person = { name: "lipeng", age: 30 };
getObjVal(person, "name");

// TODO: 关于class的泛型 这块没有写，因为class的泛型用处不多
// 后续学习视频地址：  /Users/lipeng/资料/视频/TS体系课  28min处

export {};
