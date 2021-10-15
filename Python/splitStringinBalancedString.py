from typing import List


class Solution:
    def balancedStringSplit(self, s: str) -> int:
        counter = 0
        answer = 0
        for i in s:
            if i == "L":
                counter += 1
            else:
                counter -= 1
            if counter == 0:
                answer += 1
        return answer


answer = Solution()
answer.balancedStringSplit("RLRRLLRLRL")
answer.balancedStringSplit("RLLLLRRRLR")
answer.balancedStringSplit("LLLLRRRR")
answer.balancedStringSplit("RLRRRLLRLL")
