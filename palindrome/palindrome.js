var Palindrome = function() {
    this.check = function(str) {
    	if(str == undefined){
    		throw new Error('undefined');
    	}
        return str == str.split('').reverse().join('');
    }
}

module.exports = Palindrome;
