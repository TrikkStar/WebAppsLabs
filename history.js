/*
 * history.js
 *
 * Contains implementation for a CmdHistory "class"
 */

var DLList, CmdHistory, proto;

DLList = require("./dllist");

/*
 *       Constructors
 */

function makeNewHistory() {
   var hist = Object.create(proto);
   hist.list = DLList.new();
   hist.current = null;
   return hist;
}


/*
 *       Prototype / Instance methods
 */

proto = {
	add: function(cmd){
		if (this.current === null){
			this.current = this.list.push(cmd);
		} else {
			this.current = this.list.insertAt(cmd, this.current);
		}
		cmd.execute();
	},
	canRedo: function(){
		if (this.current !== null){
			return !this.list.isLast(this.current);
		}
		return false;
	},
	canUndo: function(){
		if (this.current !== null){
			return !this.list.isFirst(this.current);
		}
		return false;
	},
	redo: function(){
		if (this.canRedo()){
			this.current = this.current.next;
			this.current.value.execute();
		} else {
			throw new Error("Invalid Call: no latter commands");
		}
	},
	undo: function(){
		if (this.canUndo()){
			this.current = this.current.prev;
			this.current.value.unexecute();
		} else {
			throw new Error("Invalid Call: no prior commands");
		}
	},
	undoableIterator: function(){

	},
	redoableIterator: function(){

	}
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
CmdHistory = {
   new: makeNewHistory
};

Object.defineProperty(CmdHistory, "prototype", {
   value: proto,
   writable: false
});

module.exports = CmdHistory;
