class Solution:
    def defangIPaddr(self, address: str) -> str:
        self.address = address
        answer = self.address.replace(".","[.]")
        return answer

answer = Solution()
answer.defangIPaddr("1.1.1.1")
answer.defangIPaddr("255.100.50.0")