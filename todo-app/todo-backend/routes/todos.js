const express = require('express');
const {Todo} = require('../mongo')
const {setAsync, getAsync} = require("../redis");
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  });
  // increment value in redis by 1
  let currentAddedTodos = await getAsync('added_todos');
  if (!currentAddedTodos) {
    // if value doesn't exist, init to 0 first
    await setAsync('added_todos', 0);
    currentAddedTodos = 0;
  }
  await setAsync('added_todos', Number(currentAddedTodos) + 1);
  // return created object
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const {id} = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.deleteOne()
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  const todo = req.todo;
  res.send(todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {// update a single todo
  const updatedTodo = await Todo.findByIdAndUpdate(req.todo.id, req.body, {new: true})
  res.send(updatedTodo);
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
