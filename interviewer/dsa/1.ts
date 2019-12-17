/**
 * 类似下面的数据结构，深度不定，如何找到某个元素，并且找出他的父节点和子节点
 * 
 * 首先正常找到某个指定id的元素应该是遍历
 * 然后还得找出父节点，那么必须看子节点返回的值是否是对应的值，如果是对应的值，返回的是包含非空的对象
 * 然后将自己的数据和返回内容合并起来赋值给全局变量，然后返回false，说明不用执行了
 */
let obj = [
    {
        id: 1,
        name: '1',
        children: [
            {
                id: 11,
                name: '1_1',
                children: [{
                    id: 111,
                    name: '1_1_1',
                    children: []
                },
                {
                    id: 112,
                    name: '1_1_2',
                    children: []
                }
                ]
            },
            {

                id: 12,
                name: '1_2',
            }
        ]
    },
    {
        id: 2,
        name: '2',
        children: [
            {
                id: 21,
                name: '2_1',
                children: []
            },
            {

                id: 22,
                name: '2_2',
                children: []
            }
        ]
    }
]

interface Iobj {
    id: number,
    name: string,
    children?: Iobj[]
}


const val = 11;

let aim: Iobj;

function getCurrentVal(obj: Iobj): false | Iobj {

    const temp: Iobj = {
        id: obj.id,
        name: obj.name,
        children: []
    }

    if (val === obj.id) {
        temp.children = obj.children;
        return temp;
    }

    if (obj.children) {
        obj.children.forEach((item: Iobj) => {
            let val = getCurrentVal(item);
            if (val === false) {
                return false;
            } else if (!isNaN(val.id)) {
                temp.children.push(val);
                aim = temp;
                return false;
            }
        })
    }
    return { id: NaN, name: '' };
}

for (let i = 0; i < obj.length; i++) {
    getCurrentVal(obj[i]);
}

console.log(aim);
