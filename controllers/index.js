const Todo = require("../models/todo")

module.exports = {
    // GET index.js
    async getIndex(req, res, next){
        let todos = await Todo.find({}); // find ALL todos
        res.render('index', {todos});
    },
    // POST New Todo
    async postTodo(req, res, next){
        let newTodo = await Todo.create(req.body.todo); //CREATE new todo to Database
        res.redirect('/');
    },
    // DELETE Todo
    async deleteTodo(req, res, next){
        await Todo.findByIdAndRemove(req.params.id); // DESTROY Todo from Database
        res.redirect('/');
    }
}