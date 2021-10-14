from typing import List


class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        ans = []
        answ = 0
        for i in operations:
            l = i[1:-1]
            ans.append(l)
        for i in ans:
            if i == "+":
                answ+=1
            else:
                answ-=1
        return answ


answer = Solution()
answer.finalValueAfterOperations(["--X", "X++", "X++"])
answer.finalValueAfterOperations(["++X","++X","X++"])
answer.finalValueAfterOperations(["X++","++X","--X","X--"])
