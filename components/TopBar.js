import React from "react";

const TopBar = ({ openModal }) => {
  return (
    <div className="sticky top-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Your Name</div>
      <button className="bg-blue-500 px-4 py-2 rounded" onClick={openModal}>
        Contact
      </button>
    </div>
  );
};

export default TopBar;
