//      let p = new Person(); //  p :{id:1}
//      let p2 = new Person(); //  p :{id:2}
//      let p3 = new Person(); //  p :{id:3}

const Person = (function() {
    let id = 0;
    return function() {
        id++;
        console.log(id);
        return {id}
    }
})();

let p1 = new Person();
let p2 = new Person();
let p3 = new Person();