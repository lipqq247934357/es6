
/**
 * 
 * 将汉字，非汉字进行拆分
 * 
 */
const symbol = /^[^\u4E00-\u9FA5]{1,}/g;
let word = /^[\u4E00-\u9FA5]{1,}/g;
const getMixin = (strs) => {
	const list = [];
	let temp = [];
	let regexObj = undefined;
	// 返回的是匹配元素的下标
	while (strs) {
		regexObj = symbol.exec(strs);
		if (regexObj) {
			temp = regexObj[0]; // 匹配的内容
			// 生成数据，放到数组中
			strs = strs.slice(temp.length);
			list.push(temp);
		}
		regexObj = word.exec(strs);
		if (regexObj) {
			temp = regexObj[0]; // 匹配的内容
			// 生成数据，放到数组中
			strs = strs.slice(temp.length);
			list.push(temp);
		}
	}
	console.log(list);
};
getMixin("dsfdsf,./were。、，。、 ss地方第三方dd是李鹏胜多负少的水电费dsf");