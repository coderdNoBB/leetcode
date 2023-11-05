/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function compareNumbers(a, b) {
    return a - b;
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums3 = nums1.concat(nums2)
    nums3 = nums3.sort(compareNumbers)
    const length = nums3.length
    console.log(length)
    if (length % 2 == 0) {
        return (nums3[(length / 2) -1] + nums3[(length / 2)]) / 2  
    } else {
        return nums3[((length + 1) / 2) - 1]
    }
};
const nums1 = [1,3]
const nums2 = [2]
const nums3 = [1,3]
const nums4 = [2,4]

console.log(findMedianSortedArrays(nums1,nums2))
console.log(findMedianSortedArrays(nums3,nums4))
// @lc code=end

