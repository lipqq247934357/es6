/**
 *
 * 函数可以访问其声明所在作用域内的变量,这是js特性
 *
 */
function aa() {
    let a = 10;
    function b() {
        console.log(a);
        function c() {
            console.log(a);
        }
        return c;
    }
    return b;
}
let bb = aa();
let cc = bb();
cc();
