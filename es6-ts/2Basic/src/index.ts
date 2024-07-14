// 条件类型 if/else 三元运算符

type StatusCode<T> = T extends 200 | 300 | 400 ? "success" : "fail";

type IReturnMessage = StatusCode<300>;

// 类型级别 1）根据结构的角度分析  2) 从类型角度来进行分析

type IObj<T> = T extends { name: "jw" } ? "ok" : "no";

type IPerson = IObj<{ name: "jw"; age: 23 }>;

type IPerson1 = IObj<{}>

// 类型角度

// TODO: 类型的extends关系   /Users/lipeng/资料/视频/TS体系课/8内置类型 的15min
// never是任何类型的子类型  字面量类型  基础类型  包装类型  any unknown

type T1 = never extends 'str' ? true: false;
type T2 = 'str' extends string ? true: false;
type T3 = string extends String ? true: false;
type T4 = String extends Object ? true: false;

export {};
