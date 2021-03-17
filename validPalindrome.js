/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let answ = s.toLowerCase();
    let newstr = '';
    for(let i = 0; i < s.length; i++){
        if(answ[i].match(/[a-z0-9]/g)){
            newstr += answ[i];
        }
    }
    if(newstr === newstr.split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
};

console.log(isPalindrome("AAAAAAAA"));// true
// console.log(isPalindrome("A man, a plan, a canal: Panama"));// true
// console.log(isPalindrome("race a car"));// false
// console.log(isPalindrome("ab_a"));// true