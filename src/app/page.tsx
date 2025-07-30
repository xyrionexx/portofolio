import "./index.css";
import Navbar from "@/navbar/page";
import Homepage from "@/homepage/home";
import AboutMe from "@/aboutMe/page";
import WhatIDo from "@/whatIDo/page";
import Certificate from "@/certificate/page";
import Project from "@/project/page";
import Footer from "@/footer/page";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Homepage />
        <AboutMe />
        <WhatIDo />
        <Certificate />
        <Project />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
