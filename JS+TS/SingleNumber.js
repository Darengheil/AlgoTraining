/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { 
    let answ = [];
    const numstosolve = [...nums].sort();
    for(let i = 0; i < numstosolve.length; i++) {
        if((numstosolve[i+1] !== numstosolve[i])&&(numstosolve[i-1] !== numstosolve[i])){
            answ.push(numstosolve[i]);
        }
    }
    return answ;
};

/* hard to understand how it works
if(seen[item] !== 1){
    seen[item] = 1;
    out[j++] = item;
}
*/
// console.log(singleNumber([2,2,1]));
// console.log(singleNumber([4,1,2,1,2]));
// console.log(singleNumber([1]));
