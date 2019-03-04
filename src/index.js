// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let cur = currency;
    const h = 50;
    const q = 25;
    const d = 10;
    const n = 5;
    const p = 1;
    let obj = {};

    if (cur > 10000){
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    }
    const numH = Math.floor(cur / h); 
    if (numH >= 1) {
        obj.H = numH;
        cur %= h; 
    }
    const numQ = Math.floor(cur / q);
    if (numQ >= 1) {
        obj.Q = numQ;
        cur %= q; 
    } 
    const numD = Math.floor(cur / d);
    if (numD >= 1) {
        obj.D = numD;
        cur %= d; 
    } 
    const numN = Math.floor(cur / n);
    if (numN >= 1) {
        obj.N = numN;
        cur %= n; 
    } 
    const numP = Math.floor(cur / p);
    if (numP >= 1) {
        obj.P = numP;
        cur %= p; 
    } 
    return obj;
}