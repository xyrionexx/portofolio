"use client";

import "./homepage.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Homepage() {
  const texts = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed]);

  // Split text to highlight the role part
  const getDisplayText = () => {
    const words = currentText.split(" ");
    if (words.length === 2) {
      return (
        <>
          <span className="text-white font-semibold">{words[0]} </span>
          {words[1]}
        </>
      );
    }
    return currentText;
  };
  return (
    <>
      <div id="home" className="heroPage h-screen w-screen flex ">
        <div className="leftSide h-screen w-30 flex items-center flex-col relative">
          <Image
            className="logo h-14 w-16 mt-1"
            src="/logo.png"
            alt=""
            width={150}
            height={150}
            style={{ objectFit: "cover" }}
          />
          <div className="tagline absolute ">
            <h2>PEMULA</h2>
          </div>
        </div>
        <div className="introdution flex ml-11 items-center h-screen w-screen justify-between">
          <div className="greet">
            <div className="textGreet mb-14 text-4xl">
              <h1 className="im font-bold">I&apos;M</h1>
              <h1 className="text-white text-3xl md:text-6xl font-normal">
                {getDisplayText()}
                <span className="animate-pulse text-white">|</span>
              </h1>
            </div>
            <h2 className="slogan text-6xl">TECHNOLOGY</h2>
            <button className="text-white buttonAboutMe w-50  items-center mt-14 flex gap-1">
              <a href="#aboutme" className="flex items-center gap-1">
                ABOUT ME
                <span>
                  <i className="iconAboutMe">
                    <Image
                      src="/nextButton.svg"
                      alt=""
                      width={150}
                      height={150}
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </i>
                </span>
              </a>
            </button>
          </div>
        </div>
        <div className="rightSide relative">
          <div className="textCreator absolute">
            <p className="by text-2xl">Design by</p>
            <h1 className="creator text-9xl text-white">xyrionex</h1>
          </div>

          <div className="photoProfile  h-screen flex justify-center items-center rounded-full ">
            <Image
              src="/pp.png"
              alt=""
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
