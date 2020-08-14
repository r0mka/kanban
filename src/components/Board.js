import React from 'react';
import Task from './Task';
import { get } from 'lodash';
import { Col } from 'reactstrap';
import { Droppable } from 'react-beautiful-dnd';

export default function Board(props) {
  const tasks = get(props, 'tasks', []);
  const { id, status } = props.column;

  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <Col>
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h4>{status}</h4>
            <div>
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        </Col>
      )}
    </Droppable>
  );
}
