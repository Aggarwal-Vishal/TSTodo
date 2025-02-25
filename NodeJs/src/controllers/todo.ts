// import { RequestHandler } from "express";
// import { Todo } from "../models";

// const TODO: Todo[] = [];

// export const createTodo: RequestHandler = (req, res) => {
//   //   const text = (req.body as { text: string }).text;

//   const text = (<{ text: string }>req.body).text;

//   const newTodo = new Todo(Math.random().toString(), text);

//   TODO.push(newTodo);

//   res.status(201).json({ message: "Todo Created", newTodo });
// };

// export const getTodo: RequestHandler = (req, res) => {
//   res.status(200).json(TODO);
// };

// export const updateTodo: RequestHandler<{ todoId: string }> = (req, res) => {
//   const todoId = req.params.todoId;
//   const text = (req.body as { text: string }).text;

//   const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

//   if (todoIndex < 0) {
//     throw new Error("Todo not found");
//   }

//   TODO[todoIndex] = new Todo(TODO[todoIndex].id, text);

//   res.status(200).json({ message: "Todo Updated", newTodo: TODO[todoIndex] });
// };

// export const deleteTodo: RequestHandler<{ todoId: string }> = (req, res) => {
//   const todoId = req.params.todoId;
//   const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

//   if (todoIndex < 0) {
//     throw new Error("Todo not found");
//   }

//   TODO.splice(todoIndex, 1);

//   res.status(200).json({ message: "Todo Deleted" });
// };

import { RequestHandler } from "express";
import { Todo } from "../models";

const TODO: Todo[] = [];

// Create Todo
export const createTodo: RequestHandler = (req, res) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODO.push(newTodo);
  res.status(201).json({ message: "Todo Created", newTodo });
};

// Get All Todos
export const getTodo: RequestHandler = (req, res) => {
  res.status(200).json(TODO);
};

// Update Todo
export const updateTodo: RequestHandler<{ todoId: string }> = (req, res) => {
  const todoId = req.params.todoId;
  const text = (req.body as { text: string }).text;

  // Debugging Logs
  console.log("todoId:", todoId);
  console.log("TODO Array:", TODO);

  const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

  // If not found, respond with 404
  if (todoIndex < 0) {
    res.status(404).json({ message: "Todo not found" });
  }

  TODO[todoIndex] = new Todo(TODO[todoIndex].id, text);

  res.status(200).json({ message: "Todo Updated", newTodo: TODO[todoIndex] });
};

// Delete Todo
export const deleteTodo: RequestHandler<{ todoId: string }> = (req, res) => {
  const todoId = req.params.todoId;

  // Debugging Logs
  console.log("todoId:", todoId);
  console.log("TODO Array Before Deletion:", TODO);

  const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

  // If not found, respond with 404
  if (todoIndex < 0) {
    res.status(404).json({ message: "Todo not found" });
  }

  TODO.splice(todoIndex, 1);

  // Debugging Log After Deletion
  console.log("TODO Array After Deletion:", TODO);

  res.status(200).json({ message: "Todo Deleted" });
};
