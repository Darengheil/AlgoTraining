/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b) => a-b);
    if(nums[0] === 1){
        return 0;
    }
    for(let i = 0; i <nums.length; i++){
        if((nums[i] + 1) !== nums[i+1]){
            return (nums[i] + 1);
        }
    }
};

// console.log(missingNumber([3,0,1]));
// console.log(missingNumber([0,1]));
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
// console.log(missingNumber([0]));
console.log(missingNumber([1]));
// console.log(missingNumber([0,2,3]));
