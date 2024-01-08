import { TodoStatus } from '../constants/enums/todo-status.enum';

export interface Todo {
  id: string;
  title: string;
  author: string;
  content: string;
  status: TodoStatus;
}
