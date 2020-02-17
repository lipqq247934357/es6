let obj = {
    name: '',
    age() {

    }
};

let name = 'name';

let obj2 = {
    [name]: 'lipeng'
}
console.log(obj2[name]);
name = 'names';
console.log(obj2[name]);
name = 'name';
console.log(obj2[name]);
