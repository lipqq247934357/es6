/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * 
 * 不能超过最大范围，在超过之间进行校验
 * Math.ceil: 整数向值增大取整，负数向值减小取整
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // 处理为0的情况
    let res = 0;

    // 从右往左存储起来
    while (x !== 0) {
        let value = (x % 10).toFixed(0);
        if (res > 214748364 || (res == 214748364 && value > 7)) {
            return 0;
        }
        if (res < -214748364 || (res == -214748364 && value < -8)) {
            return 0;
        }
        res = res * 10 + Number(value);
        x = x < 0 ? Math.ceil((x / 10)) : Math.floor((x / 10));
    }

    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverse;
// @after-stub-for-debug-end