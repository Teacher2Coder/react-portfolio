import { useOutletContext } from "react-router-dom";

import projects from "../assets/projects.json";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useOutletContext("Home");

  setCurrentPage("Home");

  document.title = "Ethan Owens - " + currentPage;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="card home-cards">
        <header className="card-header">
          <h1>Welcome to my Portfolio powered by React!</h1>
        </header>
        <div className="card-body">
          <p>
            Thank you so much for visiting my portfolio! I am a full-stack
            developer with a passion for creating dynamic and responsive web
            applications. I have experience in a variety of technologies and
            frameworks, and I am always eager to learn more. In this portfolio,
            you will find a selection of my projects, each showcasing my skills
            and creativity. I hope you enjoy exploring them as much as I enjoyed
            building them. If you have any questions or would like to discuss
            potential collaborations, please feel free to reach out. I look
            forward to connecting with you!
          </p>
        </div>
      </div>
      <div className="card home-cards" id="featured-projects">
        <header className="card-header">
          <h2>Featured Projects</h2>
        </header>
        <div className="card-body">
          <p>
            Note: Some of the web service applications will take some time to
            load. I leveraged the free platforms to deploy these pages. Give
            around 60 to 90 seconds to load!
          </p>
          <div className="feature-list">
            {projects.map((project) =>
              project.featured ? (
                <div key={project.projectName} className="card feature-card">
                  <header className="card-header">
                    <h4>{project.projectName}</h4>
                  </header>
                  <div className="card-body">
                    <div className="containter">
                      <img className="portfolio-img" src={project.image}></img>
                      <p>{project.description}</p>
                      <h5>Application Type:</h5>
                      <p>{project.type}</p>
                      <h5>Technologies used:</h5>
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
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
