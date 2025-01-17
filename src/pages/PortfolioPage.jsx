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
          Check out my projects!
        </header>
        <div className="card-body project-list">
          {projects.map((project) => (
            <div key={project.projectName} className="card project">
              <header className="card-header portfolio-header">
                {project.projectName}
              </header>
              <div className="card-body project-info">
                <img className="portfolio-img" src={project.image}></img>
                <p>{project.description}</p>
                <a className="btn btn-primary repo-link" href={project.repo}>
                  Link to Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
