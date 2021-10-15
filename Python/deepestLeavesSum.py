from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:        
        def preorder(node = root, depth = 0):
            nonlocal maxdepth, total
            if not node:
                return
            if depth > maxdepth:
                maxdepth = depth
                total = 0
            if depth == maxdepth:
                total += node.val
            preorder(node.left, depth + 1)
            preorder(node.right, depth + 1)

        maxdepth, total = -1, 0
        preorder()
        return total

answer = Solution()
answer.deepestLeavesSum([1,2,3,4,5,None,6,7,None,None,None,None,8])
# answer.deepestLeavesSum([6,7,8,2,7,1,3,9,None,1,4,None,None,None,5])
