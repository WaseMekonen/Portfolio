import "./App.css";
import React, { useState, useEffect, useRef } from "react";
// import projects from "./moudles";
import Navbar from "./components/Navbar";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import { filterTypes, projects, skills } from "./moudles";
import {
  FaArrowRight,
  FaRocket,
  FaCode,
  FaServer,
  FaArrowCircleUp,
  FaLinkedinIn,
  FaPalette,
  FaGithub,
} from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import profilePic from "./assets/portfolioPic.png";
import Projects from "./components/Projects copy";

function App() {
  const errorMessages = {
    userName: "name is short",
    userEmail: "email is not valid",
    message: "message is short",
  };
  const [skill] = useState(skills);
  const [show, setShow] = useState(false);
  // const [projModal] = useState("");
  const [project, setProjects] = useState(projects);
  // const [] = useState(filterTypes);
  const [typeTrim] = useState("");
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
    if (userMessage.userEmail) {
      setErrorEmail(errorMessages.userEmail);
      isAllValid = false;
    }
    if (isAllValid) {
      sendEmail();
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
    setErrorMsg("");
    setErrorName("");
    setErrorEmail("");
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
        <article className="portfilio-cont" id="portfolio">
          <div className="page-head" data-aos="fade-right">
            <h1>PROJECTS</h1>
            <div className="line"></div>
            <Projects />
          </div>
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
                    <label>Your email</label>
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
                            ? "var(--third)"
                            : "gray",
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
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="social-app"
                target="_blank"
                href="https://github.com/WaseMekonen"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="copy-right">
              <h2>
                Wase mekonen || <span>{new Date().getFullYear()}</span>{" "}
              </h2>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
