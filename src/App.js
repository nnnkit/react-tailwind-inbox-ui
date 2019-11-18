import React from "react"
import "./styles/build.css"
import HeaderLeft from "./components/Header/HeaderLeft"
import HeaderRight from "./components/Header/HeaderRight"
import MenuItem from "./components/Sidebar/MenuItem"
import MenuTextItem from "./components/Sidebar/MenuTextItem"
import MainSidebar from "./components/Main/MainSidebar"
import Filter from "./components/Main/Filter"
import TopIcons from "./components/Main/TopIcons"
import MainlInfo from "./components/Main/MainlInfo"
import MailBody from "./components/Main/MailBody"

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <header class="flex flex-shrink-0">
        <HeaderLeft />
        <HeaderRight />
      </header>
      <div className="flex-1 flex overflow-hidden">
        <div className="w-64 bg-gray-100 p-6 overflow-y-auto">
          <nav>
            <h2 className="text-xs font-semibold text-gray-600 uppercase">
              Mailboxes
            </h2>
            <div className="mt-2">
              <MenuItem active />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
            </div>
            <h2 className="text-xs font-semibold text-gray-600 uppercase mt-8">
              Folders
            </h2>
            <div className="mt-4">
              <MenuTextItem />
              <MenuTextItem />
              <MenuTextItem />
              <MenuTextItem />
            </div>
          </nav>
        </div>
        <main className="flex bg-gray-200 flex-1">
          <div className="flex-grow w-full max-w-xs bg-gray-200 border-l border-r border-b flex flex-col">
            <Filter />
            <div className="overflow-y-auto">
              <MainSidebar />
              <MainSidebar />
              <MainSidebar />
              <MainSidebar />
              <MainSidebar />
              <MainSidebar />
            </div>
          </div>
          <div className="flex-1 w-0 flex-col flex">
            <div className="shadow-md relative">
              <div className="py-3 px-4 border-b bg-gray-100">
                <TopIcons />
              </div>
              <MainlInfo />
            </div>
            <div className="overflow-y-auto flex-1">
              <MailBody />
              <MailBody />
              <MailBody />
              <MailBody />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
