/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
     let iter = 0;
     let min = prices[0];
     let max = prices[0];
     let profit = 0;
     while(iter < prices.length - 1){
        while(iter < prices.length - 1 && prices[iter] > prices[iter + 1]){
            iter++;
        }
        min = prices[iter];
        while(iter < prices.length - 1 && prices[iter] < prices[iter + 1]){
            iter++;
        }
        max = prices[iter];
        profit += max-min;
        console.log(profit);
     }
     return profit;
};


console.log(maxProfit([1,3,2,8,4,9],2)); // 8
// console.log(maxProfit([1,3,7,5,10,3],3)); // 6
// [7, 1, 5, 3, 6, 4]
//  TODO it is from medium tasks