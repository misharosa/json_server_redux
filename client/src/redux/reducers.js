import * as ActionType  from "./actions";

const initialState = {
    todos: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case ActionType.DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        case ActionType.GET_TODOS_FROM_SERVER:
            return {...state, todos: action.payload}
        default:
            return state
    }
}
