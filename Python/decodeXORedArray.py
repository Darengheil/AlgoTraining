from typing import List


class Solution:
    def decode(self, encoded: List[int], first: int) -> List[int]:
        answ = [first]
        for i in encoded:
            answ.append(answ[-1]^i)
        return answ


answer = Solution()
answer.decode([1, 2, 3], 1)
# answer.decode([6, 2, 7, 3], 4)
