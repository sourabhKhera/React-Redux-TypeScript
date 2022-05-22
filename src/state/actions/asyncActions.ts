import { addTodo } from './actionCreators';
import { Dispatch } from 'redux';

export const createNewTodo  = (task: string) => {
	const data = {
		id: Math.random().toString(),
		text: task,
		done: false,
		edit: false
	};
	return (dispatch: Dispatch) => {
		dispatch(addTodo(data));
	};
};
