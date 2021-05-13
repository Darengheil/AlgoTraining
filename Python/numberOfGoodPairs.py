from typing import List

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        counter = 0
        for i in range(len(nums)):
            for j in range(i+1 , len(nums)):                
                if nums[i] == nums[j]:
                    counter += 1
        return counter

answer = Solution()
answer.numIdenticalPairs([1,2,3,1,1,3])
# answer.numIdenticalPairs([1,1,1,1])
# answer.numIdenticalPairs([1,2,3])