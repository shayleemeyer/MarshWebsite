// pages/index.js
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Modal from "../components/Modal"; // Update the path accordingly
import Head from "next/head";
import Hero from "../components/Hero";

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
      <Head>
        <title>Marshall's Hockey Website</title>
      </Head>
      <TopBar openModal={openModal} />
      {isModalOpen && <Modal onClose={closeModal} />}
      <Hero />
    </div>
  );
};

export default Home;
