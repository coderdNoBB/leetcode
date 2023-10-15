/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map1 = new Map();
    const indices = []
    for (let i = 0; i < nums.length; i++) {
        map1.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        const key = target - nums[i]
        const j = map1.get(key)
        if (j !== undefined && i!==j) {
            indices.push(i,j)
            break;// looks like we only need one winner and no duplication is allowed 
        }
    }
    return indices
};
// @lc code=end

