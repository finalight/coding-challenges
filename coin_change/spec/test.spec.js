var CoinChange = require('../coinchange');

describe('Check coin change', function() {

    it('2 coins change', function() {
        var coinChange = new CoinChange();
        var result = "2 - 5, 1 - 1";
        expect(coinChange.change(11, [1, 2])).toEqual(result);
    });

    it('3 coins change', function() {
        var coinChange = new CoinChange();
        var result = "5 - 20, 2 - 0, 1 - 0";
        expect(coinChange.change(100, [1, 2, 5])).toEqual(result);
    });

    it('no coins change', function() {
        var coinChange = new CoinChange();
        var result = "5 - 0, 2 - 0";
        expect(coinChange.change(1, [5, 2])).toEqual(result);
    });

});
