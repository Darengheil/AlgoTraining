from typing import List
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        for i in range(1, len(nums)):
            nums[i] += nums[i-1]
        return nums


answer = Solution()
answer.runningSum([1, 2, 3, 4])
answer.runningSum([1, 1, 1, 1, 1])
answer.runningSum([3, 1, 2, 10, 1])
