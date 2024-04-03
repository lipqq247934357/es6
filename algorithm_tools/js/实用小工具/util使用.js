import formatDuration, { formatDuration4Min } from "../utils.js";
// 格式化时间 将秒格式化成 00:16:40 
console.log(''+ new Date().getTime())
console.log('formatDuration(1000)', formatDuration(1000));
console.log('formatDuration(23)', formatDuration(23));
console.log('formatDuration(222)', formatDuration(222));
console.log('formatDuration4Min(1200)', formatDuration4Min(1200));
console.log('formatDuration4Min(100000)', formatDuration4Min(100000));
console.log(''+ new Date().getTime())
