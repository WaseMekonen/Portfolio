/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaArrowRight,
  FaRocket,
  FaCode,
  FaUserFriends,
  FaArrowCircleUp,
  FaLinkedinIn,
  FaPalette,
  FaGithub,
  FaRegWindowMaximize,
} from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";

import { MdMenu } from "react-icons/md";
import profilePic from "./assets/portfolioPic.png";
import ecommerce from "./assets/E-commerce.jpg";
import Quote from "./assets/Quote-generator.jpg";
import library from "./assets/library.jpg";
import Cooking from "./assets/Master-Cooking.jpg";
import Flight from "./assets/Flight-Booking.jpg";
import Memory from "./assets/Memory-Game.jpg";

const skills = [
  { lang: "HTML", perc: "90%" },
  { lang: "CSS", perc: "80%" },
  { lang: "JavaScript", perc: "70%" },
  { lang: "Node.js", perc: "60%" },
  { lang: "React", perc: "80%" },
  { lang: "mongoDb", perc: "65%" },
  { lang: "Git", perc: "75%" },
  { lang: "Ui design", perc: "70%" },
];
const projects = [
  {
    name: "E-commerce",
    type: "JS-vanila",
    technologys: ["nodeJs", "mongoDb", "Express", "Html/css"],
    img: ecommerce,
    gitLink: "https://github.com/WaseMekonen",
    projectLink: "https://wasemekonen.github.io/Memory-Game/",
  },
  {
    name: "Quote-generator",
    type: "React",
    technologys: ["nodeJs", "mongoDb", "Express", "Html/css"],
    img: Quote,
    gitLink: "https://github.com/WaseMekonen",
    projectLink: "https://wasemekonen.github.io/Memory-Game/",
  },
  {
    name: "Library",
    type: "React",
    technologys: ["nodeJs", "mongoDb", "Express", "Html/css"],
    img: library,
    gitLink: "https://github.com/WaseMekonen",
    projectLink: "https://wasemekonen.github.io/Memory-Game/",
  },
  {
    name: "Master-Cooking",
    type: "React",
    technologys: ["nodeJs", "mongoDb", "Express", "Html/css"],
    img: Cooking,
    gitLink: "https://github.com/WaseMekonen",
    projectLink: "https://wasemekonen.github.io/Memory-Game/",
  },
  {
    name: "Flight-Booking",
    type: "React",
    technologys: ["nodeJs", "mongoDb", "Express", "Html/css"],
    img: Flight,
    gitLink: "https://github.com/WaseMekonen",
    projectLink: "https://wasemekonen.github.io/Memory-Game/",
  },
  {
    name: "Memory-Game",
    type: "React",
    technologys: ["nodeJs", "mongoDb", "Express", "Html/css"],
    img: Memory,
    link: "https://wasemekonen.github.io/Memory-Game/",
    gitLink: "https://github.com/WaseMekonen/Memory-Game",
    projectLink: "https://wasemekonen.github.io/Memory-Game/",
  },
];
const filterTypes = [
  { id: 1, name: "All" },
  { id: 2, name: "JS-vanila" },
  { id: 3, name: "React" },
  { id: 4, name: "Node.js" },
];

