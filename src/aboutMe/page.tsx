"use client";

import "./aboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div
        id="aboutme"
        className="aboutMe flex justify-between w-screen h-screen items-center gap-28 mb-20 flex-wrap"
      >
        <div className="profileAboutMe">
          <img src="/pp.png" alt="" />
        </div>
        <div className="descAboutMe">
          <div className="introdutionAboutMe flex flex-col gap-2">
            <h1 className="textAboutMe text-2xl font-black tracking-widest">
              ABOUT ME
            </h1>
            <h1 className="text-white  textHello text-6xl font-black">
              Hello, I'm Adit
            </h1>
            <h1 className=" rahmat text-6xl font-black mb-3">Rahmat</h1>
            <p className="line mb-4"></p> {/* line */}
            <p className="text-white descAboutProfile font-light text-justify mb-10">
              Fullstack Developer focused on building responsive and scalable
              websites using Next.js, React, and custom frameworks. Experienced
              in JavaScript, TypeScript, and PHP, with clean coding practices
              and a performance-oriented approach.
            </p>
          </div>
          <h2 className="name text-5xl mb-10">ADIT RAHMAT</h2>
          <div className="sosialMedia flex">
            <ul className="flex gap-5">
              <li>
                <i>
                  <a href="https://www.instagram.com/xyrionex/">
                    <img
                      className="iconSosialMedia w-14"
                      src="/ig.png"
                      alt=""
                    />
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a href="https://github.com/adit-hidayat">
                    <img
                      className="iconSosialMedia w-14"
                      src="/github.png"
                      alt=""
                    />
                  </a>
                </i>
              </li>
              <li>
                <i>
                  <a href="">
                    <img
                      className="iconSosialMedia w-14"
                      src="/linkedin.png"
                      alt=""
                    />
                  </a>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
