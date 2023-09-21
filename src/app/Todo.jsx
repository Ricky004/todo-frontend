"use client"

import { Button } from "@/components/ui/button"
import Todos from "./Todos"
import { useEffect, useState } from "react"
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "@/utils/HandelApi"

const { Input } = require("@/components/ui/input")

const Todo = () => {

    const [todo, setTodo] = useState([])
    const [text, setText] = useState("")
    const [isUpdate, setIsUpdate] = useState(false)
    const [todoId, setTodoId] = useState("")

    useEffect(() => {
        getAllTodo(setTodo)
    }, [])

    const updateMode = (_id, text) => {
        setIsUpdate(true)
        setText(text)
        setTodoId(_id)
    }


    return (
        <>
            <div className="m-14 w-96">
                <div className="flex flex-row gap-3">
                    <Input placeholder="lets do it..." value={text} onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault() // Prevent the default behavior (form submission)
                                isUpdate ? updateTodo(todoId, text, setTodo, setText, setIsUpdate) : addTodo(text, setText, setTodo)
                                }
                            }}>  
                            </Input>
                    <Button onClick={isUpdate ? () => updateTodo(todoId, text, setTodo, setText, setIsUpdate)
                        : () => addTodo(text, setText, setTodo)} 
                        >
                        {isUpdate ? "update" : "Add"} 
                    </Button>
                </div>
                <div>

                    {todo.map((item) => {
                        return (
                            <Todos
                                key={item._id}
                                text={item.text}
                                todoId={item._id}
                                isDone={item.isDone}
                                updateMode={() => updateMode(item._id, item.text)}
                                deleteTodo={() => deleteTodo(item._id, setTodo)}
                            />
                        )
                    })}

                </div>

            </div>
        </>
    )
}

export default Todo