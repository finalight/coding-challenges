var CoinChange = function() {
    this.change = function(amount, changes) {
        var result = '';

        changes.sort();
        changes.reverse();
        if (changes.length > 0) {
            var changeAmount = 0;
            while (amount >= changes[0]) {
                changeAmount++;
                amount -= changes[0];
            }

            result += changes[0] + " - " + changeAmount + (changes.length == 1 ? '' : ', ');
            return result += this.change(amount, changes.slice(1))
        }

        return result;
    }
}

module.exports = CoinChange;
