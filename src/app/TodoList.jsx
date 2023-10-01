import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createTodoList, getTodoList } from "@/utils/HandelTodoApi"
import { Folder } from "lucide-react"
import { useEffect, useState } from "react"

const TodoList = ({}) => {

  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  
  useEffect(() => {
      getTodoList(setTodoList).then(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div className="flex flex-row gap-2">
        <Input placeholder="Add list..." value={name} onChange={(e) => setName(e.target.value)}/>
        <Button onClick={() => createTodoList(name, setName, setTodoList)}>Add</Button>
      </div>
      {loading ? (
        <p>loading...</p> ) : (
        <ul className="py-2">
          {todoList.map((item) => {
              return (
                <li key={item._id} className="flex flex-row gap-2 cursor-pointer py-1">
                  <Folder />
                  {item.name}
                </li>
              )
          })}
        </ul> 
      )}
    </>
  ) 
}

export default TodoList