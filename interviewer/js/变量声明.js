// const和for循环结合

let obj = [1, 2, 3]

for (const i of obj) {
    console.log(i);
};

/**
 *
 以下方法使用 const i 表示会报错
 let l = obj.length;
 for (const i = 0; i < l; i++) {
    console.log(i);
}
 */

