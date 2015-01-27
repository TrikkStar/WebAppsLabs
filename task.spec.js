/*
 * task.spec.js
 *
 * Test file for your task class
 */
var expect, Task;

expect = require('./chai.js').expect;

Task = require('./task.js');

function randomString(len) {
	var arr = [], caseRange, i;
	if (len == null) { len = 5; }
	for (i = 0; i < len; i += 1) {
		caseRange = [65, 97][Math.floor(Math.random() * 2)];
		arr.push(Math.floor(Math.random() * 26) + caseRange);
	}
	return String.fromCharCode.apply(String, arr);
}

// ADD YOUR TESTS HERE
describe('Your makeNewTask function', function() {
	var task = Task.new();
	it('returns an object', function(){
		expect(task).to.be.a('object');
	});
	it('returns an object with correct keys', function(){
		expect(task).to.have.ownProperty('title', 'completedTime', 'tags', 'id');
	});
});

describe('Your makeTaskFromObject function', function() {
	var obj, task, str;
	str = randomString(5);
	obj = {'title': str, 'id': 'ToBeDetermined'};
	task = Task.fromObject(obj);

	it('returns an object', function(){
		expect(task).to.be.a('object');
	});
	it('returns an object with correct keys', function(){
		expect(task).to.have.ownProperty('title', 'completedTime', 'tags', 'id');
	});
	it('returns an object with correct title value', function(){
		expect(task.title).to.equal(str);
	});
	// it('returns an object with correct tags', function(){
	// 	//unsure how to impliment this test, need to do later. 
	// 	//Possibly in a diffrent testing case
	// });
});
