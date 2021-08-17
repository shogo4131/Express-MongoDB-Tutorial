import { Request, Response } from 'express';
import { Error } from 'mongoose';
import { Todo } from '../model/todoModel';

/* Todoを全て取得する */
export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const response = await Todo.find({});
    res.json({ data: response });
  } catch (error) {
    console.error(error);
  }
};
