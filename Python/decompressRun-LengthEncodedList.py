from typing import List


class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        lstep,rstep = 0,1
        answ = []
        while rstep < len(nums):
            answ+=[nums[rstep]] * nums[lstep]
            rstep += 2
            lstep += 2
        return answ


answer = Solution()
# answer.decompressRLElist([1, 2, 3, 4])
answer.decompressRLElist([1, 1, 2, 3])
