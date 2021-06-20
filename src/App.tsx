import React, { useState } from 'react';
import './App.css';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

import { TODO } from './types';

function App() {

  const [todos, setTodos] = useState<TODO[]>([]);


  const handleSubmit = (todo: TODO, callback: Function) => {
    console.log(todo);
    setTodos([...todos, todo]);
    callback();
  }

  return (
    <div className="App">
      <TodoForm handleSubmit={handleSubmit} />
      <div style={{ border: '1px solid red', width: '200px', minHeight: '100px', margin: '5px auto' }}>
        <h4 style={{ margin: '5px', padding: '0' }}>All Notes</h4>
        {todos.length < 1
          ? <h5>No Notes Yet</h5>
          : todos.map(todo =>
            <React.Fragment key={todo.id}>
              <Todo todo={todo} />
            </React.Fragment>)}

      </div>
    </div>
  );
}

export default App;
