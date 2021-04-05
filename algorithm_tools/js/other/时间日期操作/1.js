// 文档地址： http://momentjs.cn/
// 批量获取moment的时间
const { year, month, date: day } = date.toObject();
// 批量设置moment的时间
const st = startTime.set({ year, month, date: day });
const et = endTime.set({ year, month, date: day });