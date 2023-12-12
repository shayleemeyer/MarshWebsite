import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundShape from "./BackgroundShape";
import { useEffect, useState } from "react";

function Hero({}) {
  const [text] = useTypewriter({
    words: ["Skating", "Stickhandling", "Shooting"],
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
    <div className="pb-60 flex flex-col space-y-4 items-center  text-center overflow-hidden z-40">
      <div className="pt-60">
        <BackgroundShape />
      </div>
      <div className="">
        <img
          src="/marshphoto.jpg"
          alt="marshphoto"
          className="rounded-full"
          style={{ width: "300px", height: "300px" }}
        />
      </div>

      <div>
        <h2 className=" text-4xl  uppercase text-white-500 pb-2 tracking-[15px]">
          Marshalls Hockey Camp
        </h2>
        <h1 className="text-2xl lg:text-6xl md:text-4xl font-semibold px-10 pb-6">
          <span className="mr-3 z-6 text-gray-500">{text}</span>
          <Cursor cursorColor="#61f326" />
        </h1>
        <div className="text-left pt-5 z-20 relative font-semibold p-4 bg-gray-700 rounded-md shadow-lg shadow-lime-700 text-gray-100 md:max-w-[60%] max-w-[80%] mx-auto">
          <p className="pb-3">
            I'm Marshall Moise. I played professional hockey as a forward for
            the Savannah Ghost Pirates. Prior to my professional career, I
            played NCAA Division 1 hockey from 2017 to 2022 after developing in
            the United States Hockey League for two years.
          </p>
          <p className="pb-3">
            {" "}
            Though I am not playing professionally this year, my passion for the
            sport remains. I am dedicated to helping others develop there skills
            so they can fall in love with the game as well. I'd like to open
            this camp to players of all skill levels (ages 6-18) who are eager
            to improve their game and take their skills to the next level.
            Whether you're a beginner looking to grasp the basics or a seasoned
            player aiming to improve your overall techniques, this is the place
            for you. If your child is interested in learning more about the
            game, please email the following to
          </p>
          <p>
            <span class="underline text-lg"> moisemarshall1@gmail.com:</span>
          </p>
          <div className="p-3">
            <li>Childs name</li>
            <li>Childs age</li>
            <li>Childs experience level</li>
          </div>
          <p className="pb-3">
            <span class="underline text-lg"> Important Information: </span>
            this is not signing your child up for the camp. This is for me to
            collect inquiries so i can see how many groups need to be made based
            on age and skill level. When everything is scheduled, I will update
            this website and send emails out accordingly. I am expecting to have
            the camp up and running in the first quarter of 2024.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
