from typing import List
from collections import Counter


class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        counter = Counter(nums)
        return sum([counter[n+k] for n in nums])


answer = Solution()
answer.countKDifference([1, 2, 2, 1], 1)
answer.countKDifference([1, 3], 3)
answer.countKDifference([3, 2, 1, 5, 4], 2)
