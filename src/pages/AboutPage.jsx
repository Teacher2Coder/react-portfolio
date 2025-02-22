import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function AboutPage() {
  const [currentPage, setCurrentPage] = useOutletContext("About");

  setCurrentPage("About");

  document.title = "Ethan Owens - " + currentPage;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="card" id="about-card">
        <header className="card-header" id="about-header">
          <h2>All about me!!!</h2>
        </header>
        <div className="card-body about-content">
          <img className="professional" src="./me.jpeg"></img>
          <p className="about-text">
            Hello! My name is Ethan and I am a public school educator who is
            learning how to code! I have worked in public education for the past
            five years and decided that I needed to make a career change. I have
            always had an interest in programming and information technology but I
            never sought to make a career out of that interest until now, and now
            that I am, I am loving every minute of it!
          </p>
          <p className="about-text">
            I am finishing up my last few weeks of the Coding Bootcamp at the
            University of Texas at Austin. I am hoping to get a job that can lead
            me into the Artificial Intellegence world so that I can help usher in
            the age of our A.I. Overlords! To learn more about me, and how my skillset
            can benefit your team, check out my LinkedIn profile below!
          </p>   
        </div>
        <footer className="card-footer" id="about-footer">
          Thank you for visiting my portfolio!
        </footer>
      </div>
    </div>
  );
}
