import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<NewTodo  />
			<TodoList />
		</div>
	);
}

export default App;
