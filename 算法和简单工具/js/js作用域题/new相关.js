let a = function (exec) {

    let that = this;
    that.val = 'lipeng';
    exec(this.val);
};

let func = function (val) {
    console.log(this.val);
    console.log(val)
};

func();

let b = new a(func);


