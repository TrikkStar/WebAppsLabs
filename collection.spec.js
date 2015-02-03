/*
 * collection.spec.js
 *
 * Test file for your collection class
 */
var expect, Task, TaskCollection;

expect = require('./chai.js').expect;

Task = require('./task.js');
TaskCollection = require('./collection.js');

function randomString(len) {
	var arr = [], caseRange, i;
	if (len == null) { len = 5; }
	for (i = 0; i < len; i += 1) {
		caseRange = [65, 97][Math.floor(Math.random() * 2)];
		arr.push(Math.floor(Math.random() * 26) + caseRange);
	}
	return String.fromCharCode.apply(String, arr);
}

function randomTasks(num){
	//Returns an array of random tasks of a given length
	var arr = [];
	for (var i=0; i < num; i += 1){
		var tsk = Task.new(), rand = Math.floor(Math.random() * 10);
		tsk.setTitle(randomString(7));
		for (var j=0; j < rand; j += 1){
			tsk.addTag(randomString(5));
		}
		arr.push(tsk);
	}
	return arr;
}

describe("Your makeNewCollection function", function(){
	var coll = TaskCollection.new();
	it('returns an object', function(){
		expect(coll).to.be.a('object');
	});
	it('returns an object with correct key', function(){
		expect(task).to.have.ownProperty('values');
	});
})

// ADD YOUR TESTS HERE
