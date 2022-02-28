// 函数默认值：可以给函数参数设置默认值，如果没传，使用默认参数
function a(x, y = 2) {
    console.log(x + y);
}

a(2, null);
a(2, 5);