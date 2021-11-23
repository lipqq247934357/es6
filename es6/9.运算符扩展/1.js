// 1.指数运算符
console.log('-----指数运算符----');
console.log('2 ** 2', 2 ** 2);
console.log('2 ** 3', 2 ** 3);
// 2.链判断运算符
console.log('-----链判断运算符----');
let message = { body: { user: { firstName: '111' } } };
console.log('message?.body?.user?.firstName:', message?.body?.user?.firstName || 'default');
console.log('message?.footer?.user?.firstName:', message?.footer?.user?.firstName || 'default');
// 3.NULL判断运算符
console.log('-----NULL判断运算符----');
let b = message.header ?? '111';
console.log('b', b);
// 4.逻辑赋值运算符
// console.log(x ||= y);
// console.log(x &&= y);
// console.log(x ??= y);