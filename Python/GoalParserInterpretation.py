from typing import List
class Solution:
    def interpret(self, command: str) -> str:
        newcommand = command.replace("(al)", "al")
        answ = newcommand.replace("()", "o")
        return answ

answer = Solution()
answer.interpret("G()(al)")
answer.interpret("G()()()()(al)")
answer.interpret("(al)G(al)()()G")