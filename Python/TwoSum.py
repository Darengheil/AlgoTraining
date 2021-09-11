from typing import List
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        answ = []
        for i in nums:
            for j in nums:
                if ((i + j) == target) and nums[i] != nums[j]:
                    answ.append(nums.index(i))
                    answ.append(nums.index(j))
        # del answ[2:]
        print(answ)
        return answ



answer = Solution()
answer.twoSum([2,7,11,15], 9)
answer.twoSum([3,2,4], 6)
answer.twoSum([3,3], 6)