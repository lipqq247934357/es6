// 基本数据类型
let bool: boolean = false;
let num: number | undefined = 1;
let str: string = '11';

num = undefined;

// 数组
let arr1: number[] = [1, 2];
let arr2: Array<number> = [1, 2];

// 元组
let tuple: [string, number] = ['1', 2];

// 函数
let add = (x: number, y: number) => x + y
let compute:(x:number,y:number) => number
compute = (a,b) =>a+b
// 函数返回值设置
const a = (): Number => {
    return 1;
}

// 对象
let obj: {x:number,y:string} = {x:1,y:'22'};
obj.y = '2';

// symbol
let s1 :symbol = Symbol();
let s2 :symbol = Symbol();

// undefined,null
let un:undefined = undefined;
let nu:null = null;

// void

// any


// never 不会有返回值
    // 1.返回异常
    // 2.死循环函数