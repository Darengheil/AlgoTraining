from typing import List

class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        max = candies[0]
        for i in range(1, len(candies)):
            if candies[i] > max:
                max = candies[i]
        answ = []
        for i in candies:
            if i + extraCandies >= max:
                answ.append(True)
            else:
                answ.append(False)
        return answ


answer = Solution()
answer.kidsWithCandies([2,3,5,1,3], 3)
answer.kidsWithCandies([4,2,1,1,2], 1)
answer.kidsWithCandies([12,1,12], 10)