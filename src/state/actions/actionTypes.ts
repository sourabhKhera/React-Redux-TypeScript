import { Todo } from '../../models/todo';

export enum ActionType {
	AddTodo = 'AddTodo'
};

interface AddAction {
	type: ActionType.AddTodo;
	payload: Todo
};

type Action = AddAction;

export default Action;

