/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = new Map();
    map.set(')', '(');
    map.set(']', '[');
    map.set('}', '{');

    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            arr.push(s[i]);
        } else {
            const patch = arr[arr.length - 1];
            if (map.get(s[i]) === patch) {
                arr.pop();
            } else {
                return false;
            }
        }
    }
    return arr.length < 1;
};
// @lc code=end

