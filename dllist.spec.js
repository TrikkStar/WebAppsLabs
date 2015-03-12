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
	it('isEmpty() functions correctly', function(){
		var list;
		list = DLList.new();
		expect(list.isEmpty()).to.be.true;
		list.unshift(1);
		expect(list.isEmpty()).to.be.false;
	});
	it('length() functions correctly', function(){
		var list, item1, item2;
		list = DLList.new();
		expect(list.isEmpty()).to.be.true;
		expect(list.length()).to.equal(0);
		item1 = list.push(1);
		expect(list.length()).to.equal(1);
		item2 = list.push(2);
		expect(list.length()).to.equal(2);
	});
	it('first() functions correctly', function(){
		var list, item1, item2, err;
		var err = new ReferenceError("Invalid Call: list is empty");
		list = DLList.new();
		expect(list.isEmpty()).to.be.true;
		expect(function(){list.isEmpty()}).to.throw(err);
		item1 = list.push(1);
		expect(list.isEmpty()).to.be.false;
		expect(list.first()).to.not.throw(err);
		expect(list.first()).to.equal(item1);
		item2 = list.unshift(2);
		expect(list.first()).to.equal(item2);
	});
	it('last() functions correctly', function(){
		var list, item1, item2, err;
		var err = new ReferenceError("Invalid Call: list is empty");
		list = DLList.new();
		expect(list.isEmpty()).to.be.true;
		expect(function(){list.last()}).to.throw(err);
		item1 = list.push(1);
		expect(list.isEmpty()).to.be.false;
		expect(list.last()).to.not.throw(err);
		expect(list.last()).to.equal(item1);
		item2 = list.push(2);
		expect(list.last()).to.equal(item2);
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