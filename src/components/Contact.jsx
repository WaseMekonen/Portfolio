import React, { useState, useRef } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaArrowCircleUp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);

  const [sendMessage, setSendMessage] = useState(false);
  const [userMessage, setUserMessage] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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

  const emailValidation = (e) => {
    e.preventDefault();

    // Perform validation checks here
    let isValid = true;

    if (userMessage.userName.trim() === "") {
      setErrorName("Name is required");
      isValid = false;
    } else {
      setErrorName("");
    }

    if (!isValidEmail(userMessage.userEmail)) {
      setErrorEmail("Invalid email address");
      isValid = false;
    } else {
      setErrorEmail("");
    }

    if (userMessage.message.trim() === "") {
      setErrorMsg("Message is required");
      isValid = false;
    } else {
      setErrorMsg("");
    }

    if (isValid) {
      setSendMessage(true);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
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
                      backgroundColor: sendMessage ? "var(--third)" : "gray",
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
  );
}

export default Contact;
