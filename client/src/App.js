import './App.css';
import { useEffect, useState } from "react";
import { getTodos } from "./data/api";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addTodoActions, deleteTodoFromServerAction, getTodoFromServerAction } from "./redux/actions";
import { v4 as uuidv4 } from 'uuid';

 export const App = () => {
     const [todoTitle, setTodoTitle] = useState('')

     const { todos } = useSelector(store => store.todos)
     const dispatch = useDispatch()

     useEffect(async () => {
         const data = await getTodos()
         dispatch(getTodoFromServerAction(data))
     },[])

     const addTodoFromServer = (e) => {
        e.preventDefault()

        try {
        axios
            .post('http://localhost:3001/todos', {"title": todoTitle})
            .then(({ data }) => dispatch(addTodoActions(data)))
         } catch (e) {
             console.error(e)
         }
         setTodoTitle('')
     }

     const deleteTodoFromServer = (todoId) => {
         try {
             axios.delete(`http://localhost:3001/todos/${todoId}`)
                 .then(({ data }) => dispatch(deleteTodoFromServerAction(todoId)))
         } catch (e) {
             console.log(e)
         }
     }

  return (
    <div className="App">
      <h1>Have a good day!</h1>
        <form onSubmit={(e) => addTodoFromServer(e)} action="">
            <input
                value={todoTitle}
                type="text"
                onChange={(e) => setTodoTitle(e.target.value)}
            />
            <button type="submit">add-todo</button>
        </form>
        <div className="todos-container">
        {todos.map((todo,index) =>(
            <ul className="todo" key={uuidv4()}>
                <li className="todo__id">Todo {index + 1}</li>
                <li className="todo__title">{todo.title}</li>
                <button onClick={() => deleteTodoFromServer(todo.id)}>delete</button>
            </ul>
            ))}
        </div>
    </div>
  );
}
