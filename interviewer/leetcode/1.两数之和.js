/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])];
        }
        map.set(nums[i], i);
    }
};
// @lc code=end

// 暴力循环法
// var twoSum = function (nums, target) {
//     for (let i = 0; i <= nums.length - 2; i++) {
//         for (let j = i + 1; j <= nums.length - 1; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end