/**
 * const 和 let 类似，都是一种声明变量的方式
 * const 和 let 相比，就相当于在let上增加了声明的值不能修改的特性
 *      值不能修改引出了变量必须在声明的时候就初始化，不初始化就会报错
 *      const 对于引用类型而言指的是const变量保存的引用类型地址不变，引用类型的值是可以改变的
 */


const i = 1;
const obj = {
    name: 'lipeng',
    age: '12'
};

obj.age = 13;
console.log(obj.age);


/**
 *
 * 变量声明的6种方式：var ,function,let,const,class,import
 *
 */