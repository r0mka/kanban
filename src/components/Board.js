import React from 'react';
import Task from './Task';
import { get } from 'lodash';

export default function Board(props) {
  const tasks = get(props, 'tasks', []);
  const { status } = props;

  return (
    <div>
      Board {status}
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            priority={task.priority}
          />
        ))}
    </div>
  );
}
