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
		var list, iten;
		list = DLList.new();
		expect(list.length()).to.equal(0);
		item = list.push(1);
		expect(list.length()).to.equal(1);
		expect(list.pop()).to.equal(item.value);
		expect(list.isEmpty()).to.be.true;
	});
	it('first() functions correctly', function(){
		var list, item1, item2;
		list = DLList.new();
		expect(function(){list.first()}).to.throw(Error);
		item1 = list.push(1);
		expect(function(){list.first()}).to.not.throw(Error);
		expect(list.first()).to.equal(item1);
		item2 = list.unshift(2);
		expect(list.first()).to.equal(item2);
		list.shift();
		expect(list.first()).to.equal(item1);
	});
	it('last() functions correctly', function(){
		var list, item1, item2;
		list = DLList.new();
		expect(function(){list.last()}).to.throw(Error);
		item1 = list.push(1);
		expect(function(){list.last()}).to.not.throw(Error);
		expect(list.last()).to.equal(item1);
		item2 = list.push(2);
		expect(list.last()).to.equal(item2);
		list.pop();
		expect(list.last()).to.equal(item1);
	});
	it('endAt() functions correctly', function(){
		var list, item1, item2, item3;
		list = DLList.new();
		item1 = list.push(1);
		item3 = list.push(3);
		item2 = list.insertAt(2,item1);
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
		item2 = list.push(2) ;
		item3 = list.push(3);
		expect(list.length()).to.equal(3);
		expect(list.last()).to.equal(item3);
		list.pop();
		expect(list.length()).to.equal(2);
		expect(list.last()).to.equal(item2);
	});
	it('shift() functions correctly', function(){
		var list, item1, item2, item3;
		list = DLList.new();
		item1 = list.push(1);
		item2 = list.push(2);
		item3 = list.push(3);
		expect(list.length()).to.equal(3);
		expect(list.first()).to.equal(item1);
		list.shift();
		expect(list.length()).to.equal(2);
		expect(list.first()).to.equal(item2);
	});
	it('isFirst() functions correctly', function(){
		var list, item1, item2, item3;
		list = DLList.new();
		item1 = list.push(1);
		item3 = list.push(3);
		item2 = list.insertAt(2,item1);
		expect(list.isFirst(item1)).to.be.true;
		expect(list.isFirst(item2)).to.be.false;
		expect(list.isFirst(item3)).to.be.false;
		list.shift();
		expect(list.isFirst(item2)).to.be.true;
	});
	it('isLast() functions correctly', function(){
		var list, item1, item2, item3;
		list = DLList.new();
		item1 = list.push(1);
		item3 = list.push(3);
		item2 = list.insertAt(2,item1);
		expect(list.isLast(item1)).to.be.false;
		expect(list.isLast(item2)).to.be.false;
		expect(list.isLast(item3)).to.be.true;
		list.pop();
		expect(list.isLast(item2)).to.be.true;
	});
	it('iterator() functions correctly', function(){
		var list, item1, item2, item3, item4, arr;
		list = DLList.new();
		item1 = list.push(1);
		item2 = list.push(2);
		item3 = list.push(3);
		item4 = list.push(4);
		arr = list.iterator().toArray();
		expect(arr.length).to.equal(4);
		expect(arr[2]).to.equal(item3);
		expect(arr[3].value).to.equal(4);
	});
	it('forEach() functions correctly', function(){
		var list, item1, item2, item3, item4, arr, func;
		list = DLList.new();
		item1 = list.push(1);
		item2 = list.push(2);
		item3 = list.push(3);
		item4 = list.push(4);
		func = function(n){
			return n += 1;
		};
		list.forEach(func);
		arr = list.iterator().toArray();
		expect(arr.length).to.equal(4);
		expect(arr[2]).to.equal(item3);
		expect(arr[3].value).to.equal(5);
	});
	it('toArray() functions correctly', function(){
		var list, arr;
		list = DLList.new();
		list.push(1);
		list.push(2);
		list.push(3);
		list.push(4);
		arr = list.toArray();
		expect(arr.length).to.equal(4);
		expect(arr[0]).to.equal(1);
		expect(arr[3]).to.equal(4);
	});
	it('iterateFrom() functions correctly', function(){
		var list, ittr, item;
		list = DLList.new();
		list.push(1);
		list.push(2);
		item = list.push(3);
		list.push(4);
		list.push(5);
		list.push(6);
		ittr = list.iterateFrom(item).toArray();
		expect(ittr.length).to.equal(4);
		expect(ittr[0]).to.equal(item);
		expect(ittr[3].value).to.equal(6);
	});
	it('reverseIterateFrom() functions correctly', function(){
		var list, ittr, item;
		list = DLList.new();
		list.push(1);
		list.push(2);
		item = list.push(3);
		list.push(4);
		list.push(5);
		list.push(6);
		ittr = list.reverseIterateFrom(item).toArray();
		expect(ittr.length).to.equal(3);
		expect(ittr[0]).to.equal(item);
		expect(ittr[1].value).to.equal(2);
		expect(ittr[2].value).to.equal(1);
	});
});