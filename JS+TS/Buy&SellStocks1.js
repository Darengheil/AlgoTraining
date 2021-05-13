/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let maxtomin = Math.max(...prices);
    let profit = 0;
    for(let i =0; i < prices.length; i++) {
        if(prices[i] < maxtomin) {
            maxtomin = prices[i];
        }
        else if((prices[i] - maxtomin)> profit) {
            profit = prices[i] - maxtomin;
        }
    }
    return profit;
};
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2,4,1]));