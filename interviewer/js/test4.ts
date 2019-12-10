function f(str: string): boolean {
    let arr = str.split('');
    let stack: string[] = [];
    arr.forEach(item => {

        if (!stack) {
            stack.push(item);
        } else {
            if (stack[stack.length - 1] === item) {
                stack.pop();
            } else {
                stack.push(item);
            }
        }
    });
    console.log('当前字符串是',str,'', `数组长度为：${stack.length}`);
    return stack.length < 1;
};

f('1234554321');
f('1234');


