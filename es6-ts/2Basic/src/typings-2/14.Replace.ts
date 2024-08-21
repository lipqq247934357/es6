type Replace<
  T extends string,
  C extends string,
  RC extends string,
  F extends string = ""
> = C extends ""
  ? T extends ""
    ? RC
    : `${RC}${T}`
  : T extends `${infer L}${C}${infer R}`
  ? Replace<R, C, RC, `${F}${L}${RC}`>
  : `${F}${T}`;

// replace 字符串 ， 匹配哪个字符 换成哪一个
type a1 = Replace<"111ha ha ha 123", "ha", "he">;
type a2 = Replace<"jw", "jw", "jiangwen">;
type a4 = Replace<"", "", "jiangwen">;
type a3 = Replace<"a", "", "jiangwen">;

export {};
