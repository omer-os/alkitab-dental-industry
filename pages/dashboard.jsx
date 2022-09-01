import React, { useState } from "react";

export default function Dashboard() {
  const [Files, setFiles] = useState([{}]);
  const [NewFileData, setNewFileData] = useState({});
  return (
    <div>
      <form className="container gap-4 sm:w-3/6 w-full px-8 mt-8 flex flex-col">
        <input
          name="subject-name"
          type="text"
          className="bg-slate-800 p-2 rounded border-gray-400 border"
          placeholder="subject name"
        />
        <input
          name="subject-description"
          type="text"
          className="bg-slate-800 p-2 rounded border-gray-400 border"
          placeholder="subject simple description"
        />

        <div className="bg-slate-800 p-2 rounded">
          {Files.map((file, index) => (
            <div key={index} className="flex flex-col gap-2">
              <input
                name="file-name"
                type="text"
                className="bg-slate-700 p-2 rounded border-gray-400 border"
                placeholder="file name"
              />
              <input
                type="text"
                className="bg-slate-700 p-2 rounded border-gray-400 border"
                placeholder="file link"
              />
              <input
                type="text"
                className="bg-slate-700 p-2 rounded border-gray-400 border"
                placeholder="read time"
              />
              <input
                type="text"
                className="bg-slate-700 p-2 rounded border-gray-400 border"
                placeholder="teacher name"
              />
              <select name="file_type" className="p-2 bg-slate-900 ronunded">
                <option className="p-2" value="theoretical">
                  theoretical
                </option>
                <option className="p-2" value="practical">
                  practical
                </option>
              </select>
            </div>
          ))}
        </div>

        <button className="bg-blue-600 p-2 font-bold rounded active:scale-95 active:bg-blue-700">
          click to add file
        </button>
      </form>
    </div>
  );
}
