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