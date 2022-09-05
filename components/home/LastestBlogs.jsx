import React from "react";

export default function LastestBlogs() {
  return (
    <div>
      <div className="flex mt-5 justify-between items-center">
        <div className="font-bold text-xl">Lastest Blogs</div>
        <div className="text-blue-600 underline">see all</div>
      </div>

      <div className="flex mt-4 h-max justify-center items-center">
        <div className="w-full rounded-xl overflow-hidden relative">
          <div>
            <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
              12 April 2021
            </p>
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-xl font-semibold 5 text-white">
                The Decorated Ways
              </h2>
              <p className="text-base leading-4 text-white mt-2">
                Dive into minimalism
              </p>
              <a className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">
                  Read More
                </p>
                <svg
                  className="fill-stroke"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 12.5L10.25 8L5.75 3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <img
            src="https://i.ibb.co/DYxtCJq/img-1.png"
            className="w-full"
            alt="chair"
          />
        </div>
      </div>
    </div>
  );
}
