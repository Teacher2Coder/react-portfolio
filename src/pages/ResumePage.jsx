import { useOutletContext } from "react-router-dom";
import experiences from '../assets/experience.json';

export default function ResumePage() {
  const [currentPage, setCurrentPage] = useOutletContext("Resume");

  console.log(experiences);

  setCurrentPage("Resume");

  document.title = "Ethan Owens - " + currentPage;

  return (
    <div className="card" id="resume-card">
      <header className="card-header">
        <h2>My Resume</h2>
      </header>
      <div className="card-body">
        <a
          href="E.Owens_Resume.docx"
          className="btn btn-primary"
          id="download"
          download
        >
          Click here to download a copy of my resume!
        </a>
        <div className="card resume-cards">
          <header className="card-header">
            <h4>Profile</h4>
          </header>
          <div className="card-body">
            <p>
              Result Oriented, Full-Stack Software Developer with a track record of leading teams during quick turnaround projects with a collaborative approach and focus on quality.
              Self-starter with a strong emphasis on leveraging front end and back end technologies to deliver measurable business results while navigating through constant changes in the application development lifecycle.
              High energy, driven individual with a ‘roll-up-your-sleeves’ approach to delivering high quality, responsive, and scalable full-stack applications.
              Proven competency in Agile Development Methodology Framework with solid business understanding and a unique ability for finding creative solutions when options are limited.
            </p>
          </div>
        </div>
        <div className="card resume-cards">
          <header className="card-header">
            <h4>Skills & Competencies</h4>
          </header>
          <div className="card-body">
            <ul className="resume-list">
              <li>Proficient knowledge of cloud networking, databases, compute, deployment, integration, scaling, and automation</li>
              <li>Intermediate proficiency with relational and non-relational databases (PostgreSQL, MongoDB, CosmosDB, etc.)</li>
              <li>Working knowledge of security protocols (Active Directory, JSON Web Token, OAuth)</li>
              <li>Intermediate proficiency in JavaScript frameworks (React, Node, Express, etc.)</li>
              <li>Designing and developing software utilizing industry-standard best practices</li>
              <li>Leading small teams through SDLC including deployments of PWAs</li>
              <li>Maintaining and contributing to GitHub Repositories</li>
              <li>General understanding of C# and .NET Framework</li>
            </ul>
          </div>
        </div>
        <div className="card resume-cards">
          <header className="card-header">
            <h4>Relevant Work Experience</h4>
          </header>
          <div className="card-body work-experience">

            {experiences.map((experience) => (
              <div key={experience.company} className="card job-card">
                <header className="card-header">
                  <h5>{experience.company}</h5>
                </header>
                <div className="card-body">
                  <p className="job-title">{experience.title}</p>
                  <p>{experience.dates}</p>
                  <p>{experience.description}</p>
                  <h6>Responsibilities / experience includes:</h6>
                  <ul className="resume-list">
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card resume-cards">
          <header className="card-header">
            <h4>Education and Certifications</h4>
          </header>
          <div className="card-body">
            <ul className="resume-list">
              <li>
                Bachelor of Science (B.S.) - Exercise Physiology: University of
                Mary Hardin - Baylor
              </li>
              <li>
                Coding Bootcamp - The University of Texas at Austin
              </li>
              <li>
                AZ-900 - Microsoft Certified: Azure Fundementals
              </li>
              <li>
                CLF-CO2 - AWS Certified Cloud Practicioner (Expected Completion
                Date: March 2025)
              </li>
            </ul>
          </div>
        </div>
        <div className="card resume-cards">
          <header className="card-header">
            <h4>Past and Present Affiliations</h4>
          </header>
          <div className="card-body">
            <ul className="resume-list">
              <li>
                Austin .NET User Group
              </li>
              <li>
                Austin AWS Users
              </li>
              <li>
                Azure Austin
              </li>
              <li>
                React ATX
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
