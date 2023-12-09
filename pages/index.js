// pages/index.js
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import ContactModal from "../components/ContactModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <TopBar openModal={openModal} />
      {isModalOpen && <ContactModal closeModal={closeModal} />}
      <div className="p-4">{/* Your main content goes here */}</div>
    </div>
  );
};

export default Home;
