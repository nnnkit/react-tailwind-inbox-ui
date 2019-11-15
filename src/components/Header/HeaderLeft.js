import React from "react";
import tw from "tailwind.macro";
const HeaderUserInfo = tw.div`
  bg-gray-800
  flex-shrink-0
  px-4
  py-3
  w-64
`;
export default function HeaderLeft() {
  return (
    <HeaderUserInfo>
      <button className="flex block w-full justify-between items-center">
        <span className="flex items-center">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="/images/avatar.jpeg"
            alt=""
          />
          <span className="text-sm font-medium text-white ml-4 mr-2">
            Monaco White
          </span>
        </span>
        <svg className="h-6 w-6 stroke-current text-gray-400 ml-10" fill="none">
          <path
            d="M16 10l-4 4-4-4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </HeaderUserInfo>
  );
}
