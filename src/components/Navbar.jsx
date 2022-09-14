/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

function Navbar({ show, setShow }) {
  return (
    <article className="nav-bar-cont">
      <nav className="nav-mobile">
        {show ? (
          <AiOutlineClose
            onClick={() => {
              setShow(!show);
            }}
          />
        ) : (
          <MdMenu
            onClick={() => {
              setShow(!show);
            }}
          />
        )}
        {show ? (
          <div className="nav-list-mobile">
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  PROJECTS
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        ) : (
          " "
        )}
      </nav>
      <section className="nav-bar">
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
  );
}

export default Navbar;
