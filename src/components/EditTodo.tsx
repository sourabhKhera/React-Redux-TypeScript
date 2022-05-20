import React, { useRef, useEffect } from 'react';

interface EditTodoProps {
	updateTodo: (text: string, id: string) => void;
	id: string;
	text: string;
}

const EditTodo: React.FC<EditTodoProps> = (props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(()=>{
		inputRef.current!.value = props.text;
	}, [props.text]);

	const handleSubmit  = (e: React.FormEvent) => {
		e.preventDefault();
		props.updateTodo(inputRef.current!.value, props.id);
		inputRef.current!.value = '';
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' id='edit-text' ref={inputRef} />
		</form>
	);
};

export default EditTodo;
