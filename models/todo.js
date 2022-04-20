const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return todos;
  }
  function getOne(id) {
	// URL params are strings - convert to a number
	id = parseInt(id);
	return todos.find(todo => todo.id === id);
}
function create(todo){
  todo.id = Date.now() % 100000;
  todo.done = false;
  todos.push(todo);
}
function deleteOne(id){
  const idx = todos.findIndex(todo => todo.id === parseInt(id));
  todos.splice(idx , 1);
}