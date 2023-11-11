const mongoose = require("mongoose");

const Todo = mongoose.model("todo");

const addTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });
    await todo.save();
    return res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Error while reading users." });
  }
};

const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find({}).sort({ createdAt: -1 });
    return res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Error while reading users." });
  }
};

const toggleTodoDone = async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todoRef.done }
    );
    await todo.save();

    return res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Error while reading users." });
  }
};

const updateTodo = async (req, res) => {
  try {
    await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { data: req.body.data }
    );

    const todo = await Todo.findById(req.params.id);
    // await todoss.save();

    return res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Error while reading users." });
  }
};

const deletingTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    return res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Error while reading users." });
  }
};

module.exports = {
  addTodo,
  getAllTodo,
  toggleTodoDone,
  updateTodo,
  deletingTodo,
};
