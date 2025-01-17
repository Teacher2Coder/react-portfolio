import { useOutletContext } from "react-router-dom";

import projects from "../assets/projects.json";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useOutletContext("Home");

  setCurrentPage("Home");

  document.title = "Ethan Owens - " + currentPage;

  return (
    <div>
      <div className="card home-cards">
        <header className="card-header">
          Welcome to my Portfolio powered by React!
        </header>
        <div className="card-body">
          <p>
            Thank you so much for visiting my portfolio! To learn more about me,
            click on the About tab. To send me a message, click the Contact tab.
            To see some of my work, click on the Portfolio tab. To see my
            resume, click on the Resume tab.
          </p>
        </div>
      </div>
      <div className="card home-cards" id="featured-projects">
        <header className="card-header">
          Check out some of my featured projects!
        </header>
        <div className="card-body">
          <div className="feature-list">
            {projects.map((project) =>
              project.featured ? (
                <div key={project.projectName} className="card feature-card">
                  <header className="card-header">{project.projectName}</header>
                  <div className="card-body">
                    <div className="containter">
                      <img className="portfolio-img" src={project.image}></img>
                      <p>{project.description}</p>
                      <a className="btn btn-primary" href={project.repo}>
                        Check out the Repo!
                      </a>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
