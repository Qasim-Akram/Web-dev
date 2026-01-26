from typing import List

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        dup = []
        for i in nums:
            if i not in dup:
                dup.append(i)
            else:
                return True
        return False



class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sorted_s = sorted(s)
        sorted_t = sorted(t)
        if sorted_s == sorted_t:
            return True
        return False
