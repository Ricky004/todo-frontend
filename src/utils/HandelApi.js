import axios from 'axios'

const baseUrl = "http://localhost:4000"

const getAllTodo = (setTodo) => {
    axios.get(`${baseUrl}/todo-lists/:id/tasks`).then((res) => {
        setTodo(res.data)
    }).catch((error) => {
        console.error('Error fetching todos:', error)
    })
}

const addTodo = (text, setText, setTodo) => {
    axios.post(`${baseUrl}/todo-lists`, {text}).then((res) => {
        setText("")
        getAllTodo(setTodo)
    }).catch((error) => {
        console.error('Error fetching todos:', error)
    })
}

const updateTodo = (todoId, text, setTodo, setText, setIsUpadte) => {
    axios.post(`${baseUrl}/update`,{_id: todoId,text}).then((res) => {
        setText("")
        setIsUpadte(false)
        getAllTodo(setTodo)
    }).catch((error) => {
        console.error('Error fetching todos:', error)
    })
}

const deleteTodo = (todoId, setTodo) => {
    axios.post(`${baseUrl}/delete`,{_id: todoId }).then((res) => {
        getAllTodo(setTodo)
    }).catch((error) => {
        console.error('Error fetching todos:', error)
    })
}

const isTaskDone = (todoId, isDone, setIsDone) => {
    axios.put(`${baseUrl}/isTaskDone`,{_id: todoId, isDone}).then((res) => {
       setIsDone(false)
    }).catch((err) => console.log(err))
}

export {getAllTodo, addTodo, updateTodo, deleteTodo, isTaskDone}