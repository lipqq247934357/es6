// let声明的变量必须先定义后使用

//暂时性死区

var a = 20;
{
    console.log(a);
    let a = 200;
}