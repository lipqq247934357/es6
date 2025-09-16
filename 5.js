// /**
//  * 
//  * 给定一个数组 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 和一个数字n，转化为子数组长度为n的二维数组；
//   例如：n = 2  输出结果 [[1,2], [3,4], [5,6], [7,8], [9, 10]];
//   n=3 输出结果[[1,2,3], [4,5,6],[7,8,9],[10]];
// 依次类推
//  * 
//  */

// const a = (array, n) => {

//   if (!array.length) {
//     return;
//   }

//   const returnValue = [];

//   for (let i = 0; i < array.length; i++) {
//     const index = Math.floor(i / n);
//     const value = i % n;
//     if (!returnValue[index]) {
//       returnValue[index] = []
//     }
//     returnValue[index][value] = array[i];
//   }
//   return returnValue;
// }

// console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// // 1.
// const value = [].slice(3);

const chunkArray_slice = (array, n) => {
  if (!array.length || n <= 0) return [];
  
  const result = [];
  for (let i = 0; i < array.length; i += n) {
    result.push(array.slice(i, i + n));
  }
  return result;
};


// 输入：['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5']
// 输出：['10.2.1', '5.1.2', '2.1.0.1', '1.0.4.5', '0.402.1']

function deal(array) {

  let array2 = array.sort((_a,_b) => {
    const a = _a.split('.')
    const b = _b.split('.')
    const totalLength = Math.max(a.length, b.length)
    for (let i = 0; i < totalLength; i++) {
      if (Number(a[i]) > Number(b[i])) {
        return -1;
      } else if (Number(a[i]) < Number(b[i])) {
        return 1;
      }
    }
    return 0;
  })
  return array2;
}

console.log(deal(['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5']));
