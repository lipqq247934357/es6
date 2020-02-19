window.a = 200;

function func () {
    let a = 300;
    let obj = {
        a: 11,
        b: function () {
            console.log(this.a,'b --> this.a')
            console.log(a, 'b --> a')
        },
        c: function () {
            setTimeout(() => {
                console.log(this.a,'c --> this.a')
                console.log(a, 'c --> a')
            })
        },
        d: function(){
            obj.c.call({a:500});
        }
    }
    return [obj.b,obj.c,obj.d];
}

let res = func();

let b = res[0];
let c = res[1];
let d = res[2];

b();
c();
d();

res[0]();
res[1]();
res[2]();
