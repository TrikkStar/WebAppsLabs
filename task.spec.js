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
	var task1, task2,str,str2;
	beforeEach(function() {
		str = randomString(5);
		str2 = randomString(6);
		str3 = randomString(7);
		task1 = Task.new(); 
	});
	it('correctly assigns ID values', function(){
		task2 = Task.new();
		expect(task2.id).to.equal((task1.id)+1);

	});
	it('correctly sets title', function(){
		task1.setTitle(str);
		expect(task1.title).to.equal(str)

	});
	it('checks for completion', function(){
		expect(task1.isCompleted(task1.completedTime)).to.equal(false);
		task1.toggleCompleted();
		expect(task1.isCompleted(task1.completedTime)).to.equal(true);

	});
	it('check the singular has, add, remove, and toggle', function(){
		task1.addTag(str);
		console.log(task1.tags);
		expect(task1.hasTag(str)).to.equal(true);
		task1.removeTag(str);
		expect(task1.hasTag(str)).to.equal(false);
		task1.toggleTag(str);
		expect(task1.hasTag(str)).to.equal(true);

	});
	it('check the plural add, remove, and toggle', function(){
		var arr, arr2;
		arr = [str, str2, str3];
		arr2 = [str, str3];
		task1.addTags(arr);
		expect(task1.hasTag(str)).to.equal(true);
		expect(task1.hasTag(str2)).to.equal(true);
		expect(task1.hasTag(str3)).to.equal(true);
		task1.removeTags(arr2);
		expect(task1.hasTag(str)).to.equal(false);
		expect(task1.hasTag(str2)).to.equal(true);
		expect(task1.hasTag(str3)).to.equal(false);
		task1.toggleTags(arr);
		expect(task1.hasTag(str)).to.equal(true);
		expect(task1.hasTag(str2)).to.equal(false);
		expect(task1.hasTag(str3)).to.equal(true);

	});
	it('check if clone works', function(){
		var task2;
		task1.addTag(str);
		task2 = task1.clone()
		expect(task2.hasTag(str)).to.equal(true);
		expect(task2.title).to.equal(task1.title);
		expect(task2.id).to.equal(task1.id);
		expect(task2.completedTime).to.equal(task1.completedTime);

	});
});