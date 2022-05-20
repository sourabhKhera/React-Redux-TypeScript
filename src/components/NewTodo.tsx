import React, { useRef } from 'react';

interface NewTodoProps {
	addTodo: (task: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const handleSubmit  = (e: React.FormEvent) => {
		e.preventDefault();
		props.addTodo(inputRef.current!.value);
		inputRef.current!.value = '';
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='todo-text'>Todo Text</label>
				<input type='text' id='todo-text' ref={inputRef}/>
			</div>
			<button type='submit'>Add Todo</button>
		</form>
	);
};

export default NewTodo;
