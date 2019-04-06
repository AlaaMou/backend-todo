const express = require('express');
const router = express.Router();
const {getIndex, postTodo, deleteTodo} = require("../controllers");


/* GET home page. */
router.get('/', getIndex);

/* POST new todo. */
router.post('/todos', postTodo);

/* DELETE todo. */
router.delete('/todos/:id', deleteTodo);


module.exports = router;
