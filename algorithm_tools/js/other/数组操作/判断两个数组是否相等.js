const isEqualArray = (arr1 = [], arr2 = []) => {

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false
    }

    if (arr1.length !== arr2.length) {
        return false
    }
    const tempArr1 = [...arr1].sort()
    const tempArr2 = [...arr2].sort()
    for (let i = 0; i < tempArr1.length; i++) {
        if (tempArr1[i] !== tempArr2[i]) {
            return false
        }
    }
    return true
}

isEqualArray([], [])
console.log("lipeng-🚀- ~ file: 判断两个数组是否相等.js ~ line 21 ~ isEqualArray([], [])", isEqualArray([], []))
isEqualArray([1, 2], [2, 1])
console.log("lipeng-🚀- ~ file: 判断两个数组是否相等.js ~ line 23 ~ isEqualArray([1, 2], [2, 1])", isEqualArray([1, 2], [2, 1]))
isEqualArray([1, 2, 1], [2, 1, 1])
console.log("lipeng-🚀- ~ file: 判断两个数组是否相等.js ~ line 25 ~ isEqualArray([1, 2, 1], [2, 1, 1])", isEqualArray([1, 2, 1], [2, 1, 1]))
isEqualArray([1, 2], [2, 1, 3])
console.log("lipeng-🚀- ~ file: 判断两个数组是否相等.js ~ line 25 ~ isEqualArray([1, 2], [2, 1, 3])", isEqualArray([1, 2], [2, 1, 3]))

