import React from "react"
import "./styles/build.css"
import HeaderLeft from "./components/Header/HeaderLeft"
import HeaderRight from "./components/Header/HeaderRight"
import MenuItem from "./components/Sidebar/MenuItem"
import MenuTextItem from "./components/Sidebar/MenuTextItem"

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
        <main className="bg-gray-200">
          <div></div>
          <div></div>
        </main>
      </div>
    </div>
  )
}
