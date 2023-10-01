import axios from 'axios'

const baseUrl = "http://localhost:4000"

const getTodoList = async (setTodoList) => {
    try {
        const res = await axios.get(`${baseUrl}/todo-lists`)
        setTodoList(res.data)
    } catch (error) {
        console.error('Error fetching todos:', error)
    }
}

const createTodoList = (name, setName, setTodoList) => {
    try{
        const res = axios.post(`${baseUrl}/todo-lists`, {name})
        setName("")
        getTodoList(setTodoList)
    } catch (error) {
        console.error('Error fetching todos:', error)
    }
}

const updateTodoList = (id, todoList) => {
    axios.put(`${baseUrl}/todo-lists/${id}`, todoList).then((res) => {
    }).catch((error) => {
        console.error('Error fetching todos:', error)
    })
}

const deleteTodoList = (id) => {
    axios.delete(`${baseUrl}/todo-lists/${id}`).then((res) => {
    }).catch((error) => {
        console.error('Error fetching todos:', error)
    })
}

export {getTodoList, updateTodoList, createTodoList, deleteTodoList}