from typing import List

class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        ans = []
        for i in range(len(nums)):
            ans.append(i)
            ans[i] = nums[nums[i]]
        return ans


answer = Solution()
answer.buildArray([0, 2, 1, 5, 3, 4])
answer.buildArray([5, 0, 1, 2, 3, 4])
