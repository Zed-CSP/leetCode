var maxProfit = function(prices) {

    let maxProfit = 0; 
    let sellIdx = prices.length - 1;

    for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
        let sellPrice = prices[sellIdx];
        let buyPrice = prices[buyIdx]
        let profit = sellPrice - buyPrice

        if (buyPrice - sellPrice >= 0) { // if inverted 
            sellIdx = buyIdx;
        } else {
            maxProfit = Math.max(profit, maxProfit); // set max profit
        }

    }
    return maxProfit;
};