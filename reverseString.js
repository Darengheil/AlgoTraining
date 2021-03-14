//  always read documentation to know exact methods which exists in your language
function test(s){
    s.reverse();
    return s;
}


// too much code
// function test(s){
//     let newarr = [];
//     for(let i = s.length-1;i>=0;i--){
//         newarr += s[i];
//     };
//     console.log(newarr.split(""));
//     return newarr.split("");
// }


test(["h","e","l","l","o"]);
test(["H","a","n","n","a","h"]);