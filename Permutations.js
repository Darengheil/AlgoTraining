/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
     let answ = [];
     const subperm = (subarr, sumarr = []) => {
        if(subarr.length === 0) {
            answ.push(sumarr);
        }else{
            for(let i = 0; i < subarr.length; i++){
                let currarr = subarr.slice();
                let nextarr = currarr.splice(i,1);
                subperm(currarr.slice(), sumarr.concat(nextarr));
            }
        }
     }
     subperm(nums);

     return answ;
};

console.log(permute([1,2,3]));
// console.log(permute([0,1]));
// console.log(permute([1]));