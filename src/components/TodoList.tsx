import React from 'react';
import EditTodo from '../components/EditTodo';
import { Todo } from '../models/todo';

interface TodoListProps {
	todos: Todo[];
	deleteTodo: (id: string) => void;
	doneTodo: (id: string) => void;
	editTodo: (id: string) => void;
	updateTodo: (text: string, id: string) => void;
};

const TodoList: React.FC<TodoListProps> = (props) => {
	const renderTodos = props.todos?.map(item => {
		return (
			<li key={item.id}>
				{
					item.edit
						? <EditTodo  updateTodo={props.updateTodo} id={item.id} text={item.text} />
						: 	<span>{item.text}</span>
				}
				<button onClick={() => props.deleteTodo(item.id)}>Delete</button>
				{/* <button onClick={() => props.doneTodo(item.id)} disabled={item.done}>Done</button> */}
				<button onClick={() => props.editTodo(item.id)}>Edit</button>
			</li>
		);
	});

	return (
		<ul>
			{renderTodos}
		</ul>
	);
};

export default TodoList;
