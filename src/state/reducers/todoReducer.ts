import { Todo } from '../../models/todo';
import Action from '../actions/actionTypes';
import { ActionType } from '../actions/actionTypes';

type TodoState = {
	todos: Todo[]
};

const initialState: TodoState = { todos: []};


const addTodo = (state: TodoState, action: Action) => {
	const updatedState = [...state.todos, action.payload];
	return { ...state, todos: updatedState };
};

const todoReducer = (state = initialState, action: Action) => {
	switch(action.type) {
		case ActionType.AddTodo:
			return addTodo(state, action);
		default: return state;
	}
};

export default todoReducer;
