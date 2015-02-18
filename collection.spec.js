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

describe('Your makeNewCollection function', function(){
	var coll, coll2, tasks;
	coll = TaskCollection.new();
	tasks = randomTasks(5);
	coll2 = TaskCollection.new(tasks);
	it('returns an object', function(){
		expect(coll).to.be.a("object");
	});
	it('returns an object with correct key', function(){
		expect(coll).to.have.ownProperty("values");
	});
	it('sucessfully adds tasks when provided them', function(){
		expect(coll.isEmpty()).to.equal(true);
		expect(coll2.length()).to.equal(5);
	});
});

describe('Your Collection.get() function', function(){
	var coll, tasks;
	tasks = randomTasks(10);
	coll = TaskCollection.new(tasks);
	it('properly gets tasks when given a function', function(){
		
	});
	it('properly gets tasks when given a number', function(){
		var id = tasks[7].id;
		expect(coll.get(id)).to.equal(tasks[7]);
		expect(coll.get(id*42)).to.equal(null);
	});
	it('properly gets tasks when given a string', function(){
		var str, title;
		title = tasks[7].title;
		str = "9*1This Will Not Be Generated@#45";
		expect(coll.get(title)).to.equal(tasks[7]);
		expect(coll.get(str)).to.equal(null);
	});
	it.skip('properly gets tasks when given a regular expression', function(){
		
	});
});

describe('Your Collection.has() function', function(){
    var coll, tasks;
    tasks = randomTasks(5);
    coll = TaskCollection.new(tasks);
    it.skip('works properly when given a function', function(){
    	
    });
    it('works properly when given a number', function(){
        var id = tasks[3].id;
        expect(coll.has(id)).to.equal(true);
        expect(coll.has(id*3)).to.equal(false);
    });
    it('works properly when given a string', function(){
        var str, title;
        title = tasks[2].title;
        str = "9*1This Will Not Be Generated@#45";
        expect(coll.has(title)).to.equal(true);
        expect(coll.has(str)).to.equal(false);
    });
    it.skip('works properly for regular expressions',function(){

    });
});

describe('Your other TaskCollection functions', function(){
	var coll1, coll2, task, tasks, id;
	task = randomTasks(1);
	tasks = randomTasks(7);
    it('correctly removes a single item', function(){
        id = tasks[5].id;
        coll1 = TaskCollection.new(tasks);
        expect(coll1.has(id)).to.equal(true);
        coll1.remove(id);
        expect(coll1.length()).to.equal(6);
        expect(coll1.has(id)).to.equal(false);
    });
    it('correctly removes multiple items', function(){
    	id = [];
    	coll1.values.forEach(function (item, i){
    		id.push(item.id);
    	});
    	coll1.remove(id);
    	expect(coll1.isEmpty()).to.equal(true);
    });
	it('correctly impliments newTask', function(){
		coll2 = TaskCollection.new(task);
        expect(coll2.isEmpty()).to.equal(false);
        coll2.remove(task);
        expect(coll2.isEmpty()).to.equal(true);
        coll2.new();
        expect(coll2.length()).to.equal(1);
	});
});

describe('Tests for filter function and forEach',function(){
    var coll, tasks;
    tasks = randomTasks(6);
    coll = TaskCollection.new(tasks);
    it('filters if given an array of numbers',function(){
        var coll2, id1;
        id1 = tasks[1].id;
        coll2 = coll.filter(id1);
        expect(coll2.get(id1)).to.equal(tasks[1]);
    });
    it.skip('filters if given a function',function(){

    });
    it('filters if given a string',function(){
        var coll2, title1;
        title1 = tasks[3].title;
        coll2 = coll.filter(title1);
        expect(coll2.get(title1)).to.equal(tasks[3]);
    });
    it.skip('filters if given a regular expression',function(){

    });
});

describe('Your forEach method', function(){
    it('correctly itterates through TaskCollection',function(){
        var c, coll, tasks, rnd;
        rnd = Math.floor((Math.random() * 10) + 1); //random int 1-10
        tasks = randomTasks(rnd);
        coll = TaskCollection.new(tasks);
        c = 0;
        coll.forEach(function(task){
            c+=1;
            expect(task).to.not.equal(undefined);
        });
        expect(c).to.equal(coll.length());
    });
});

/*functions needed to test:
has() (can recycle test from get changing what is looked for to t/f) (need to finish when we figure out how to handle functions and regular expressions)
filter() (need to finish up when we know how to handle functions and regular expressions)
groupByTag()
print()
concat()*/