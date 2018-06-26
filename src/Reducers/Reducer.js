import {ADD_TODO, TOGGLE_TODO} from '../Actions/Actions';

export function TodoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
               todos: [...state.todos, {name: action.payload.text, state: false, id: state.todos.length + 1}]
            });
        case TOGGLE_TODO:
            const newList = state.todos.map(item => {
                if(item.id === action.payload.index) {
                    item.state = !item.state;
                }
                return item;
            });
            return Object.assign({}, state, {
                todos: newList
            });
        default:
            return state;
    }
}

const initialState = {
  todos: [{name: 'hola', state: false, id: 1}]
};