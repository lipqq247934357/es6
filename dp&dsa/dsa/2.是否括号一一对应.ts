// '('，')'，'{'，'}'，'['，']'
// (({[]}))
// (({}))[]
// 栈数据结构。栈的特点是“后进先出”（LIFO），非常适合处理这种成对出现的字符。
// 这个问题的思路就是：如果放入的是又开口，取出上次放入的左开口，如果不对应，就说明没有一一匹配；
function isValidParentheses(str) {
  let Point1: string[] = [];
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  const keyList = ["(", "[", "{"];
  for (let item of str) {
    if (keyList.includes(item)) {
      Point1.push(item);
    } else {
      if (Point1.pop() !== map.get(item)) {
        return false;
      }
    }
  }
  return Point1.length === 0;
}

// isValidParentheses('()') => true
// isValidParentheses('[](') => false
// isValidParentheses('{}()') => true
// isValidParentheses('({})') => true
// isValidParentheses('[)') => false
// isValidParentheses('[{]}') => false
