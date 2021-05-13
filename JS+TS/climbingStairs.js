/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let first = 1;
    let sec = 2;
    if(n === 1){
        return 1;
    }
    for(let i = 2; i < n; i++){
        let third = first + sec;
        first = sec;
        sec = third;
    }
    return sec;
};


console.log(climbStairs(1));// 1
console.log(climbStairs(2));// 2
console.log(climbStairs(3));// 3
console.log(climbStairs(4));// 5
console.log(climbStairs(5));// 8
console.log(climbStairs(6));// 13
console.log(climbStairs(7));// 21