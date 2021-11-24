/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    // 存储数据
    const set = new Set();
    const length = s.length;
    let maxLength = 0, eIndex = 0;
    for (let i = 0; i < length; i++) {
        if (i !== 0) {
            set.delete(s[i - 1]);
        }

        while (eIndex < length && !set.has(s[eIndex])) {
            set.add(s[eIndex]);
            eIndex++;
        }
        maxLength = Math.max(maxLength, eIndex - 1 - i + 1);
    }
    return maxLength;
};
// @lc code=end

// lengthOfLongestSubstring("abcabcbb")
