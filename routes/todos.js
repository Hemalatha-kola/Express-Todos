var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var todosCtrl = require('../controllers/todos');

 // All actual paths start with "/todos"

 //Get Route/todos
 router.get('/',todosCtrl.index);

 router.get('/new',todosCtrl.new);
// GET /todos/:id
router.get('/:id', todosCtrl.show);
router.post('/', todosCtrl.create);
router.delete('/:id', todosCtrl.delete);
module.exports = router;
