import React, { useRef } from 'react';
import { IoSend } from 'react-icons/io5';
import { IoMdAttach } from 'react-icons/io';
import { FaImage } from 'react-icons/fa';

const Input = () => {
  const fileInputRef = useRef(null);

  const handleFileInputChange = () => {
    // Handle file input change here if needed
  };

  return (
    <form>
      <label htmlFor="text" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
        <input
          type="text"
          id="default-search"
          className="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="type something...."
          required
        />

        {/* File Input Section */}
        <div className="flex  absolute bottom-2 right-2.5">
          <label
            htmlFor="fileInput"
            className="text-white cursor-pointer  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2"
          >
            <IoMdAttach /> 
          </label>
          <label
            htmlFor="fileInput"
            className="text-white cursor-pointer  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2"
          >
            <FaImage />
          </label>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileInputChange}
          />
          <button
            type="submit"
            className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2"
          >
            <IoSend /> 
          </button>
        </div>
      </div>
    </form>
  );
};

export default Input;
