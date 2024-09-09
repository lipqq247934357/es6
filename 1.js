// 写一个函数，遍历对象的同时，对对象的每一项执行函数

function a(data, hash) {
  if (!hash) hash = new Set();

  const deal = (item) => {
    // 处理非数组和非对象类型的数据
    console.log('Dealing with:', item);
  };

  // 如果已经处理过该数据，则直接返回
  if (hash.has(data)) {
    return;
  }

  // 如果是数组，递归处理数组中的每一项
  if (Array.isArray(data)) {
    hash.add(data); // 标记为已处理
    for (let item of data) {
      a(item, hash); // 递归调用
    }
  }
  // 如果是对象，递归处理对象中的每一个属性
  else if (Object.prototype.toString.call(data) === '[object Object]') {
    hash.add(data); // 标记为已处理
    for (let key in data) {
      a(data[key], hash); // 递归处理对象的属性值
    }
  }
  // 如果是基本数据类型，处理该数据
  else {
    deal(data); // 处理非对象和数组的数据
  }
}


// function tryTimes(asyncFn, times, context) {
//   return async (...args) => {
//     asyncFn = asyncFn.bind(context);
//     for (let i = 0; i < times; i++) {
//       try {
//         const result = await asyncFn(...args);
//         return result;
//       } catch (e) {
//         if (i >= times) {
//           throw new Error(e);
//         }
//       }
//     }
//   }
// }

// function log1Delay() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(111111);
//       reject();
//     }, 1000);
//   });
// }

// (tryTimes(log1Delay, 3, {}))()