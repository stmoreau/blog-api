var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');

// MAKE SURE MONGOD is RUNNING
var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

var Todo = mongoose.model('todo', TodoSchema);
Todo.create({
  name: 'clean up your room!!!',
  completed: false,
}).then(function (err, todo) {
  console.log(err, todo);
});
