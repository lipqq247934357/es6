let name  = 'aaa';
let a = {
    name: 'name1',
    getName(){
        console.log(this.name);
    },
    getNameArrow: () => {
        console.log(this.name);
    }
}

a.getName();
let b = a.getName;
b();
a.getNameArrow();