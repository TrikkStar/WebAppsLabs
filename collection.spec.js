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
		var tsk = Task.new(), rand = Math.floor(Math.random() * 10) + 1;
		tsk.setTitle(randomString(7));
		for (var j = 0; j < rand; j += 1){
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

describe('Your TaskCollection.get() function', function(){
	var coll, tasks;
	tasks = randomTasks(10);
	coll = TaskCollection.new(tasks);
	it('properly gets tasks when given a function', function(){
		var fnc, tag;
		tag = tasks[7].tags[0];
		fnc = function(tsk){
			for(var i = 0; i < tsk.tags.length; i += 1){
				if (tsk.tags[i] === tag){
					return true;
				}
			}
		};
		expect(coll.get(fnc)).to.equal(tasks[7]);
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
	it('properly gets tasks when given a regular expression', function(){
		var tsk, regex1, regex2;
		tsk = Task.fromString("Iamthe8Walrus8JohnLennon");
		coll.add(tsk);
		regex1 = /8Walrus8/;
		regex2 = /42/;
		expect(coll.get(regex1)).to.equal(tsk);
		expect(coll.get(regex2)).to.equal(null);
	});
});

describe('Your TaskCollection.has() function', function(){
    var coll, tasks;
    tasks = randomTasks(5);
    coll = TaskCollection.new(tasks);
    it('works properly when given a function', function(){
	var fnc, tag;
		tag = tasks[4].tags[0];
		fnc = function(tsk){
			for(var i = 0; i < tsk.tags.length; i += 1){
				if (tsk.tags[i] === tag){
					return true;
				}
			}
		};
		expect(coll.has(fnc)).to.equal(true);    	
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
    it('works properly for regular expressions',function(){
		var tsk, regex1, regex2;
		tsk = Task.fromString("Iamthe8Walrus8JohnLennon");
		coll.add(tsk);
		regex1 = /8Walrus8/;
		regex2 = /42/;
		expect(coll.has(regex1)).to.equal(true);
		expect(coll.has(regex2)).to.equal(false);
    });
});

describe('Your TaskCollection.remove() functions', function(){
	var coll, tasks, id;
	tasks = randomTasks(7);
	coll = TaskCollection.new(tasks);
    it('correctly removes a single item', function(){
        id = tasks[5].id;
        expect(coll.has(id)).to.equal(true);
        coll.remove(id);
        expect(coll.length()).to.equal(6);
        expect(coll.has(id)).to.equal(false);
    });
    it('correctly removes multiple items', function(){
    	id = [];
    	coll.values.forEach(function (item, i){
    		id.push(item.id);
    	});
    	coll.remove(id);
    	expect(coll.isEmpty()).to.equal(true);
    });
});

describe('Your TaskCollection.newTask() function', function(){
	var coll, task;
	task = randomTasks(1);
	coll = TaskCollection.new(task);
	it('correctly impliments newTask', function(){
		expect(coll.length()).to.equal(1);
        expect(coll.isEmpty()).to.equal(false);
        coll.remove(task[0].id);
        expect(coll.isEmpty()).to.equal(true);
        coll.new();
        expect(coll.length()).to.equal(1);
	});
});

describe('Your TaskCollection.filter() function',function(){
    var coll, tasks;
    tasks = randomTasks(6);
    coll = TaskCollection.new(tasks);
    it('filters if given an array of numbers',function(){
        var coll2, ids, i;
        ids = [];
        for ( i=1; i < 5; i += 1){
        	ids.push(tasks[i].id);
        }
        coll2 = coll.filter(ids);
        expect(coll2.get(ids[3])).to.equal(tasks[4]);
    });
    it('filters if given a function',function(){
		var fnc, tag, coll2;
		tag = tasks[3].tags[0];
		fnc = function(tsk){
			for(var i = 0; i < tsk.tags.length; i += 1){
				if (tsk.tags[i] === tag){
					return true;
				}
			}
		};
		coll2 = coll.filter(fnc);
		expect(coll2.get(fnc)).to.equal(tasks[3]);
    });
    it('filters if given a string',function(){
        var coll2, title;
        title = tasks[3].title;
        coll2 = coll.filter(title);
        expect(coll2.get(title)).to.equal(tasks[3]);
    });
    it('filters if given a regular expression',function(){
    	var tsk, regex, coll2;
		tsk = Task.fromString("Iamthe8Walrus8JohnLennon");
		coll.add(tsk);
		regex = /8Walrus8/;
		coll2 = coll.filter(regex);
		expect(coll2.get(regex)).to.equal(tsk);
    });
});

describe('Your TaskCollection.forEach() function', function(){
    it('correctly itterates through TaskCollection',function(){
        var c, coll, tasks, rnd;
        rnd = Math.floor((Math.random() * 10) * 10); //random int 1-100
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

describe('Your new TaskCollection functions', function(){
	it('correctly impliment .groupByTag()', function(){
		var coll, group, tsk1, tsk2, tsk3, tsk4, tsk5, tsk6, tsk7, arr;
		arr = [];
		tsk1 = Task.fromString("First#One")
		arr.push(tsk1);
		tsk2 = Task.fromString("Second#Two")
		arr.push(tsk2);
		tsk3 = Task.fromString("Third#Three")
		arr.push(tsk3);
		tsk4 = Task.fromString("Fourth#One#Two")
		arr.push(tsk4);
		tsk5 = Task.fromString("Fifth#One#Three")
		arr.push(tsk5);
		tsk6 = Task.fromString("Sixth#Two#Three")
		arr.push(tsk6);
		tsk7 = Task.fromString("Seventh#One#Two#Three")
		arr.push(tsk7);
		coll = TaskCollection.new(arr);
		group = coll.groupByTag();
		expect(group).to.be.a("object");
		expect(group).to.have.ownProperty("One", "Two", "Three");
		expect(group.One.values).to.include(tsk1, tsk4, tsk5, tsk7);
		expect(group.Two.values).to.include(tsk2, tsk4, tsk6, tsk7);
		expect(group.Three.values).to.include(tsk3, tsk5, tsk6, tsk7);
	});
	it('correctly impliment .print()', function(){
		var coll, task, str, str2, date;
		task = Task.fromString("Iamatitle#IamaTag#IamaTagToo");
		task.toggleCompleted();
		date = task.completedTime;
		coll = TaskCollection.new();
		coll.add(task);
		str2 = coll.print();
		str = "Iamatitle " + date + " #IamaTag #IamaTagToo\n";
		expect(str2).to.be.a('string');
		expect(str2).to.equal(str);
	});
	it('correctly impliment .concat()', function(){
		var coll, coll2, tasks1, tasks2;
		tasks1 = randomTasks(3);
		tasks2 = randomTasks(3);
		coll = TaskCollection.new(tasks1);
		coll2 = TaskCollection.new(tasks2);
		coll.concat(coll2);
		expect(coll.length()).to.equal(6);
		expect(coll2.length()).to.equal(3);
		expect(coll.values).to.include(tasks2[0], tasks2[1], tasks2[2]);
		expect(coll2.values).to.not.include(tasks1[0], tasks1[1], tasks1[2]);
	});
});