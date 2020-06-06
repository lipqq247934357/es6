let data = {name: 'lipeng', age: 23, sex: '帅锅'};

let params = Object.entries(data).reduce((arr, [k, v]) => {
    return arr.push(`${k}=${v}`) && arr;
}, []).join('&');

console.log(params);
