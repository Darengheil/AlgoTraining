from typing import List
class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:     
        answ = list(s)
        for i in range(len(s)):
            answ[indices[i]] = s[i]  
        return ''.join(answ)

answer = Solution()
answer.restoreString("codeleet", [4,5,6,7,0,2,1,3])
# answer.restoreString("abc", [0,1,2])
# answer.restoreString("aiohn", [3,1,4,2,0])
