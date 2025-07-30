"use client";
import next from "next";
import "./homepage.css";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <div id="home" className="heroPage h-screen w-screen flex ">
        <div className="leftSide h-screen w-30 flex items-center flex-col relative">
          <Image className="logo h-14 w-16 mt-1" src="/logo.png" alt="" />
          <div className="tagline absolute ">
            <h2>PEMULA</h2>
          </div>
        </div>
        <div className="introdution flex ml-11 items-center h-screen w-screen justify-between">
          <div className="greet">
            <div className="textGreet mb-14 text-4xl">
              <h1 className="im font-bold">I'M</h1>
              <h1 className="text-white">
                <span className="text-white font-semibold ">Fullstack </span>
                Development
              </h1>
            </div>
            <h2 className="slogan text-6xl">TECHNOLOGY</h2>
            <button className="text-white buttonAboutMe w-50  items-center mt-14 flex gap-1">
              ABOUT ME
              <span>
                <i className="iconAboutMe">
                  <Image
                    src="/nextButton.svg"
                    alt=""
                    width={150}
                    height={150}
                    style={{ objectFit: "cover" }}
                  />
                </i>
              </span>
            </button>
          </div>
        </div>
        <div className="rightSide relative">
          <div className="textCreator absolute">
            <p className="by text-2xl">Design by</p>
            <h1 className="creator text-9xl text-white">xyrionex</h1>
          </div>

          <div className="photoProfile  h-screen flex justify-center items-center ">
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
