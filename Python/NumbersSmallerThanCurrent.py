from typing import List
class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        newnums = []
        for i in range(0, len(nums)):
            newcounter = 0
            for j in range(0, len(nums)):
                counter = 0
                if j != i and nums[j] < nums[i]:
                    counter += 1
                newcounter += counter
            newnums.append(newcounter)
        return newnums


answer = Solution()
answer.smallerNumbersThanCurrent([8, 1, 2, 2, 3])
answer.smallerNumbersThanCurrent([6, 5, 4, 8])
answer.smallerNumbersThanCurrent([7, 7, 7, 7])
