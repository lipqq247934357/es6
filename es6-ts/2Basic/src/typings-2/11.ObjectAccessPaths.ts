import { RemoveFirst } from "./9.KebabCase";

type ObjectAccessPaths<
  T extends object,
  F extends string = "",
  K = keyof T
> = K extends keyof T // 分发 每一个key
  ? T[K] extends object // 看值是不是对象
    ? ObjectAccessPaths<T[K], `${F}.${K & string}`> // 是对象 拼接路径 xxx.xxx
    : RemoveFirst<`${F}.${K & string}`, "."> // 删除开头的.
  : any;

//1. 我需要将属性一个个的取出来

function createI18n<Schema extends object>(
  schema: Schema
): (path: ObjectAccessPaths<Schema>) => void {
  return (path) => {};
}
// .home.topBar
const i18n = createI18n({
  A: 1,
  home: {
    topBar: {
      title: "顶部标题",
      welcome: "欢迎登录",
    },
    bottomBar: {
      notes: "XXX备案，归XXX所有",
    },
  },
  login: {
    username: "用户名",
    password: "密码",
  },
});
i18n("A");
i18n("home.topBar.title"); // correct
i18n("home.topBar.welcome"); // correct
i18n("home.bottomBar.notes"); // correct

// i18n("home.login.abc"); // error，不存在的属性
// i18n("home.topBar"); // error，没有到最后一个属性
export {};
