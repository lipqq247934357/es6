// 扁平化数组转成tree
let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]
// 1.只有一个根节点
// 首先找第一个元素有没有父节点
// 然后看他的子节点
function convert2(arr) {
    let tree = [];
    arr.forEach(item => {
        let res = arr.filter(item2 => item2.id === item.pid);
        if (res.length < 1) {
            tree.push(item);
        } else {
            (res[0].children || (res[0].children = [])) && res[0].children.push(item);
        }
    });
    console.log(tree);
}

function convert(list) {
    const res = [];
    const map = list.reduce((map, v) => {
        map.set(v.id, v);
        return map;
    }, new Map());
    for (const item of list) {
        if (item.pid === 0) {
            res.push(item);
            continue;
        }
        if (map.has(item.pid)) {
            const parent = map.get(item.pid);
            parent.children = parent.children || [];
            parent.children.push(item);
        }
    }
    return res;
}
let returnTree = convert(arr);
console.log(JSON.stringify(returnTree));