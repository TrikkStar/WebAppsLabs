/*
 * history.spec.js
 *
 * Test file for your history class
 */
var expect, DLList, CmdHistory;

expect = require('./chai.js').expect;

DLList = require('./dllist.js');
CmdHistory = require('./history.js');

describe('Your makeNewList function', function(){
	var list;
	list = DLList.new();
	it('returns an object', function(){
		expect(list).to.be.a("object");
	});
	it('returns an object with correct keys', function(){
		expect(list).to.have.ownProperty("sentinel", "isEmpty", "length", "first", "last", "insertAt", "unshift", "push", "endAt", "remove", "pop", "shift", "isFirst", "isLast", "iterator", "forEach", "toArray", "iterateFrom", "reverseIterateFrom");
	});
});

describe('Your prototype method', function(){
	it.skip('isEmpty() functions correctly', function(){
		list = DLList.new();
		expect(list.isEmpty()).to.be.true;
		//add element(s) here
		expect(list.isEmpty()).to.be.false;
	});
	it.skip('length() functions correctly', function(){
		list = DLList.new();
		expect(list.length()).to.equal(0);
		//add elements
		//test added elements
	});
	it.skip('first() functions correctly', function(){
		
	});
	it.skip('last() functions correctly', function(){
		
	});
	it.skip('insertAt() functions correctly', function(){
		
	});
	it.skip('unshift() functions correctly', function(){
		
	});
	it.skip('push() functions correctly', function(){
		
	});
	it.skip('endAt() functions correctly', function(){
		
	});
	it.skip('remove() functions correctly', function(){
		
	});
	it.skip('pop() functions correctly', function(){
		
	});
	it.skip('shift() functions correctly', function(){
		
	});
	it.skip('isFirst() functions correctly', function(){
		
	});
	it.skip('isLast() functions correctly', function(){
		
	});
	it.skip('iterator() functions correctly', function(){
		
	});
	it.skip('forEach() functions correctly', function(){
		
	});
	it.skip('toArray() functions correctly', function(){
		
	});
	it.skip('iterateFrom() functions correctly', function(){
		
	});
	it.skip('reverseIterateFrom() functions correctly', function(){
		
	});
});