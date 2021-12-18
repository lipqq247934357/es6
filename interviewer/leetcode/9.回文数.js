/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    x = x + '';

    let startIndex = 0;
    let endIndex = x.length - 1;

    while (startIndex < endIndex) {
        if (x[startIndex++] !== x[endIndex--]) {
            return false;
        }
    }
    return true;
};
// @lc code=end
console.log(isPalindrome(11211));
