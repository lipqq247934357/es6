// demo1
const set = new Set([5, 8, 10]);
console.log('set.keys()', set.keys());
console.log('set.keys()', set.values());
const setEntries = set.entries();
for(let item of setEntries) {
    console.log('item', item);
}

set.forEach((value, key) => console.log(key + ' : ' + value))
