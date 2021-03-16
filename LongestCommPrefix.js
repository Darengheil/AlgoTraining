/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
     if(strs.length === 0){
        return '';
     }
     let firststr = strs[0];
     for(let i = 1; i < strs.length; i++) {
         while(strs[i].indexOf(firststr)!== 0){
            
         }
     }
};

console.log(strStr(["flower","flow","flight"]));// "f1"
console.log(strStr(["dog","racecar","car"]));// ""
// TODO