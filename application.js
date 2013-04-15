//task belongs to list
function Task(name, due_date, priority){
  this.name = name;
  this.due_date = due_date;
  this.priority = priority;
}

function List(name){
  this.name = name;
  this.tasks = [];
}

List.prototype = {
  addTask: function(name, due_date, priority){
    this.tasks.append(new Task(name, due_date, priority));
  },

  showTask: function(){
    var tasks = this.tasks;
    for (var i in tasks){
      console.log(tasks[i].name);
    }
  }
}