from typing import List

class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        firstarr = []
        for i in range(0, n):
            firstarr.append(nums[i])
        secondarr = []
        for l in range(n, len(nums)):
            secondarr.append(nums[l])

        result = [None]*(len(firstarr)+len(secondarr))
        result[::2] = firstarr
        result[1::2] = secondarr
        return result

answer = Solution()
answer.shuffle([2,5,1,3,4,7], 3)
# answer.shuffle([1,2,3,4,4,3,2,1], 4)
# answer.shuffle([1,1,2,2], 2)