// 创建数组 第一种和第二种用的少
let arrNew1 = new Array([1,2,3]);
let arrNew2 = Array([1,2,3]);
let arr = [1, 2, 3, 4, 5, 6];
// 查询arr3,数组的下标是从0开始的；
console.log(arr[3]);

// 判断是否是数组
console.log(Array.isArray(arr));
console.log(Object.prototype.toString.call(arr).slice(8, -1) === "Array"); // [object Array] 截取

//查找 根据下标查看内容，根据内容查看下标
console.log(arr[1]);
console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(2));
console.log(arr.includes(3));

//排序
console.log(arr.sort((a, b) => a - b)); // 就地排序  就地：就是直接修改当前数组
// TODO: 不太理解 sort 默认是从小到大排列，如果前一个大于后一个，返回值>0;如果小于后一个，返回值<0
console.log(arr.toSorted((a, b) => a - b)); // 返回一个排序之后的数组，不影响原来的数组
console.log(arr.reverse()); // 颠倒数组顺序 就地操作

//新增
console.log(arr.unshift(11)); // 向数组前端添加一个或多个元素，并返回新数组的长度
console.log(arr.push(122)); // 向数组末尾添加一个或多个元素，返回添加之后新数组的长度
arr[arr.length] = 444;
arr.splice(arr.length, 0, 13); // 可以指定任意数量的参数，第一个参数表示要删除项的起始位置（从0开始），第二个参数是删除个数，第三以及 以后的参数是要替换的内容,  返回被删除元素组成的数组 就地操作
console.log(arr);

//删除
console.log(arr.shift()); // 移除数组的第一项并返回该项，数组长度减1
console.log(arr.pop()); // 移除数组最后一项 返回移除之后的值 就地操作
arr.splice(0, 1);
console.log(arr);

//合并
let arr2 = [2222, 3333];
let arr3 = arr2.concat(); // 返回合并之后的数组 不在原数组上进行操作
console.log(arr3);
console.log(arr2 === arr3);
arr3 = arr3.concat(arr, arr2);
console.log(arr3);

//截取 slice不在原数组上操作，返回截取之后的数组
console.log(arr2.slice(0));
console.log(arr3.slice(0, 4));

// reduce
let arr5 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr5.reduce((before, curr) => {
    return before + curr;
}, 0));