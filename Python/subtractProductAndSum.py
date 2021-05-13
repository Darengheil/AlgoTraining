from typing import List
class Solution:
    def subtractProductAndSum(self, n: int) -> int:        
        forSum = 0
        forProd = 1
        arr = [int(i) for i in str(n)]
        for i in arr:
            forSum += i
            forProd *= i
        answ = forProd - forSum
        return answ

answer = Solution()
answer.subtractProductAndSum(234)
# answer.smallerNumbersThanCurrent(4421)
