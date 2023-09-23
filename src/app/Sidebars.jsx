import {  CalendarDays, ChevronsRight, ListChecks, SigmaSquare, StickyNote } from "lucide-react"
import { Sidebar, SidebarComponent, SidebarHorizontalLine, SidebarItem, SidebarSubHeading } from "./Sidebar"
import { Input } from "@/components/ui/input"

function Sidebars() {
  return (
    <>
      <Sidebar >   
          <SidebarComponent className="py-4">
            <Input placeholder="search"/>
          </SidebarComponent>
          <SidebarSubHeading text="TASKS" />
          <SidebarItem icon={<ChevronsRight size={20}/>} text="Upcoming" alert />
          <SidebarItem icon={<ListChecks size={20}/>} text="Today" />
          <SidebarItem icon={<CalendarDays size={20}/>} text="Calender" />
          <SidebarItem icon={<StickyNote size={20}/>} text="Sticky Wall" />
          <SidebarHorizontalLine />
          <SidebarSubHeading text="LISTS" className="pt-5" />
          <SidebarItem icon={<SigmaSquare size={20}/>} text="Personal" />
          <SidebarItem icon={<SigmaSquare size={20}/>} text="Office" />
        </Sidebar>
    </>
  )
}


export default Sidebars