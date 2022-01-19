import axios from "axios";

export const getTodos = async () => {
    const response = await axios('http://localhost:3001/todos')
    const { data } = await response

    return data
}

