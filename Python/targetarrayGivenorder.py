from typing import List


class Solution:
    def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
        answ = []
        counter = 0
        for i in index:
            answ.insert(i, nums[counter])
            counter += 1
        return answ


answer = Solution()
answer.createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])
answer.createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])
answer.createTargetArray([1], [0])
