/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
     let answ = x.toString().split("");
    return parseInt(answ.reverse().join(''));
};


console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));

// TODO