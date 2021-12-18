/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if(strs.length === 1) {
        return strs[0];
    }

    let value = '';
    let index = 0;
    let current = commonIndex(strs, 0);
    while (current !== false) {
        value += current;
        current = commonIndex(strs, ++index);
    }

    function commonIndex(strs, index) {
        let current;
        for (let item of strs) {
            if (current === undefined) {
                if (item[index] === undefined) {
                    return false;
                }
                current = item[index];
            } else {
                if (item[index] !== current) {
                    return false;
                }
            }
        }
        return current;
    }
    return value;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestCommonPrefix;
// @after-stub-for-debug-end