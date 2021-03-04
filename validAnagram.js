/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sarr = s.split("");
    let tarr = t.split("");
    sarr.sort();
    tarr.sort();
    if(JSON.stringify(sarr) === JSON.stringify(tarr)){
        return true;
    }
    else{
        return false;
    }
};

console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));
