import { v4 as uuid } from 'uuid';

const initialTasks = [
  {
    id: uuid(),
    title: '1 Task',
    priority: 2,
    status: 'todo',
  },
  {
    id: uuid(),
    title: '2 Task',
    priority: 3,
    status: 'review',
  },
  {
    id: uuid(),
    title: '3 Task',
    priority: 2,
    status: 'progress',
  },
  {
    id: uuid(),
    title: '3 Task',
    priority: 3,
    status: 'done',
  },
  {
    id: uuid(),
    title: '5 Task',
    priority: 2,
    status: 'todo',
  },
  {
    id: uuid(),
    title: '6 Task',
    priority: 3,
    status: 'review',
  },
  {
    id: uuid(),
    title: '7 Task',
    priority: 2,
    status: 'progress',
  },
  {
    id: uuid(),
    title: '8 Task',
    priority: 3,
    status: 'done',
  },
];

export default initialTasks;
