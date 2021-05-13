/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i]<prices[i+1]) {
            profit += (prices[i+1] - prices[i]);
        }
    }
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));

/*Another solution
     let iter = 0;
     let min = prices[0];
     let max = prices[0];
     let profit = 0;
     while(iter < prices.length - 1){
        while(iter < prices.length - 1 && prices[iter] >= prices[iter + 1]){
            iter++;
        }
        min = prices[iter];
        while(iter < prices.length - 1 && prices[iter] <= prices[iter + 1]){
            iter++;
        }
        max = prices[iter];
        profit += max-min;
        console.log(profit);
     }
     return profit;
*/