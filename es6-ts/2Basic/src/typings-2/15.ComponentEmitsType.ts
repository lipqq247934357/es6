import { CamelCase } from "./10.CamelCase";

type a1 = {
  "handle-open": (flag: boolean) => true;
  "preview-item": (data: { item: any; index: number }) => true;
  "close-item": (data: { item: any; index: number }) => true;
};

type ComponentEmitsType<T extends object> = {
  [K in keyof T as `on${CamelCase<K & string>}`]: T[K] extends (
    data: infer P
  ) => any // 对函数进行推断，拿到参数，返回值重写
    ? (data: P) => void
    : T[K];
};
type a2 = ComponentEmitsType<a1>;

/*
{
  onHandleOpen:(flag:boolean)=> void,
  onPreviewItem:(flag:boolean)=> void
  onCloseItem:(flag:boolean)=> void
}
*/
export {};
