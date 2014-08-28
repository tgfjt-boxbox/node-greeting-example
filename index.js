'use strict';

var words = require('./lib/words.js');
var bars = require('./lib/bars.js');


module.exports.hello = function() {
	return words[Math.floor(Math.random() * words.length)];
};


module.exports.waveline = function(n) {
	var ret = [];

	for (var i = 0; i < Math.max(0, n); i++) {
		ret.push(bars[Math.floor(Math.random() * bars.length)]);
	}

	return ret.join('');
};
