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
              Full-Stack web developer fully equipped to collaborate on the
              development of various web applications. Capable of leveraging
              front-end technologies (HTML, CSS, JavaScript, React) as well as
              back-end technologies (Node.js, SQL, Sequelize, MongoDB,
              Mongoose). Proficient in Agile Web Development, working on
              projects in a team setting, and delivering high-quality,
              responsive, and scalable web applications.
            </p>
          </div>
        </div>
        <div className="card resume-cards">
          <header className="card-header">
            <h4>Skills & Competencies</h4>
          </header>
          <div className="card-body">
            <ul className="resume-list">
              <li>Problem Solving</li>
              <li>Small group leadership</li>
              <li>Effective Communication</li>
              <li>Proactively carrying out assigned duties</li>
              <li>Creating a healthy collaborative atmosphere</li>
              <li>JavaScript, jQuery, Node.js, SQL, MongoDB, React</li>
              <li>Maintaining and contributing to GitHub Repositories</li>
              <li>Google Applications (Docs, Sheets, Slides, App Scripts)</li>
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
                Date: Late February 2025)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
