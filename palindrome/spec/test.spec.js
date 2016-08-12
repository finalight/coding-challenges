var Palindrome = require('../palindrome');

describe('Palindrome tester', function() {

    it('try to catch error', function() {
        var palindrome = new Palindrome();
        expect(function() {
            palindrome.check(null)
        }).toThrow();
    });

    it('standard english palindrome word', function() {
        var palindrome = new Palindrome();
        expect(palindrome.check('noon')).toEqual(true);
    });

    it('another standard english palindrome word', function() {
        var palindrome = new Palindrome();
        expect(palindrome.check('racecar')).toEqual(true);
    });

    it('empty string', function() {
        var palindrome = new Palindrome();
        expect(palindrome.check('')).toEqual(true);
    });

    it('single character', function() {
        var palindrome = new Palindrome();
        expect(palindrome.check('a')).toEqual(true);
    });

    it('2 characters palindrome', function() {
        var palindrome = new Palindrome();
        expect(palindrome.check('aa')).toEqual(true);
    });

    it('2 characters non-palindrome', function() {
        var palindrome = new Palindrome();
        expect(palindrome.check('ab')).toEqual(false);
    });


});
