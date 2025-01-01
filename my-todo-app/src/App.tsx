import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>タスク管理</h1>
        <nav>
          <Link to={'/'}>タスク一覧</Link> | <Link to={'/new'}>タスク追加</Link>
        </nav>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/new' element={<TaskForm />} />
          <Route path='/tasks/:id' element={<TaskDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
