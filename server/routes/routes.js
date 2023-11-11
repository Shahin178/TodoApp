const express = require("express");
const router = express.Router();
const {
  addTodo,
  getAllTodo,
  toggleTodoDone,
  updateTodo,
  deletingTodo,
} = require("../controller/todo-controller");

router.post("/todos", addTodo);
router.get("/todos", getAllTodo);
router.get("/todos/:id", toggleTodoDone);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deletingTodo);

module.exports = router;
