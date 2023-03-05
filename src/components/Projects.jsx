import "../App.css";
import React, { useState } from "react";

import { FaGithub, FaRegWindowMaximize } from "react-icons/fa";
import { filterTypes, projects } from "../moudles";

function Projects() {
  const [project, setProjects] = useState(projects);
  const [types, setTypes] = useState(filterTypes);
  const [modal, setModal] = useState(false);
  const [projModal, setProjModal] = useState("");

  const filterProjects = (technology) => {
    const newArray = projects.filter((item) => {
      return item.type === technology;
    });
    setProjects(newArray);
  };
  return (
    <section className="projects-cont">
      <ul className="projects-list" data-aos="fade-right">
        {types &&
          types.map((item) => {
            return (
              <button
                className="active-botton"
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
              </button>
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
                      <a>Learn More</a>
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
            {/* <span
                    onClick={() => {
                      setModal(!modal); 
                    }}
                  >
                    X
                  </span> */}
            <div className="modal-pic">
              <img src={projModal.img}></img>
            </div>
            <div className="modal-description">
              <h1>{projModal.name}</h1>
              <div className="proj-desc">
                <p>{projModal.desc}</p>
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
  );
}

export default Projects;
