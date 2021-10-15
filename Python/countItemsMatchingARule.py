from typing import List


class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        answer = 0
        for i in items:
            if ruleKey == "type":
                if i[0] == ruleValue:
                    answer += 1
            elif ruleKey == "color":
                if i[1] == ruleValue:
                    answer += 1
            elif ruleKey == "name":
                if i[2] == ruleValue:
                    answer += 1
        return answer


answer = Solution()
answer.countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], [
                    "phone", "gold", "iphone"]], "color", "silver")
answer.countMatches([["phone", "blue", "pixel"], ["computer", "silver", "phone"], [
                    "phone", "gold", "iphone"]], "type", "phone")
