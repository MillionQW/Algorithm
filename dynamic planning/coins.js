function MinCoinChange(coins) {
    // let coins = coins;
    let cache = {};

    this.makeChange = function(amount) {
        let me = this;  
        if (!amount) {
            return [];
        }
        if (cache[amount]) {
            // 如果已经算出来了，就返回
            return cache[amount];
        }
        let min = [], newMin, newAmount;
        for (let i = 0; i < coins.length; i++) {
            // 先从第一个硬币开始
            let coin = coins[i];
            // 把硬币减掉，看还有没有值
            newAmount = amount - coin;Z
            if (newAmount >= 0) {
                // 有就递归，直到 amount = 0 第一个 if 返回空数组
                newMin = me.makeChange(newAmount);
            }
            if (
                // 最后一个 if 要保证 newAmount 是大于等于0，新数组长度小于老数组
                newAmount >= 0 &&
                // newMin.length 小于 旧数组的情况
                (newMin.length < min.length - 1 || !min.length) // !min.length 是在第一个数硬币进入时
                // 这个考虑的是 amount 是 1 时，newMin.length = 0，newAmount = 0 的情况
                && (newMin.length || !newAmount)) {
                    min = [coin].concat(newMin);
                    console.log(`new Min ${min} for ${amount}`);
                }
        }
        cache[amount] = min;
        return cache[amount];
    }
}

let o = new MinCoinChange([2, 3]);
o.makeChange(3);