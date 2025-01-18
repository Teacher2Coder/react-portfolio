import { useOutletContext } from "react-router-dom";

import projects from "../assets/projects.json";

export default function PortfolioPage() {
  const [currentPage, setCurrentPage] = useOutletContext("Portfolio");

  setCurrentPage("Portfolio");

  document.title = "Ethan Owens - " + currentPage;

  return (
    <div>
      <div className="card">
        <header className="card-header portfolio-header">
          <h2>Check out my projects!</h2>
        </header>
        <div className="card-body">
          <p style={{ textAlign: 'center' }}>
            Note: Some of the web service applications will take some time to load.
            I leveraged the free platforms to deploy these pages. Give around 60 to 90 seconds to load!
          </p>
          <div className="project-list">
            {projects.map((project) => (
              <div key={project.projectName} className="card project">
                <header className="card-header portfolio-header">
                  <h4>{project.projectName}</h4>
                </header>
                <div className="card-body project-info">
                  <img className="portfolio-img" src={project.image}></img>
                  <p style={{ textAlign: 'center' }}>{project.description}</p>
                  <h5 style={{ textAlign: 'center' }}>Application Type:</h5>
                  <p style={{ textAlign: 'center' }}>{project.type}</p>
                  <h5 style={{ textAlign: 'center' }}>Technologies used:</h5>
                  {project.technologies.map((tech) => (
                    <p key={tech}>{tech}</p>
                  ))}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a className="btn btn-primary" href={project.repo}>
                      Check out the Repo!
                    </a>
                    {project.deployed ? (
                      <a
                        className="btn btn-primary"
                        href={project.url}
                        style={{ marginTop: "10px" }}
                      >
                        Deployed App
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
