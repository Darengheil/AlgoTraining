/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let lastelem = digits[digits.length - 1];
    lastelem++;
    if(lastelem.toString(10).length > 1){
        lastelem = lastelem.toString(10).split('').map(Number);
        digits.pop();
        let answ = digits.concat(lastelem);
        return answ;
    }else{
        digits[digits.length - 1] = lastelem;
    } 
    return digits;
};


// console.log(plusOne([1,2,3])); //[1,2,4]
// console.log(plusOne([4,3,2,1])); //[4,3,2,2]
// console.log(plusOne([0])); //[1]
// console.log(plusOne([9])); //[1,0]
console.log(plusOne([9,9])); //[1,0,0]

// TODO