import React from "react"
import "./styles/build.css"
import HeaderLeft from "./components/Header/HeaderLeft"
import HeaderRight from "./components/Header/HeaderRight"
import MenuItem from "./components/Sidebar/MenuItem"
import MenuTextItem from "./components/Sidebar/MenuTextItem"
import MainSidebar from "./components/Main/MainSidebar"
import MainSIdebar from "./components/Main/MainSidebar"
import Filter from "./components/Main/Filter"

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <header class="flex flex-shrink-0">
        <HeaderLeft />
        <HeaderRight />
      </header>
      <div className="flex-1 flex">
        <div className="w-64 bg-gray-100 p-6">
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
        <main className="flex bg-gray-200 flex-1 flex">
          <div className="flex-grow w-full max-w-xs bg-gray-200 border-l border-r py-2 border-b">
            <Filter />
            <MainSIdebar />
            <MainSIdebar />
            <MainSIdebar />
            <MainSIdebar />
            <MainSIdebar />
            <MainSIdebar />
            <MainSIdebar />
          </div>
          <div className="flex-1"></div>
        </main>
      </div>
    </div>
  )
}
