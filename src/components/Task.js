import React from 'react';

export default function Task({ id, title, priority }) {
  return (
    <div>
      Task
      {title}
      {priority}
    </div>
  );
}
