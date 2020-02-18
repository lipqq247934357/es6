let arr = [1, 2, 3, 4, 5, 6];
// 查询arr3
console.log(arr[3]);

//查找
console.log(arr.indexOf(11));

//排序
console.log(arr.sort((a1, a2) => {
    return a2 - a1;
}));

//新增
console.log(arr.unshift(11));
console.log(arr.push(122));
arr[arr.length] = 444;
arr.splice(arr.length, 0, 13);
console.log(arr);

//删除
console.log(arr.shift());
console.log(arr.pop());
arr.splice(0., 1);
console.log(arr);

//合并
let arr2 = [2222, 3333];
let arr3 = arr2.concat();
console.log(arr3);
console.log(arr2 === arr3);
arr3 = arr3.concat(arr, arr2);
console.log(arr3);

//截取
console.log(arr2.slice(0));
console.log(arr3.slice(0, 4));

// reduce
let arr5 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr5.reduce((before, curr) => {
    return before + curr;
}, 0));