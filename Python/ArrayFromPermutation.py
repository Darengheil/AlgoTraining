from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        l = 0
        r = len(nums) - 1
        while l < r:
            sum = nums[l] + nums[r]
            if sum == target:
                print([l, r])
                return[l, r]
            r -= 1
        l += 1
        return[]


answer = Solution()
answer.twoSum([2, 7, 11, 15], 9)
answer.twoSum([3, 2, 4], 6)
answer.twoSum([3, 3], 6)
