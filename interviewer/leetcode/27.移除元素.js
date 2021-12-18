/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] === val) {
            while (nums[j] === val) {
                j--;
            }
            turnArrayValue(nums, [i, j]);
        }
    }
};
// @lc code=end
const turnArrayValue = (arr, [index1, index2]) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
