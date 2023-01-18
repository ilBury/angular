import { Task } from "../types/task.type";

export const tasks: Task[] = [
  {
  id: 1,
  title: 'Task',
  description: 'Descr',
  assignee: 'John',
  isUrgent: false,
  completed: false
  },
  {
    id: 2,
    title: 'Task 1',
    description: 'descr 1',
    assignee: 'Bob',
    isUrgent: true,
    completed: false
  },
  {
    id: 3,
    title: 'Task 2',
    description: 'descr 2',
    assignee: 'Alex',
    isUrgent: true,
    completed: false
  }
];

export const users: string[] = ["John", "Alex", 'Bob'];
