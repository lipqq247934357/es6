function move({x = 0, y = 0} = {}) {
    return [x, y];
}

console.log(move({x: 3, y: 8}));; // [3, 8]
console.log(move({x: 3}));; // [3, 0]
console.log(move({}));; // [0, 0]
console.log(move());; // [0, 0]

console.log([1,2,3]);