/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let answ = false;
    let SetTest = new Set();
    while(true) {        
        let arr = [];
        let sum = n;
        if(sum === 1){
            answ = true;
            break;
        }
        while(sum>0){
            arr.unshift(sum%10);
            sum = Math.floor(sum / 10);
        }
        if(SetTest.has(n)){
            break;
        }
        SetTest.add(n);
        n = arr.reduce((sum, num) => { 
            return sum + Math.pow(num, 2);
        }, 0);
    }
    return answ;
};

// TODO
// wrong answer
// var isHappy = function(n) {
//     let newarr = Array.from(String(n), Number);
//     let newint = 0;
//     if(n === 1 || n === 7){
//         return true;
//     }
//     for(let i =0; i < newarr.length; i++) {             
//         if(newarr.length>1){
//             while(newint !== 1){
//                 newint += Math.pow(newarr[i],2);
//             }            
//         }   
//         else{
//             return false;
//         }
//     }
//     return true; 
// };


console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
console.log(isHappy(1)); // true
console.log(isHappy(7)); // true

