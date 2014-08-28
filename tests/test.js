'use strict';

var assert = require('assert');
var sinon = require('sinon');

var words = require('../lib/words');
var greeting = require('..');

var count = words.length;
var stub = sinon.stub(Math, 'random').returns(count);

var tmp;


describe('greeting', function() {
	describe('#hello', function() {
		it('挨拶文からランダムに結果が返ること', function() {
			assert.equal(greeting.hello(), words[Math.floor(Math.random() * count)]);
			stub.restore();
		});
	});

	describe('#waveline', function() {
		before(function() {
			tmp = greeting.waveline(10);
			console.log(tmp);
		});
		it('指定した数の文字列が返ること', function () {
			assert.equal(tmp.length, 10);
		});
	});
});
