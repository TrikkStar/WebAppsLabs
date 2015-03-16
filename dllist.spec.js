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
		var list, item1, item2;
		list = DLList.new();
		expect(list.isEmpty()).to.be.true;
		expect(function(){list.isEmpty()}).to.throw(Error);
		item1 = list.push(1);
		expect(list.isEmpty()).to.be.false;
		expect(function(){list.first()}).to.not.throw(Error);
		expect(list.first()).to.equal(item1);
		item2 = list.unshift(2);
		expect(list.first()).to.equal(item2);
	});
	it('last() functions correctly', function(){
		var list, item1, item2;
		list = DLList.new();
		expect(list.isEmpty()).to.be.true;
		expect(function(){list.last()}).to.throw(Error);
		item1 = list.push(1);
		expect(list.isEmpty()).to.be.false;
		expect(function(){list.last()}).to.not.throw(Error);
		expect(list.last()).to.equal(item1);
		item2 = list.push(2);
		expect(list.last()).to.equal(item2);
	});
	it('endAt() functions correctly', function(){
		var list, item1, item2, item3;
		list = DLList.new();
		item1 = list.push(1);
		item3 = list.push(3);
		item2 = list.insertAt(2,item1);
		expect(list.isEmpty()).to.be.false;
		expect(list.length()).to.equal(3);
		expect(list.first()).to.equal(item1);
		expect(list.last()).to.equal(item3);
		list.endAt(item2);
		expect(list.length()).to.equal(2);
		expect(list.last()).to.equal(item2);
		expect(list.first()).to.equal(item1);
	});
	it('remove() functions correctly', function(){
		var list, item1, item2, item3;
		list = DLList.new();
		item1 = list.push(1);
		item3 = list.push(3);
		item2 = list.insertAt(2,item1);
		expect(list.isEmpty()).to.be.false;
		expect(list.length()).to.equal(3);
		expect(list.first()).to.equal(item1);
		expect(list.last()).to.equal(item3);
		list.remove(item2);
		expect(list.length()).to.equal(2);
		expect(list.first()).to.equal(item1);
		expect(list.last()).to.equal(item3);
		list.remove(item1);
		expect(list.length()).to.equal(1);
		expect(list.first()).to.equal(item3);
		expect(list.last()).to.equal(item3);
	});
	it('pop() functions correctly', function(){
		var list, item1, item2, item3;
		list = DLList.new();
		item1 = list.push(1);
		item3 = list.push(3);
		item2 = list.insertAt(2,item1);
		expect(list.isEmpty()).to.be.false;
		expect(list.length()).to.equal(3);
		expect(list.first()).to.equal(item1);
		expect(list.last()).to.equal(item3);
		list.pop();
		expect(list.length()).to.equal(2);
		expect(list.first()).to.equal(item1);
		expect(list.last()).to.equal(item2);
	});
	it('shift() functions correctly', function(){
		var list, item1, item2, item3;
		list = DLList.new();
		item1 = list.push(1);
		item3 = list.push(3);
		item2 = list.insertAt(2,item1);
		expect(list.isEmpty()).to.be.false;
		expect(list.length()).to.equal(3);
		expect(list.first()).to.equal(item1);
		expect(list.last()).to.equal(item3);
		list.shift();
		expect(list.length()).to.equal(2);
		expect(list.last()).to.equal(item3);
		expect(list.first()).to.equal(item2);
	});
	it('isFirst() functions correctly', function(){
		var list, item1, item2, item3;
		list = DLList.new();
		item1 = list.push(1);
		item3 = list.push(3);
		item2 = list.insertAt(2,item1);
		expect(list.isEmpty()).to.be.false;
		expect(list.length()).to.equal(3);
		expect(list.first()).to.equal(item1);
		expect(list.last()).to.equal(item3);
		expect(list.isFirst(item1)).to.be.true;
		expect(list.isFirst(item2)).to.be.false;
		expect(list.isFirst(item3)).to.be.false;
	});
	it('isLast() functions correctly', function(){
		var list, item1, item2, item3;
		list = DLList.new();
		item1 = list.push(1);
		item3 = list.push(3);
		item2 = list.insertAt(2,item1);
		expect(list.isEmpty()).to.be.false;
		expect(list.length()).to.equal(3);
		expect(list.first()).to.equal(item1);
		expect(list.last()).to.equal(item3);
		expect(list.isLast(item1)).to.be.false;
		expect(list.isLast(item2)).to.be.false;
		expect(list.isLast(item3)).to.be.true;
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