function App() {
  const errorMessages = {
    userName: "name is short",
    userEmail: "email is not valid",
    message: "message is short",
  };
  const [skill, setSkill] = useState(skills);
  const [show, setShow] = useState(false);
  const [projModal, setProjModal] = useState("");
  const [modal, setModal] = useState(false);
  const [project, setProjects] = useState(projects);
  const [types, setTypes] = useState(filterTypes);
  const [typeTrim, setTypeTrim] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [userMessage, setUserMessage] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });
  const [sendMessage, setSendMessage] = useState(false);
  const form = useRef();

  const emailValidation = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setErrorName("");
    setErrorEmail("");

    let isAllValid = true;
    if (userMessage.userName.length < 2) {
      setErrorName(errorMessages.userName);
      console.log("name is short", userMessage.userName);
      isAllValid = false;
    }
    if (userMessage.message.length < 15) {
      setErrorMsg(errorMessages.message);
      console.log("message is short");
      isAllValid = false;
    }
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        userMessage.userEmail
      )
    ) {
      setErrorEmail(errorMessages.userEmail);
      isAllValid = false;
    }
    if (isAllValid) {
      sendEmail(e);
      setUserMessage({
        userName: "",
        userEmail: "",
        message: "",
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_99s446b",
        "template_3p65i49",
        form.current,
        "xzcPd986MlNt8dxsB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSendMessage(true);
  };

  const filterProjects = (technology) => {
    const newArray = projects.filter((item) => {
      return item.type === technology;
    });
    setProjects(newArray);
  };
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, [skill, project, typeTrim, show]);

  return (
    <div className="App">
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
      <main>
        <Navbar show={show} setShow={setShow} />

        <article className="about-cont" id="about">
          <div className="page-head">
            <h1>ABOUT</h1>
            <div className="line"></div>
          </div>
          <section className="sum-cont" data-aos="fade-up">
            <section>
              <div>
                <div className="svg-cont">
                  <FaCode />
                </div>
                <h3>Web Development</h3>
              </div>
              <div>
                <div className="svg-cont">
                  <FaPalette />
                </div>
                <h3>Creative Design</h3>
              </div>
            </section>
            <section>
              <div>
                <div className="svg-cont">
                  <FaUserFriends />
                </div>
                <h3>Team Player</h3>
              </div>
              <div>
                <div className="svg-cont">
                  <FaRocket />
                </div>
                <h3>Quick Learner</h3>
              </div>
            </section>
          </section>
          <section className="skills-cont">
            <div className="skills" data-aos="fade-right" data-aos-offset="200">
              {skill &&
                skill.map((item) => {
                  return (
                    <div className="skill" key={item.lang}>
                      <h2>{item.lang}</h2>
                      <div className="scale">
                        <div
                          style={{ width: item.perc }}
                          data-aos="fade-right"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                        ></div>
                      </div>
                      <span>{item.perc}</span>
                    </div>
                  );
                })}
            </div>
            <div className="whois-cont" data-aos="fade-left">
              <h3>Who is Wase?</h3>
              <div>
                <h4>
                  Full-Stack Web Application Developer, live and work in Israel.
                  Passionate about technology, striving to be the best.
                </h4>
                <section className="pic">
                  <img src={profilePic} alt="" />
                </section>
              </div>
            </div>
          </section>
        </article>
        <article className="portfilio-cont" id="portfolio">
          <div className="page-head" data-aos="fade-right">
            <h1>PROJECTS</h1>
            <div className="line"></div>
          </div>
          <section className="projects-cont">
            <ul className="projects-list" data-aos="fade-right">
              {types &&
                types.map((item) => {
                  return (
                    <li
                      key={item.id}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.name === "All") {
                          setProjects(projects);
                        } else {
                          filterProjects(item.name);
                        }
                      }}
                    >
                      {item.name}
                    </li>
                  );
                })}
            </ul>
            <div className="proj-map">
              {project &&
                project.map((proj) => {
                  return (
                    <section
                      className="project-container"
                      // data-aos="fade-up-right"
                      data-aos="flip-left"
                    >
                      <div
                        className="description-cont"
                        style={{ backgroundImage: `url(${proj.img})` }}
                      >
                        <div className="proj-bckg"></div>
                        <div className="description">
                          <h2>{proj.name}</h2>
                          <h1>{proj.type}</h1>
                          <button
                            onClick={() => {
                              setModal(!modal);
                              setProjModal(proj);
                            }}
                          >
                            <a>Learm More</a>
                          </button>
                        </div>
                      </div>
                    </section>
                  );
                })}
              <section
                className="modal-cont"
                onClick={() => {
                  setModal(!modal);
                }}
                style={{ visibility: modal ? "visible" : "hidden" }}
              >
                <div className="modal">
                  <span
                    onClick={() => {
                      setModal(!modal);
                    }}
                  >
                    X
                  </span>
                  <div className="modal-pic">
                    <img src={projModal.img}></img>
                  </div>
                  <div className="modal-description">
                    <h1>{projModal.name}</h1>
                    <div className="proj-desc">
                      <p>Lorem mmsd ksxse dsdx crtr sddsa cxcv fdgsmc</p>
                    </div>
                    <ul>
                      {projModal.technologys &&
                        projModal.technologys.map((technology) => {
                          return <li key={technology}>-{technology}</li>;
                        })}{" "}
                    </ul>
                    <div className="project-links">
                      <a href={projModal.gitLink} target="_blank">
                        <FaGithub />
                      </a>
                      <a href={projModal.projectLink} target="_blank">
                        <FaRegWindowMaximize />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </article>
        <article className="contact-cont">
          {sendMessage ? (
            <section className="send-message">
              <h1>Your Message has been sent!</h1>
              <AiFillCheckCircle />
            </section>
          ) : (
            ""
          )}
          <section className="contact">
            <div className="page-head" data-aos="zoom-in-left">
              <h1 id="contact">CONTACT</h1>
              <div className="line"></div>
            </div>
            <div className="form-cont">
              <section>
                <form
                  ref={form}
                  onSubmit={(e) => {
                    emailValidation(e);
                  }}
                >
                  <div
                    className="input-cont"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                  >
                    <label>Name</label>
                    <input
                      type="text"
                      name="user_name"
                      onChange={(e) => {
                        setUserMessage({
                          ...userMessage,
                          userName: e.target.value.trim(),
                        });
                      }}
                    />
                    <span className="err-msg">{errorName}</span>
                  </div>
                  <div
                    className="input-cont"
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                  >
                    <label>Enter your mail</label>
                    <input
                      type="text"
                      name="user_email"
                      onChange={(e) => {
                        setUserMessage({
                          ...userMessage,
                          userEmail: e.target.value.trim(),
                        });
                      }}
                    />
                    <span className="err-msg">{errorEmail}</span>
                  </div>
                  <div
                    className="textarea-cont"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                  >
                    <label>Your message</label>
                    <textarea
                      name="message"
                      onChange={(e) => {
                        setUserMessage({
                          ...userMessage,
                          message: e.target.value.trim(),
                        });
                      }}
                    />
                    <span className="err-msg">{errorMsg}</span>

                    <div className="submit-cont">
                      <input
                        type="submit"
                        value="send"
                        disabled={sendMessage}
                        style={{
                          backgroundColor: sendMessage
                            ? "gray"
                            : "var(--second)",
                        }}
                      />
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </section>
          <section className="footer">
            <a className="back-totop-btn" href="#home">
              <FaArrowCircleUp />
            </a>
            <div></div>
            <div className="socials-links">
              <a
                className="social-app"
                target="_blank"
                href="https://www.linkedin.com/in/wase-mekonen/"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="social-app"
                target="_blank"
                href="https://github.com/WaseMekonen"
              >
                <FaGithub />
              </a>
            </div>
            <div className="copy-right">
              <h2>
                Wase mekonen || <span>2022</span>{" "}
              </h2>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
