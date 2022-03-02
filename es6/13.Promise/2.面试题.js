// 1.
setTimeout(() => {
  console.log(1)
})

setTimeout(() => {
  new Promise((resolve, reject) => {
    console.log(2)
    resolve()
  }).then(() => {
    console.log(3)
  })
})

console.log(4)

new Promise((resolve, reject) => {
  console.log(5)
  resolve()
}).then(() => {
  console.log(6)
})

new Promise((resolve, reject) => {
  console.log(7)
  setTimeout(() => {
    console.log(8)
  })
  resolve()
}).then(() => {
  console.log(9)
})

//  4，5，7，6，9，1，2，3，8

// 2.

console.log(1)

setTimeout(() => {
  console.log(2)
  setTimeout(() => {
    console.log(3)
  },0)
},100)

new Promise((resolve, reject) => {
  console.log(5);
  resolve()
}).then(() => {
  console.log(6)
})

setTimeout(() => {
  console.log(7)
  setTimeout(() => {
    console.log(8)
  },0)
},100)

console.log(10)