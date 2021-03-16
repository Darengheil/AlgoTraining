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
            firststr = firststr.substr(0, firststr.length - 1);
            if(firststr === 0){
                return "";
            }
         }
     }
     return firststr;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));// "f1"
console.log(longestCommonPrefix(["dog","racecar","car"]));// ""