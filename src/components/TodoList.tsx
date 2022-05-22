import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state/reducers';

const TodoList: React.FC = () => {
	const todos = useSelector((state: State) => state.todo.todos);
	const renderTodos = todos?.map((item) => {
		return (
			<li key={item.id}>
				<span>{item.text}</span>
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
