class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:   
        counter = 0
        for i in jewels:
            counter += stones.count(i);
        return counter

answer = Solution()
answer.numJewelsInStones("aA", "aAAbbbb")
answer.numJewelsInStones("z", "ZZ")