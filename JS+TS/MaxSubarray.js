/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
     let maxsum = -Infinity;
     let cursum = 0;
    for(i in nums) {
        cursum = Math.max(nums[i], cursum + nums[i]);
        maxsum = Math.max(maxsum, cursum)
    }
    return maxsum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([-1]));
