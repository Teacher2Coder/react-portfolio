import { useOutletContext } from "react-router-dom";

import Download from "../components/resume/Download";
import Profile from "../components/resume/Profile";
import Skills from "../components/resume/Skills";
import Experience from "../components/resume/Experience";
import Education from "../components/resume/Education";
import Affiliations from "../components/resume/Affiliations";

export default function ResumePage() {
  const [currentPage, setCurrentPage] = useOutletContext("Resume");

  setCurrentPage("Resume");

  document.title = "Ethan Owens - " + currentPage;

  return (
    <div className="card" id="resume-card">
      <header className="card-header">
        <h2>My Resume</h2>
      </header>
      <div className="card-body">
        <Download />
        <Profile />
        <Skills />
        <Experience />
        <Education />
        <Affiliations />
      </div>
    </div>
  );
}
