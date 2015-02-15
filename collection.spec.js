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
        expect(coll.isEmpty()).to.equal(false);
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

describe('Your other Collection functions', function(){
    it('correctly implements add, remove, and newTask',function(){
        var coll1, coll2, tasks1, tasks2, id1;
        tasks1 = randomTasks(1);
        tasks2 = randomTasks(7);
        id1 = tasks2[5].id;
        coll1 = TaskCollection.new(tasks2);
        expect(coll.has(id1)).to.equal(true);
        coll.remove(id1);
        expect(coll.length()).to.equal(6);
        expect(coll.has(id1)).to.equal(false);

        coll2 = TaskCollection.new(tasks1);
        expect(coll.isEmpty()).to.equal(false);
        coll2.remove(tasks1);
        expect(coll.isEmpty()).to.equal(true);

        //expect(new()).to.not.throw(Error); //What is this doing?
        coll2.new();
        expect(coll2.length()).to.equal(1);
    });
});

describe('Tests for filter function and forEach',function(){
    var coll, tasks;
    coll = TaskCollection.new();
    tasks = randomTasks(6);
    it('filters if given an array of numbers',function(){
        var coll2, id1;
        id1 = tasks[1].id;
        coll2 = coll.filter(id1);
        expect(coll2.isEmpty()).to.equal(false);
        expect(coll2.length()).to.equal(1);
        expect(coll2.get(id1)).to.equal(tasks[1]);
    });
    it.skip('filters if given a function',function(){

    });
    it('filters if given a string',function(){
        var coll2, title1;
        title1 = tasks[3].title;
        coll2 = coll.filter(title1);
        expect(coll2.isEmpty()).to.equal(false);
        expect(coll2.length()).to.equal(1);
        expect(coll2.get(title1)).to.equal(tasks[3]);
    });
    it.skip('filters if given a regular expression',function(){

    });
});

describe('tests that the forEach function is going through the taskcollection correctly', function(){
    it('forEach works correctly',function(){
        var c, coll, tasks;
        coll = TaskCollection.new();
        tasks = randomTasks(8);
        c = 0;
        coll.add(tasks);
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