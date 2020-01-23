let b = 'aaa';

let a = (d) => {
    let b = 111;
    console.log(this.b);
    console.log(this);
}

a(111);