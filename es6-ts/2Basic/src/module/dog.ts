export namespace Zoo {
  export let a = 1;
  export namespace House {
    // 对象套对象
    export class Dog {}
  }
  export class Dog {}
}
export namespace Home {
  export let b = 2;
  export class Dog {}
}
