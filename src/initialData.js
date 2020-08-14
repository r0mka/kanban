const initialData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Take out the garbage', priority: 0 },
    'task-2': { id: 'task-2', title: 'Watch my favorate show', priority: 0 },
    'task-3': { id: 'task-3', title: 'Charge my phone', priority: 0 },
    'task-4': { id: 'task-4', title: 'Cook Dinner', priority: 0 },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      status: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      status: 'In review',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      status: 'In progress',
      taskIds: [],
    },
    'column-4': {
      id: 'column-4',
      status: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

export default initialData;
