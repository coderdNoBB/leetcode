/*
 * @lc app=leetcode id=3 lang=java
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int result = 0;
        for (var i = 0; i < s.length(); i++) {
            var visited = new boolean[256];
            for (var j = i; j < s.length(); j++) {
                if (visited[s.charAt(j)] == true)
                    break;
                else {
                    result = Math.max(result, j - i + 1);
                    visited[s.charAt(j)] = true;
                }
            }
            visited[s.charAt(i)] = false;
        }
        return result;
    }

    public static void main(String[] args) {
        var s = new Solution();
        System.out.println(s.lengthOfLongestSubstring("abcabcbb"));
        System.out.println(s.lengthOfLongestSubstring("bbbbb"));
        System.out.println(s.lengthOfLongestSubstring("pwwkew"));
    }
}
// @lc code=end
