/*
 * history.spec.js
 *
 * Test file for your history class
 */
var expect, DLList, CmdHistory;

expect = require('./chai.js').expect;

DLList = require('./dllist.js');
CmdHistory = require('./history.js');

var LogEntries = [];
var Log = {
   add: function(s) { LogEntries.push(s); return this; },
   get: function() { return LogEntries; },
   clear: function() { LogEntries = []; return this; }
};
var id = 0;
function mockExecute() { Log.add(this.toString + " executed"); }
function mockUnexecute() { Log.add(this.toString + " unexecuted"); }
function mockCommand() {
   id += 1;
   return {
      execute: mockExecute,
      unexecute: mockUnexecute,
      toString: "command " + id
   };
}

describe("Your CmdHistory object", function(){
	beforeEach(function(){
		LogEntries = [];
		id = 0;
	});
	it("constructs correctly", function(){
		var hist = CmdHistory.new();
		expect(hist).to.be.a("object");
		expect(hist).to.have.ownProperty("list", "current", "add", "canRedo", "canUndo", "redo", "undo", "undoableIterator", "redoableIterator");
		expect(hist.current).to.equal(null);
	});
	it("adds commands properly", function(){
		var hist, cmd;
		hist = CmdHistory.new();
		cmd = mockCommand();
		hist.add(cmd);
		expect(hist.current.value).to.equal(cmd);
		expect(hist.canUndo()).to.be.true;
		expect(hist.canRedo()).to.be.false;
		expect(LogEntries[0]).to.equal("command 1 executed");
	});
	it("undo's commands properly", function(){
		var hist, cmd;
		hist = CmdHistory.new();
		cmd = mockCommand();
		hist.add(cmd);
		hist.add(mockCommand());
		expect(hist.current.value).to.not.equal(cmd);
		hist.undo();
		expect(hist.canUndo()).to.be.true;
		expect(hist.canRedo()).to.be.true;
		expect(LogEntries[2]).to.equal("command 2 unexecuted");
		expect(function() {hist.undo()}).to.not.throw(Error);
		expect(LogEntries[3]).to.equal("command 1 unexecuted");
		expect(hist.current).to.equal(null);
		expect(hist.canUndo()).to.be.false;
		expect(hist.canRedo()).to.be.true;
		expect(function() {hist.undo()}).to.throw(Error);
	});
});
