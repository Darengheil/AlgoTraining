from typing import List

class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        answ = []
        counter = 0
        for i in range(len(nums)):
            for j in range( len(nums)):
                if nums[i] > nums[j]:
                    counter += 1
            answ.append(counter)
        print(answ)

answer = Solution()
answer.smallerNumbersThanCurrent([8,1,2,2,3])
# Output: [4,0,1,1,3]
# answer.smallerNumbersThanCurrent([6,5,4,8])
# answer.smallerNumbersThanCurrent([7,7,7,7])
