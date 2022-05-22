import { Todo } from '../../models/todo';
import { ActionType } from './actionTypes';

export const addTodo = (data: Todo) => {
	return { type: ActionType.AddTodo, payload: data };
};
