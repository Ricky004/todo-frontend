import { isTaskDone } from "@/utils/HandelApi"
import { Edit, Delete } from "lucide-react"
import { useState } from "react"

const Todos = ({text, updateMode, deleteTodo, todoId, isDone }) => {

  const [isChecked, setIsChecked] = useState(isDone)


  const handleCheckboxChange = () => {

    setIsChecked(!isChecked);

    // Trigger the API request to update the database
    isTaskDone(todoId, !isChecked, () => {
      setIsChecked(!isChecked); // Update the checkbox state after successful API update 
    })
  }

  return (
    <>
      <div className="mt-5 px-5 py-2 flex gap-3 items-center justify-between border border-black text-black rounded cursor-pointe">
        <div className="flex flex-row items-center gap-2">
          <input 
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-red-500 bg-gray-100 border-gray-300 rounded"></input>
          <div className="">{text}</div>
        </div>
            <div className="">
                <Edit className="cursor-pointer" onClick={updateMode}></Edit>
                <Delete className="cursor-pointer" onClick={deleteTodo}></Delete>
            </div>
       </div>
    </>
  )
}

export default Todos