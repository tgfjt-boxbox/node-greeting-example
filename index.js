'use strict';

var words = require('./lib/words.js');
var bars = require('./lib/bars.js');


/**
 * [hello Return a message]
 * @return {String} a message.
 */
module.exports.hello = function() {
	return words[Math.floor(Math.random() * words.length)];
};


/**
 * [waveline Return String of Waveline]
 * @param  {Number} n Number of Strings.
 * @return {String}   Waveline.
 */
module.exports.waveline = function(n) {
	var ret = [];

	for (var i = 0; i < Math.max(0, n); i++) {
		ret.push(bars[Math.floor(Math.random() * bars.length)]);
	}

	return ret.join('');
};
