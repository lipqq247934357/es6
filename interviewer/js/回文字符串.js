function f(str) {
    var arr = str.split('');
    var stack = [];
    arr.forEach(function (item) {
        if (!stack) {
            stack.push(item);
        }
        else {
            if (stack[stack.length - 1] === item) {
                stack.pop();
            }
            else {
                stack.push(item);
            }
        }
    });
    console.log('当前字符串是', str, '', "\u6570\u7EC4\u957F\u5EA6\u4E3A\uFF1A" + stack.length);
    return stack.length < 1;
}
;
f('1234554321');
f('1234');
