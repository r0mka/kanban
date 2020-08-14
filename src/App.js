import React, { useState } from 'react';
import './App.css';
import { Container, Row } from 'reactstrap';
import { DragDropContext } from 'react-beautiful-dnd';
import Board from './components/Board';
import initialData from './initialData';

function App() {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = state.columns[source.droppableId];

    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };

    setState(newState);
  };

  return (
    <div className="App">
      <h1>Kanban</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          <Row md="4" sm="2" xs="1">
            {state.columnOrder.map((columnId) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
              return <Board key={columnId} column={column} tasks={tasks} />;
            })}
          </Row>
        </Container>
      </DragDropContext>
    </div>
  );
}

export default App;
