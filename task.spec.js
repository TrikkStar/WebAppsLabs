/*
 * task.spec.js
 *
 * Test file for your task class
 */
var expect, Task;

expect = require('./chai.js').expect;

Task = require('./task.js');

// ADD YOUR TESTS HERE
describe('Your makeNewTask function', function() {
	var task = Task.new();
	it('returns an object', function(){
		expect(task).to.be.a('object');
	});
	it('returns an object with correct keys', function(){
		expect(task).to.have.ownProperty('title', 'completedTime', 'tags', 'id');
	});
	it('is an instance of the Task constructor', function(){
		expect(task).to.be.an.instanceof(Task.new());
	})
});
