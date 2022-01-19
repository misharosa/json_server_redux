export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const GET_TODOS_FROM_SERVER = "GET_TODOS_FROM_SERVER"

export const addTodoActions = (payload) => ({ type: ADD_TODO, payload });
export const getTodoFromServerAction = (payload) => ({ type: GET_TODOS_FROM_SERVER, payload })
export const deleteTodoFromServerAction = (payload) => ({ type:DELETE_TODO, payload })
