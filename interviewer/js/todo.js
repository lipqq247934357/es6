// TODO 不知道为什么  node下没有window对象，需要在浏览器执行
window.name = 'world';

let obj = {
    name: 'hello',
    alias: this.name,
    getInfo: function () {
        console.log(this.name);
        console.log(this.alias);
    },
    agetInfo: () => {
        console.log(this.name);
        console.log(this.alias);
    }
};

obj.getInfo();
obj.agetInfo();


/*function haha() {
    var name = 'aaa';
    let obj = {
        name: 'hello',
        alias: this.name,
        getInfo: function () {
            console.log(this.name);
            console.log(this.alias);
        },
        agetInfo: () => {
            console.log(this.name);
            console.log(this.alias);
        }
    };

    obj.getInfo();
    obj.agetInfo();
}*/
