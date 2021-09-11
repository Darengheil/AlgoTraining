from typing import List
class Solution:
    def numberOfSteps(self, num: int) -> int:
        counter = 0
        while num != 0:
            if num % 2 == 0:
                num /= 2
                counter += 1
            else:
                num -= 1
                counter += 1
        return counter

answer = Solution()
answer.numberOfSteps(14)
answer.numberOfSteps(8)
answer.numberOfSteps(123)
