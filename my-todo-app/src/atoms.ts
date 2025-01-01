import { atom } from 'jotai';
import { Task } from './types';
import { v4 as uuidv4 } from 'uuid';

const initialTasks: Task[] = [
  {
    id: uuidv4(),
    title: 'Task 1',
    description: 'これは最初のタスクです',
  },
  {
    id: uuidv4(),
    title: 'Task 2',
    description: '2番目のタスクです',
  },
];

export const tasksAtom = atom<Task[]>(initialTasks);

