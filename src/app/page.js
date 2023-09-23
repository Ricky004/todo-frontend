"use client"


import Sidebars from "./Sidebars"
import Todo from "./Todo"

export default function Home() {

  return (
    <>
      <div className="flex h-screen w-full">
        <Sidebars />
        <Todo></Todo>
      </div>
    </>
  )
}
