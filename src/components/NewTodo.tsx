import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createNewTodo } from '../state/actions/asyncActions';
import { bindActionCreators } from 'redux';

const NewTodo: React.FC = () => {
	const dispatch = useDispatch();
	const createTodo = bindActionCreators(createNewTodo, dispatch);
	const inputRef = useRef<HTMLInputElement>(null);
	const handleSubmit  = (e: React.FormEvent) => {
		e.preventDefault();
		createTodo(inputRef.current!.value);
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
