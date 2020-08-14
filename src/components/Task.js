import React from 'react';
import { get } from 'lodash';
import { Draggable } from 'react-beautiful-dnd';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

export default function Task(props) {
  const title = get(props, 'task.title', '');
  const priority = get(props, 'task.priority', '');
  const id = get(props, 'task.id', '');
  const { index } = props;
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className="my-3"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card className={`${snapshot.isDragging && 'bg-lightgreen'}`}>
            <CardBody>
              <CardTitle>{title}</CardTitle>
              <CardSubtitle>priority: {priority}</CardSubtitle>
              <CardText></CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
