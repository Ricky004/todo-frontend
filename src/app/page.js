"use client"

import {  LayoutDashboard, Package, UserCircle } from "lucide-react"
import { Sidebar, SidebarItem } from "./Sidebar"
import Todo from "./Todo"

export default function Home() {

  return (
    <>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" active />
          <SidebarItem icon={<UserCircle size={20}/>} text="Profile" />
          <SidebarItem icon={<Package size={20}/>} text="Boxes" />
          <SidebarItem icon={<Package size={20}/>} text="Boxes" />
        </Sidebar>
        <Todo></Todo>
      </div>
    </>
  )
}
