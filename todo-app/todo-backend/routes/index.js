const express = require('express');
const router = express.Router();
const redis = require('../redis')
const configs = require('../util/config')
const {getAsync, setAsync} = require("../redis");

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET statistics of todo creation up to now. */
router.get('/statistics', async (req, res) => {
  let currentAddedTodos = await getAsync('added_todos');
  if (!currentAddedTodos) {
    // if value doesn't exist, init to 0 first
    await setAsync('added_todos', 0);
    currentAddedTodos = 0;
  }
  res.send({added_todos: currentAddedTodos});
})

module.exports = router;
