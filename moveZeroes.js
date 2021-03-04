/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            nums[counter++] = nums[i];
        }
    }
    for(let i = counter; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12,223,22,0]));
// console.log(moveZeroes([0,1,0,3,12]));
// console.log(moveZeroes([0,1]));
// console.log(moveZeroes([0,0,1,1]));