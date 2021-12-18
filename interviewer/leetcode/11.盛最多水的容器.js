/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let startIndex = 0;
    let endIndex = height.length - 1;
    let maxVal = 0;
    while (startIndex < endIndex) {
        const currentValue = Math.min(height[startIndex], height[endIndex]) * (endIndex - startIndex);
        currentValue > maxVal && (maxVal = currentValue);
        height[startIndex] > height[endIndex] ? endIndex-- : startIndex++;
    }
    return maxVal;
};
// @lc code=end
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));



/*
 * 思路：
 *  根据运算，相对小的边界，已经是目前可以存在的最大值，将它的位置内推1位，再次尝试
 *
 */