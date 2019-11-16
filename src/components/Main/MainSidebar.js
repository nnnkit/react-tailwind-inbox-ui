import React from "react"
import { MdKeyboardArrowDown, MdSort } from "react-icons/md"

export default function MainSIdebar() {
  return (
    <div className="flex-grow w-full max-w-xs bg-gray-200 border-l border-r px-4 py-2 border-b">
      <div className="flex justify-between px-4 items-center justify-between">
        <button className="text-xs font-semibold text-gray-600 flex items-center">
          Sorted by date
          <MdKeyboardArrowDown className="text-gray-500" />
        </button>
        <MdSort className="text-gray-500 h-6 w-6 fill-current" />
      </div>
      <a href="" className="block bg-white px-6 py-3">
        <div className="flex justify-between">
          <span className="text-sm font-medium font-semibold text-gray-900">
            Gloria Robetsan
          </span>
          <span className="text-xs text-gray-600">2 days ago</span>
        </div>
        <p className="text-sm text-gray-700">Re: Student Details</p>
        <p class="text-gray-500">
          Learning about React and React Router is really really important if
          you want to get better at creating UIs.
        </p>
      </a>
    </div>
  )
}
