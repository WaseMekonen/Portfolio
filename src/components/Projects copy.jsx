import React, { useState } from "react";
import "../App.css";
import { FaGithub, FaRegWindowMaximize } from "react-icons/fa";
import { filterTypes, projects } from "../moudles";

const Projects = () => {
  const [project, setProjects] = useState(projects);
  const [types] = useState(filterTypes);
  const [modal, setModal] = useState(false);
  const [projModal, setProjModal] = useState("");

  const filterProjects = (technology) => {
    const newArray = projects.filter((item) => item.type === technology);
    setProjects(newArray);
  };  

  return (
    <section className="projects-cont">
      <ul className="projects-list" data-aos="fade-right">
        {types.map((item) => (
          <button
            className="active-botton"
            key={item.id}
            onClick={() => {
              if (item.name === "All") {
                setProjects(projects);
              } else {
                filterProjects(item.name);
              }
            }}
          >
            {item.name}
          </button>
        ))}
      </ul>
      <div className="proj-map">
        {project.map((proj) => (
          <section
            className="project-container"
            data-aos="flip-left"
            key={proj.id}
          >
            <div
              className="description-cont"
              style={{ backgroundImage: `url(${proj.img})` }}
            >
              <div className="proj-bckg"></div>
              <div className="description">
                <h2>{proj.type}</h2>
                <h1>{proj.name}</h1>
                <button
                  onClick={() => {
                    setModal(!modal);
                    setProjModal(proj);
                  }}
                >
                  <a>Read More</a>
                </button>
              </div>
            </div>
          </section>
        ))}
        {modal && (
          <section className="modal-cont" onClick={() => setModal(!modal)}>
            <div className="modal">
              <div className="modal-pic">
                <img src={projModal.img} alt={projModal.name} />
              </div>
              <div className="modal-description">
                <h1>{projModal.desc}</h1>
                <div className="proj-desc">
                  <p>{projModal.name}</p>
                </div>
                <ul>
                  {projModal.technologys &&
                    projModal.technologys.map((technology) => (
                      <li key={technology}>-{technology}</li>
                    ))}
                </ul>
                <div className="project-links">
                  <a
                    href={projModal.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={projModal.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaRegWindowMaximize />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default Projects;
