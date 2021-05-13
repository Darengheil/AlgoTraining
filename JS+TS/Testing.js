// it compiles to javascript file with same code, after which you can start debugging
//  the main purpose of typescript is to make static types check to avoid a lot of problems and then run it as js file
function maxProfit(prices) {
    var maxtomin = Math.max.apply(Math, prices);
    var profit = 0;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < maxtomin) {
            maxtomin = prices[i];
        }
        else if ((prices[i] - maxtomin) > profit) {
            profit = prices[i] - maxtomin;
        }
    }
    return profit;
}
;
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7,6,4,3,1]));
// console.log(maxProfit([2,4,1]));
