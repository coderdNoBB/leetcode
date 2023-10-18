#
# @lc app=leetcode id=2 lang=python3
#
# [2] Add Two Numbers
#

# @lc code=start
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1, l2):
        # I am going to convert digits from str to int
        l1_str = ''
        l2_str = ''
        while l1:
            l1_str += str(l1.val)
            l1 = l1.next
        while l2:
            l2_str += str(l2.val)
            l2 = l2.next
        # reverse the string array
        l1_int = int(l1_str[::-1])
        l2_int = int(l2_str[::-1])
        arr = [int(x) for x in (str(l1_int + l2_int)[::-1])]
        return self.convert_arr_to_Listnode(arr)

    def convert_arr_to_Listnode(self, arr):
        listNode_arr = arr
        root = ListNode(float("inf"))
        head = root
        for x in listNode_arr:
            root.next = ListNode(x)
            root = root.next
        return head.next

# @lc code=end
