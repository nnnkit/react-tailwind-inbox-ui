import React from "react"

export default function MailBody() {
  return (
    <div>
      <div className="p-8 bg-white m-2 shadow rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h4 className="font-semibold text-gray-900">Joe Armstrong</h4>
            <span className="pl-2 text-gray-600 font-bold">wrote</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-4">
              Yesterday at 7:24AM
            </span>
            <img
              className="rounded-full w-8 h-8"
              src="/images/avatar.jpeg"
              alt=""
            />
          </div>
        </div>
        <p className="pt-6 text-sm text-gray-700">
          The idea for a publication that chronicles the design and innovation
          ecosystem in India has been buzzing around in my head for a while, but
          we only got to work on it in July this year. Four and a half months
          later, we’re ready to share it with you with some trepidation and much
          excitement.
        </p>
      </div>
    </div>
  )
}
