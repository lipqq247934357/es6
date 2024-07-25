// 这样会循环执行，因为forEach会认为set一直再增加数据
const set = new Set([1,2])

set.forEach(item => {
  set.delete(item);
  console.log(111);
})
