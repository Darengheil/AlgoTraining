from typing import List

class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        l = 0
        for i in accounts:
            x = sum(i)
            if x > l:
                l = x
        return l

answer = Solution()
answer.maximumWealth([[1,2,3],[3,2,1]])
answer.maximumWealth([[1,5],[7,3],[3,5]])
answer.maximumWealth([[2,8,7],[7,1,3],[1,9,5]])


        #     x = 0
        #     for j in i:
        #         sum = sum + j
        #     if sum > x:
        #         x = sum
        # print(x)
        # return x