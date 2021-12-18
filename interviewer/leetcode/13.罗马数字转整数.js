/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let total = 0;
    const m = new Map();
    m.set('I', 1);
    m.set('V', 5);
    m.set('X', 10);
    m.set('L', 50);
    m.set('C', 100);
    m.set('D', 500);
    m.set('M', 1000);
    // 根据下一位判断这一位的运算规则
    for (let i = 0; i < s.length; i++) {
        let next = s[i + 1];
        if (s[i] === 'I' && next === 'V') {
            total += 4;
            i++;
            continue;

        }
        if (s[i] === 'I' && next === 'X') {
            total += 9;
            i++;
            continue;

        }
        if (s[i] === 'X' && next === 'L') {
            total += 40;
            i++;
            continue;

        }
        if (s[i] === 'X' && next === 'C') {
            total += 90;
            i++;
            continue;

        }
        if (s[i] === 'C' && next === 'D') {
            total += 400;
            i++;
            continue;

        }
        if (s[i] === 'C' && next === 'M') {
            total += 900;
            i++;
            continue;
        }

        total += m.get(s[i]);
    }
    return total;
};
// @lc code=end

