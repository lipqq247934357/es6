/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    let sMap = new Map();
    let tMap = new Map();
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const sValue = s[i];
        const tValue = t[i];
        if ((sMap.get(sValue) && sMap.get(sValue) !== tValue) || (tMap.get(tValue) && tMap.get(tValue) !== sValue)) {
            return false;
        }
        sMap.set(sValue, tValue);
        tMap.set(tValue, sValue);
    }
    return true;
};
isIsomorphic('foo', 'bar');
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isIsomorphic;
// @after-stub-for-debug-end