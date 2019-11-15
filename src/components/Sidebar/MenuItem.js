import React from "react"
import { MdInbox } from "react-icons/md"

export default function MenuItem({ active }) {
  return (
    <a
      href=""
      className={`mt-3 text-sm font-medium flex justify-between rounded-lg -mx-3 px-3 py-1 hover:bg-gray-200 ${
        active ? "bg-gray-300" : ""
      }`}
    >
      <span className="flex items-center">
        <MdInbox className="fill-current text-gray-500 h-6 w-6" />
        <span className="ml-3">Inbox</span>
      </span>
      <span className="text-xs text-semibold text-gray-700 bg-gray-300 rounded-full px-4 py-1 leading-tight">
        6
      </span>
    </a>
  )
}
