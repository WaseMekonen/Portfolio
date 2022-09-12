import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import 'aos/dist/aos.css'
import {
  FaArrowRight,
  FaRocket,
  FaCode,
  FaUserFriends,
  FaArrowCircleUp,
  FaLinkedinIn,
  FaPalette,
  FaGithub,
  FaFacebook,
  FaRegWindowMaximize,
} from "react-icons/fa";
import profilePic from "./assets/portfolioPic.png";
import ecommerce from "./assets/E-commerce.jpg";
import Quote from "./assets/Quote-generator.jpg";
import library from "./assets/library.jpg";
import Cooking from "./assets/Master-Cooking.jpg";
import Flight from "./assets/Flight-Booking.jpg";
import Memory from "./assets/Memory-Game.jpg";
import { object } from "prop-types";

const skills = [
  { lang: "HTML", perc: "90%" },
  { lang: "CSS", perc: "80%" },
  { lang: "JavaScript", perc: "70%" },
  { lang: "Node.js", perc: "60%" },
  { lang: "React", perc: "80%" },
  { lang: "mongoDb", perc: "65%" },
  { lang: "Git", perc: "75%" },
  { lang: "Uidesign", perc: "70%" },
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
    userName: "",
    userEmail: "email is not valid",
    message: "message is short",
  };
  const [skill, setSkill] = useState(skills);
  const [projModal, setProjModal] = useState("");
  const [modal, setModal] = useState(false);
  const [project, setProjects] = useState(projects);
  const [types, setTypes] = useState(filterTypes);
  const [typeTrim, setTypeTrim] = useState("");
  const [errorMsg, setErrorMsg] = useState(errorMessages);
  const [userMessage, setUserMessage] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });
  const form = useRef();

  const emailValidation = (e) => {
    e.preventDefault();
    if (userMessage.userName.length < 2 && userMessage.userName == " ") {
      setErrorMsg(...errorMsg, (errorMsg["userName"] = "name is short"));
      return console.log("name is short");
    }
    if (userMessage.message.length < 15 && userMessage.userName == " ") {
      setErrorMsg(...errorMsg, (errorMsg["message"] = "message is short"));
      return console.log("message is short");
    } else {
      sendEmail(e);
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
  };

  const filterProjects = (technology) => {
    const newArray = projects.filter((item) => {
      return item.type === technology;
    });
    setProjects(newArray);
  };
  useEffect(() => {
    Aos.init({duration:2000});
  }, [skill, project, typeTrim]);

  return (
    <div className="App">
      

      <article className="background-cont"></article>
      <article className="background" id="home">
        <div className="circle"></div>
        <article className="welcome">
          <section className="intro"data-aos="flip-left" data-aos-delay="1000" data-aos-anchor=".example-selector">
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
        <article className="nav-bar-cont" >
          <section className="nav-bar" data-aos-offset="200" data-aos="fade-in" duration="1000">
            <div className="profile-logo">
              <div className="logo">
                <a href="#" className="logo-name">{`<`}</a>

                <a href="#">
                  <span>W</span>ase
                </a>
                <a href="#" className="logo-name">{`/>`}</a>
              </div>
            </div>

            <div className="aside-nav">
              <ul>
                <li>
                  <a href="#about">ABOUT</a>
                </li>
                <li>
                  <a href="#portfolio">PROJECTS</a>
                </li>

                <li>
                  <a href="#contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </section>
        </article>

        <article className="about-cont" id="about" >
          <div className="page-head">
            <h1>ABOUT</h1>
            <div className="line"></div>
          </div>
          <section className="sum-cont" data-aos="fade-up" data-aos-anchor-placement="top-center">
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
                        <div style={{ width: item.perc }}></div>
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
          {/* <section></section> */}
        </article>
        <article className="portfilio-cont" id="portfolio">
          <div className="page-head">
            <h1>PROJECTS</h1>
            <div className="line"></div>
          </div>
          <section className="projects-cont">
            <ul className="projects-list" >
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
                    <section className="project-container" data-aos="fade-up-right">
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
                className="modal"
                style={{ visibility: modal ? "visible" : "hidden" }}
              >
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
                    <a href={projModal.gitLink}>
                      <FaGithub />
                    </a>
                    <a href={projModal.projectLink}>
                      <FaRegWindowMaximize />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </article>
        <article className="contact-cont" id="contact">
          <section className="contact">
            <div className="page-head">
              <h1>CONTACT</h1>
              <div className="line"></div>
            </div>
            <div className="form-cont">
              <section>
                <form ref={form} onSubmit={emailValidation}>
                  <div className="input-cont">
                    <label>Name</label>
                    <input
                      type="text"
                      name="user_name"
                      onChange={(e) => {
                        setUserMessage({
                          ...userMessage,
                          userName: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="input-cont">
                    <label>Enter your mail</label>
                    <input
                      type="text"
                      name="user_email"
                      onChange={(e) => {
                        setUserMessage({
                          ...userMessage,
                          userEmail: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="textarea-cont">
                    <label>Your message</label>
                    <textarea
                      name="message"
                      onChange={(e) => {
                        setUserMessage({
                          ...userMessage,
                          message: e.target.value,
                        });
                      }}
                    />
                    <div className="submit-cont">
                      <input type="submit" value="send" />
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </section>
          <section className="footer">
            <div className="back-totop-btn">
              <FaArrowCircleUp />
            </div>
            <div></div>
            <div className="socials-links">
              <div className="social-app">
                <FaLinkedinIn />
              </div>
              <div className="social-app">
                <FaGithub />
              </div>
              <div className="social-app">
                <FaFacebook />
              </div>
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