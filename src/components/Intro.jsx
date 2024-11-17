import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Intro.css";

function Intro() {
  return (
    <article className="background" id="home">
      <article className="background-cont"></article>
      <article className="welcome">
        <section
          className="intro"
          data-aos="flip-left"
          data-aos-delay="1000"
          data-aos-anchor=".example-selector"
        >
          <h2>
            Hello, I'm <span>Wase Mekonen</span>.
          </h2>
          <h3>I'm a full-stack web developer</h3>
          <a href="#portfolio" className="goToProject">
            View my work
            <FaArrowRight className="arrow" />
          </a>
        </section>
      </article>
    </article>
  );
}

export default Intro;
