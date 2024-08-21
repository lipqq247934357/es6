export type RemoveFirst<
  T extends string,
  S extends string
  // -xxxxx
> = T extends `${S}${infer R}` ? R : T;

export type KebabCase<
  T extends string,
  F extends string = ""
> = T extends `${infer L}${infer R}`
  ? // 不停的将字符拼接到final上，而且递归调用
    KebabCase<R, `${F}${Capitalize<L> extends L ? `-${Lowercase<L>}` : L}`>
  : RemoveFirst<F, "-">;

// 1.将大写字母转化成小写， 还要在前面-    -handle-open-flag
// 2.删除开头-
// 3.如何判断一个字符是大写还是小写  将这个字符转换成大写 开一下和当前字母是不是同一个  L extends  L ? -lowerCase<L>
type a1 = KebabCase<"HandleOpenFlag">; // handle-open-flag
type a2 = KebabCase<"OpenFlag">; // open-flag
