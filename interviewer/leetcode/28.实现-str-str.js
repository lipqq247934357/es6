/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    debugger;
    // 处理边界值
    const length = needle.length;
    if (!length) {
        return 0;
    }

    const haystackLength = haystack.length;
    for (let i = 0; i < haystackLength; i++) {
        const [isContain, needTry] = isContainer(i);
        if (isContain) {
            return i;
        }
        if (!needTry) {
            return -1;
        }
    }

    return -1;
    function isContainer(index) {
        if (index + length - 1 > haystackLength - 1) {
            return [false, false];
        }
        const currentLength = index + length;
        for (let i = index; i < currentLength; i++) {
            if (haystack[i] === needle[i - index]) {
                continue;
            } else {
                return [false, true];
            }
        }
        return [true, false];
    }


};

strStr('hello', 'll');
// @lc code=end

