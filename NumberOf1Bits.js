/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let arr = [];
    for(let i = 0; i < n.length; i++) {
        let char = n.charCodeAt(i);
        arr.push(char >>> 16);
        arr.push(char&0xFF);
    }
    return arr;
    for(let i = 0; i < newarr.length; i++) {
        if(newarr[i] === "1"){
            count++;
        }
    }
    return count;
};

console.log(hammingWeight(00000000000000000000000000001011));
// console.log(hammingWeight(00000000000000000000000010000000));
// console.log(hammingWeight(11111111111111111111111111111101));

// TODO