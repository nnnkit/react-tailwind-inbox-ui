import React from "react";
import tw from "tailwind.macro";
import { MdHelp, MdNotifications, MdSearch } from "react-icons/md";

const HeaderRightWrapper = tw.div`
  flex-1
  items-center
  justify-between
  bg-gray-700
  flex
  px-6
`;
const Link = tw.a`
  inline-block
  px-3
  py-2
  leading-none
  font-medium
  text-white
  text-sm
  rounded-lg
`;

export default function HeaderRight() {
  return (
    <HeaderRightWrapper>
      <nav className="flex">
        <Link className="bg-gray-800">Mailbox</Link>
        {["Customers", "Reporting", "Manage"].map(item => (
          <Link>{item}</Link>
        ))}
      </nav>
      <div className="flex items-center">
        <span className="relative w-64 ">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <MdSearch className="text-gray-500 h-5 w-5 fill-current" />
          </span>
          <input
            placeholder="Search"
            type="text"
            className="pl-9 py-2 pr-2 bg-gray-900 rounded-lg text-sm placeholder-gray-400 text-white block w-full"
          />
        </span>
        <button className="ml-5 fill-current text-gray-400 h-5 w-5 hover:text-gray-200 text-xl">
          <MdNotifications />
        </button>
        <button className="ml-5 fill-current text-gray-400 h-5 w-5 hover:text-gray-200 text-xl">
          <MdHelp />
        </button>
      </div>
    </HeaderRightWrapper>
  );
}
