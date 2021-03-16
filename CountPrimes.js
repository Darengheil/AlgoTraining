/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
     if(n===2){
         return 0;
     }
    let counter = 0;
    let isprime = true;
    for(let i = 2; i < n ; i++){
        isprime = true;
        let lim = Math.round(Math.sqrt(i));
        for(let j = 2; j <= lim ; j++){
            if(i%j === 0){
                isprime = false;
                break;
            }
        }
        if(isprime){
            counter++;
        }
    }
    return counter;
};



console.log(countPrimes(10));// 4
console.log(countPrimes(24));// 9
console.log(countPrimes(0));// 0
console.log(countPrimes(1));// 0
console.log(countPrimes(4));// 2
console.log(countPrimes(8));// 4
console.log(countPrimes(9));// 4
console.log(countPrimes(2));// 0
console.log(countPrimes(3));// 1