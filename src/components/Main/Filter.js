import React from "react"
import { MdKeyboardArrowDown, MdSort } from "react-icons/md"

export default function Filter() {
  return (
    <div className="flex-shrink-0 px-4 py-2 items-center justify-between flex">
      <button className="text-xs font-semibold text-gray-600 flex items-center">
        Sorted by date
        <MdKeyboardArrowDown className="text-gray-500 ml-1" />
      </button>
      <MdSort className="text-gray-500 h-6 w-6 fill-current" />
    </div>
  )
}
