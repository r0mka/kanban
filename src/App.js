import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Board from './components/Board';

const initialTasks = [
  {
    id: uuid(),
    title: 'First Task',
    priority: 2,
    status: 'todo',
  },
  {
    id: uuid(),
    title: 'Second Task',
    priority: 3,
    status: 'review',
  },
  {
    id: uuid(),
    title: 'Third Task',
    priority: 2,
    status: 'progress',
  },
  {
    id: uuid(),
    title: 'Second Task',
    priority: 3,
    status: 'done',
  },
];

const statuses = ['todo', 'review', 'progress', 'done'];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="App">
      <h1>Kanban</h1>
      {statuses.map((status) => (
        <Board key={status} status={status} tasks={tasks} />
      ))}
    </div>
  );
}

export default App;

// form CreateTask
