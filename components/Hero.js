import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundShape from "./BackgroundShape";
import { useEffect, useState } from "react";

function Hero({}) {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Marshall Moise",
      "Professional Hockey Player",
      "Coach",
      "Hockey Enthusiast",
      "Skills Devotee",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const [snap, setSnap] = useState(true);
  useEffect(() => {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1) {
      if (ua.indexOf("chrome") > -1) {
        setSnap(true); // Chrome
      } else {
        setSnap(false); // Safari
      }
    }
  }, []);
  return (
    <div className="h-screen pb-60 flex flex-col space-y-4 items-center justify-center text-center overflow-hidden z-40">
      <BackgroundShape />
      <div className="pb-30">
        <img
          src="/marshphoto.jpg"
          alt="marshphoto"
          className="rounded-full"
          style={{ width: "400px", height: "400px" }}
        />
      </div>

      <div>
        <h2 className="text-xs md:text-lg uppercase text-gray-500 pb-2 tracking-[15px]">
          Marshalls Hockey Camp
        </h2>
        <h1 className="text-2xl lg:text-6xl md:text-4xl font-semibold px-10">
          <span className="mr-3 z-6">{text}</span>
          <Cursor cursorColor="#b624e6" />
        </h1>
        <div className="pt-5 z-20 relative"></div>
      </div>
    </div>
  );
}

export default Hero;
