// 浏览器端的微任务

//   1.Promise.then
//   2.MutationObserver
// dom变化时，回调会被放入微任务队列
// 3.queueMicrotask
// 将一个函数放入微任务队列
queueMicrotask(() => {
  console.log(111);
})

// 浏览器端宏任务（除了以上3个都是宏任务））

// 1.setTimeout，setInterval
// 2.I/O操作
// 3.UI 交互事件
// 4.setImmediate (node)
// 5.MessageChannel
// 6.事件轮询或渲染
// 7.postMessage