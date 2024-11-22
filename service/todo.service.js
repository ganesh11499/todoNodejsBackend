const todoModel = require('../model/todo.model');

class todoService {
    static async createToDo(userId, title, description){
        try {
            const createToDo = new todoModel({userId, title, description});
            await createToDo.save();
        } catch (error) {
            throw error;
        }
    }

    static async getToDoList(userId) {
        const toDoList = await todoModel.find({userId});
        return toDoList;
    }

    static async deleteToDo(id) {
        const toDo = await todoModel.findByIdAndDelete({_id: id});
        return toDo;
    }
}

module.exports = todoService;