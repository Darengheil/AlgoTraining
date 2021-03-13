/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    return (parseFloat(Math.log(n)/Math.log(3)).toPrecision(14))%1 === 0;
};

console.log(isPowerOfThree(27)); //true
console.log(isPowerOfThree(0)); //false
console.log(isPowerOfThree(9)); //true
console.log(isPowerOfThree(45)); //false
console.log(isPowerOfThree(-3)); //false
console.log(isPowerOfThree(1)); //true
console.log(isPowerOfThree(19682)); // false
console.log(isPowerOfThree(81)); // true

/*
    return (parseFloat(Math.log(n)/Math.log(3)).toPrecision(10))%1 === 0;    
*/