import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './models/todo';
import './App.css';

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const addTodo = (task: string) => {
		setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: task, done: false, edit: false }]);
	}

	const deleteTodo = (id: string) => {
		setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
	}

	const doneTodo = (id: string) => {
		const updatedTodoList = todos.map(item => {
			if(item.id === id){
				return {...item, done: true}
			}
			return item;
		});
		setTodos(updatedTodoList);
	}

	const editTodo = (id: string) => {
		const updatedTodoList = todos.map(item => {
			if(item.id === id){
				return {...item, edit: true}
			}
			return item;
		});
		setTodos(updatedTodoList);
	}

	const updateTodo = (text: string, id: string) => {
		const updatedTodoList = todos.map(item => {
			if(item.id === id){
				return {...item, edit: false, text}
			}
			return item;
		});
		setTodos(updatedTodoList);
	}
	return (
		<div className="App">
			<NewTodo addTodo={addTodo} />
			<TodoList
				todos={todos}
				deleteTodo={deleteTodo}
				doneTodo={doneTodo}
				editTodo={editTodo}
				updateTodo={updateTodo}
			/>
		</div>
	);
}

export default App;
