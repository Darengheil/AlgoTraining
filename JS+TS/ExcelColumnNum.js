/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    if(s===null || s.length === 0){
        return 0;
    }
    let answ = 0;
    for(let i = 0; i < s.length; i++){
        answ = answ * 26 + (s.charCodeAt(i) - 64);
    }
    return answ;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));