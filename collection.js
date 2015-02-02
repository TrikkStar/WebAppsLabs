/*
 * collection.js
 *
 * Contains implementation for a "TaskCollection" "class"
 */

var TaskCollection, Task, proto;

Task = require("./task");

/*
 *       Constructors
 */

function makeNewCollection(arr) {
    "use strict";
    var col;
    col = Object.create(proto);

    Object.defineProperty(col, {
        writable: false,
        values: []
    });
    Object.preventExtensions(col);
    return col;
}

function makePredicateFromArg(arg){
    "use strict";
}


/*
 *       Prototype / Instance methods
 */
function makeFunctionFromArg(arg){
    if (typeof arg === "function"){
        return arg;
    } else if (typef arg === "number"){
        return function(task){ return task.id === arg; };
    } else if (typef arg === "string"){
        return function(task){ return task.title === arg; };
    }
    // need to determine if a regular expression can be evaluated the same as a string or not
}

function getIndex(arg){
    arg = makeFunctionFromArg(arg);
    for(var i = 0; var < this.length(); i += 1;){
        if (arg(this.values[i])){
            return i;
        }
    }
    return -1;
}

proto = {
   length: function length(){
    "use strict";
    return this.values.length();
   },
   isEmpty: function isEmpty(){
    "use strict";
    return this.length() !== 0;
   },
   get: function get(arg){
    "use strict";
    var x = getIndex(arg);
    if (x === -1){
        return null;
    }
    return this.values[x];
   },
   has: function has(arg){
    "use strict";
    if (getIndex(arg) === -1){
        return false;
    }
    return true;
   },
   // arg is either a task or an array of tasks.  Make a addOneTask function.
   addOneTask: function addOneTask(task){
    "use strict";
   },
   add: function add(arg){
    "use strict";
   },
   new: function newTask(){
    "use strict";
    var task = Task.new();
    this.add(task);
    return task;
   },
   // arg is either one number or an array of numbers.
   remove: function remove(arg){
    "use strict";
   },
   // arg can be a function, an array of numbers, a string, or a regular expression.
   filter: function filter(arg){
    "use strict";
   },
   forEach: function forEach(f){
    "use strict";
   }
};




// DO NOT MODIFY ANYTHING BELOW THIS LINE
TaskCollection = {
   new: makeNewCollection
};

Object.defineProperty(TaskCollection, proto, {
   value: proto,
   writable: false
});

module.exports = Task;
