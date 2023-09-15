import { Edit, Delete } from "lucide-react"

const Todos = ({text, updateMode, deleteTodo }) => {
  return (
    <>
      <div className="mt-5 px-5 py-2 flex gap-3 items-center justify-between bg-primary text-primary-foreground hover:bg-primary/90 translate-x-1 rounded cursor-pointe">
        <div className="">{text}</div>
            <div className="">
                <Edit className="cursor-pointer" onClick={updateMode}></Edit>
                <Delete className="cursor-pointer" onClick={deleteTodo}></Delete>
            </div>
       </div>
    </>
  )
}

export default Todos