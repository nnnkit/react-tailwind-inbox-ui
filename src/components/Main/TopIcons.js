import React from "react"
import {
  MdReply,
  MdFolderOpen,
  MdAccountCircle,
  MdLabelOutline,
  MdExpandLess,
  MdExpandMore,
  MdMoreHoriz
} from "react-icons/md"

export default function TopIcons() {
  return (
    <div className="fill-current flex-grow text-gray-600 flex flex-1 justify-between bg-gray-100">
      <div className="flex items-center">
        <button>
          <MdReply className="w-8 h-8 p-1" />
        </button>
        <button>
          <MdLabelOutline className="w-8 h-8 p-1" />
        </button>
        <button>
          <MdAccountCircle className="w-8 h-8 p-1" />
        </button>
        <button>
          <MdFolderOpen className="w-8 h-8 p-1" />
        </button>
        <button>
          <MdMoreHoriz className="w-8 h-8 p-1" />
        </button>
      </div>
      <div className="flex items-center">
        <MdExpandMore />
        <MdExpandLess />
      </div>
    </div>
  )
}
