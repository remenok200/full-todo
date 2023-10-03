import React, {useReducer} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoPage from './pages/TodoPage';

function App() {
  const reducer = (state, action) => {
    return state;
  }

  const [state, dispatch] = useReducer({
    user: null,
    tasks: []
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='tasks' element={<TodoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
