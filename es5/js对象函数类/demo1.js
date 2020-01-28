
function aa(){
    let a = 10;
    function b(){
        console.log(a);
        function c(){
            console.log(a);
        }
        return c;
    }
    return b();
}
let bb = aa();
bb();
