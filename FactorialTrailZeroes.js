/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
     let res = 0;
     while(n = Math.floor(n/5))res+=n;
    return res;     
};

// the idea is to count how many times there is 5 because 0's can be produced only with 5's
console.log(trailingZeroes(3));// 0
console.log(trailingZeroes(5));// 1
console.log(trailingZeroes(0));// 0
console.log(trailingZeroes(15));// 3
console.log(trailingZeroes(10));// 2
console.log(trailingZeroes(8));// 1
console.log(trailingZeroes(13));// 2
