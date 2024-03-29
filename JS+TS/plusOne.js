/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
     for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i]<9){
            digits[i]++;
            return digits;            
        }
        else{
            digits[i]=0;
        }
     }     
     digits.unshift(1);
     return digits;
};


// console.log(plusOne([1,2,3])); //[1,2,4]
// console.log(plusOne([4,3,2,1])); //[4,3,2,2]
// console.log(plusOne([4,3,2,1,9,9])); //[4,3,2,2]
// console.log(plusOne([0])); //[1]
// console.log(plusOne([9])); //[1,0]
// console.log(plusOne([9,9])); //[1,0,0]
// console.log(plusOne([9,9,9,9,9])); //[1,0,0,0,0,0]
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])); //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

/*
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
*/