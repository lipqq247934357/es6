// 写一个函数，间隔几秒执行
// const repeat = (fn, times, delay) => {
//   return async (...args) => {
//     for (let i = 0; i < times; i++) {
//       setTimeout(() => {
//         fn(...args)
//       }, delay * (i + 1))
//     }
//   }
// }

// const repeat = (fn, times, delay) => {
//   return async (...args) => {
//     let p = Promise.resolve();
//     for (let i = 0; i < times; i++) {
//       p = p.then(() => {
//         fn(...args)
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             resolve();
//           }, delay)
//         })
//       })
//     }
//   }
// }

// // 使下面调用代码能正常工作
// const repeatFunc = repeat(console.log, 4, 3000);
// repeatFunc("hello world");    //会输出4次 hello world, 每次间隔3秒

// // 

// function MyComponent() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCount(count + 1);
//     }, [])
//   }, [])

//   console.log('count', count)
// }

// 上面的执行结果是什么样的？如何改一下这个问题？

// 写一个函数，遍历对象的同时，对对象的每一项执行函数

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

// const repeatFunc = repeat(console.log, 4, 3000);
// repeatFunc("hello world");    //会输出4次 hello world, 每次间隔3秒


// const repeat = (fn, times, delay) => {
//   // 1.返回一个函数，接收参数
//   return (...args) => {
//     let p = Promise.resolve();
//     for (let i = 0; i < times; i++) {
//       p = p.then(() => {
//         return new Promise((resolve)=> {
//           setTimeout(() => {
//             fn(...args);
//             resolve();
//           }, delay)
//         })
//       })
//     }
//   }
// }

// const repeatFunc = repeat(console.log, 4, 1000);
// repeatFunc("hello world");    //会输出4次 hello world, 每次间隔3秒

// 实现一个函数，每几秒执行一次，执行几次

// const b = async () => {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//     console.log('111')
//     }, 600 * (i + 1))
//   }
// }

// b();

