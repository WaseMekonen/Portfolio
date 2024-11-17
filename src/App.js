import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { projects, skills } from "./moudles";
import Navbar from "./components/Navbar";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiFillCheckCircle } from "react-icons/ai";
import Projects from "./components/Projects copy";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  // const [show, setShow] = useState(false);
  const [project, setProjects] = useState(projects);
  const [typeTrim] = useState("");

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  // useEffect(() => {
  //   Aos.init({ duration: 2000, once: true });
  // }, [project, typeTrim, show]);

  return (
    <div className="App">
      <Intro />
      <main>
        <Navbar />
        <About skill={skills} />
        <article className="portfilio-cont" id="portfolio">
          <div className="page-head" data-aos="fade-right">
            <h1>PROJECTS</h1>
            <div className="line"></div>
            <Projects />
          </div>
        </article>
        <Contact />
      </main>
    </div>
  );
}

export default App;
