// components/TopBar.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Modal from "./Modal"; // Update the path accordingly

function TopBar({ openModal }) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-40 xl:items-center p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center font-semibold text-gray-500 text-xl md:text-3xl"
      >
        Marshall Moise Hockey Camp
      </motion.div>

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          network="email"
          className="cursor-pointer"
          fgColor="gray"
          target="_blank"
          bgColor="transparent"
        />
        <button
          className="uppercase md:inline-flex text-md lg:text-xl text-gray-400 hover:underline mx-6"
          onClick={openModal}
        >
          Get In Touch
        </button>
      </motion.div>
    </header>
  );
}

export default TopBar;
