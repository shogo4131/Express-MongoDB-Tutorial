import express from 'express';
import { getAllTodo } from '../controller/todoController';

const route = express.Router();

route.get('/todo', getAllTodo);

export default route;
