const app = require('./app');
const db = require('./config/db')
const UserModel = require('./model/user.model');
const ToDoModel = require('./model/todo.model'); 

const port = 3500

app.get('/', (req, res) => {
    res.send('Hello World!!!');
})

app.listen(port, () => {
    console.log(`Server runs at http://localhost:${port}`);
})