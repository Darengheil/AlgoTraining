/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    let log = Math.log(n)/Math.log(3);
    if (log === parseInt(log, 10))
        console.log("data is integer")
    else
        console.log("data is not an integer")
    return (Math.log(n)/Math.log(3));
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(45));
console.log(isPowerOfThree(-3));
console.log(isPowerOfThree(1));

/*

    
*/