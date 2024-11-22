const todoService = require('../service/todo.service');


exports.creteToDo = async(req, res, next) => {
    try {
        const{userId, title, description} = req.body;

        const todo = await todoService.createToDo(userId, title, description);

        return res.json({
            status: 200,
            message: 'To-Do created successfully',
            todoData: todo,
        });

    } catch (error) {
        throw error
    }
}

exports.getToDoList = async (req, res, next) => {
    try {
        const { userId } = req.params; // Extract userId from route parameters

        const todoList = await todoService.getToDoList(userId);

        res.json(todoList );
    } catch (error) {
        next(error); // Proper error handling
    }
}    

exports.deleteToDo = async (req, res, next) => {
    try {
        const { id } = req.params; // Extract userId from route parameters
        const todoList = await todoService.deleteToDo(id);
        res.json({success: true, message: 'ToDo deleted successfully'});
    } catch (error) {
        next(error);
    } 
}    
