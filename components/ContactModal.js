import React from "react";

const ContactModal = ({ closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        {/* Your form inputs go here */}
        <button onClick={closeModal} className="bg-blue-500 px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
