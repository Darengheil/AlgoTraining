/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { 
    let seen = [];
    let out = [];
    let j =0;
    for(let i = 0; i < nums.length; i++) {
        let item = nums[i];
        // !!!
    }
    return out;
};

/* hard to understand how it works
if(seen[item] !== 1){
    seen[item] = 1;
    out[j++] = item;
}
*/
// console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
// console.log(singleNumber([1]));
