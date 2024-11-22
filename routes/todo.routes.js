const router = require('express').Router();
const todoController = require('../controller/todo.controller');

router.post('/createToDo', todoController.creteToDo);

router.get('/getToDoList/:userId', todoController.getToDoList);

router.delete('/deleteToDo/:id', todoController.deleteToDo);

module.exports = router;