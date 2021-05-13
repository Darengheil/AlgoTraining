/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let answ = [];
    let temp = [];
    while(temp.length<=numRows){
        temp.push(1);
        console.log(temp);
    }
    return answ;
};


console.log(generate(5)); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// console.log(generate(1)); //[[1]]
// TODO List?