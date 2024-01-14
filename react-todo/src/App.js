import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const writeTodo = (event) => {
      setTodo(event.target.value);
      console.log(event.target.value);
  }
  const onTodoBtnClick = () => {
    
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo === ''){
      return ;
    }
    setTodos((prev) => [todo, ...prev]);
    setTodo('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>My Todos({todos.length})</h1>
        <input onChange={writeTodo} value={todo} type='text' placeholder='add your todo list'></input>
        <button>add Todo</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
