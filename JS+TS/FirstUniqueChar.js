/**
 * @param {string} s
 * @return {number}
 */

//  let s = 'loveleetcode';

 var firstUniqChar = function(s) {
    let result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
    for(const property in result){
        if(result[property] === 1){
            return s.indexOf(property);
        }
    }
    return -1;
};


console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));


