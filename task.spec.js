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
	var obj, task, str, tags, t1, t2;
	t1 = randomString(10);
	t2 = randomString(10);
	str = randomString(5);
	tags = [t1, t2];
	obj = {'title': str, 'tags': tags};
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
	it('returns an object with correct tags', function(){
		expect(task.tags).to.have.length(2);
		expect(task.tags).to.include(t1);
		expect(task.tags).to.include(t2);
	});
});

describe('Your makeTaskFromString function', function(){
	var str, task, t1, t2, full;
	str = randomString(7);
	t1 = "CharliePlaysPokemon";
	t2 = "abc";
	full = str + "#" + t1 + "#" + t2;
	task = Task.fromString(full);

	it('returns an object', function(){
		expect(task).to.be.a('object');
	});
	it('returns an object with correct keys', function(){
		expect(task).to.have.ownProperty('title', 'completedTime', 'tags', 'id');
	});
	it('returns an object with the correct title value', function(){
		expect(task.title).to.equal(str);
	});
	it('returns an object with correct tags', function(){
		expect(task.tags).to.have.length(2);
		expect(task.tags).to.include(t1);
		expect(task.tags).to.include(t2);
	});
});

describe('Task methods:', function() {
	var task1, task2, task3;
	beforeEach(function() {
		task1 = Task.new(); 
	});
	it('correctly assigns ID values', function(){
		task2 = Task.new();
		console.log(task1.id);
		console.log(task2.id);
		expect(task1.id).to.equal(1);
		expect(task2.id).to.equal(2);
	});
});