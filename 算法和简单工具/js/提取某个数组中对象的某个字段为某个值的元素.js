let data = [
    {
        "code": "1",
        "codeName": "百度"
    },
    {
        "code": "2",
        "codeName": "360"
    },
    {
        "code": "3",
        "codeName": "消金"
    }
]

function getName(data, code) {
    let len = data.length;
    for (let i = 0; i < len; i++) {
        if (data[i].code === code) {
            return data[i].codeName
        }
    }
}

console.log(getName(data, '2'));
