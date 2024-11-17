import React from "react";
import profilePic from "../assets/portfolioPic.png";

import { FaCode, FaPalette, FaServer, FaRocket } from "react-icons/fa";
import "./About.css";

function About({ skill }) {
  return (
    <article className="about-cont" id="about">
      <div className="page-head">
        <h1>ABOUT</h1>
        <div className="line"></div>
      </div>
      <section className="sum-cont" data-aos="fade-up">
        <section>
          <div className="sum-cont-icon">
            <div className="svg-cont">
              <FaCode />
            </div>
            <h3>Web Development</h3>
          </div>
          <div className="sum-cont-icon">
            <div className="svg-cont">
              <FaPalette />
            </div>
            <h3>Responsive Web Design</h3>
          </div>
        </section>
        <section>
          <div className="sum-cont-icon">
            <div className="svg-cont">
              <FaServer />
            </div>
            <h3>Back-end Development</h3>
          </div>
          <div className="sum-cont-icon">
            <div className="svg-cont">
              <FaRocket />
            </div>
            <h3>FreeLancing</h3>
          </div>
        </section>
      </section>
      {/* <section className="divider"></section> */}
      <section className="skills-cont">
        <div
          className="skills"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {skill &&
            skill.map((item) => {
              return (
                <div className="skill" key={item.lang}>
                  <h2 className="skill-lng">{item.lang}</h2>
                  <div className="scale-percetage">
                    <div
                      className="percetage"
                      style={{
                        width: `${item.perc}%`,
                        animation:
                          " 4s ease 0.5s 1 normal forwards running percentage-animation",
                      }}
                    ></div>
                  </div>
                  <span className="skill-perc">{item.perc}%</span>
                </div>
              );
            })}
        </div>
        <div className="whois-cont" data-aos="fade-left">
          <h3>Who is Wase?</h3>
          <div>
            <h4>
              I am a Full-Stack Web Application Developer based in Israel,
              deeply passionate about technology and committed to achieving
              excellence in my work.
            </h4>
            <section className="pic">
              <img src={profilePic} alt="" />
            </section>
          </div>
        </div>
      </section>
    </article>
  );
}

export default About;
