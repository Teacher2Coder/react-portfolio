const experiences = [
  {
    company: "Independant Contractor - Austin, Texas",
    title: "Freelance Software Developer",
    dates: "2024 - Present",
    info: "Software developer responsible for designing, building, and configuring applications to meet business requirements and platform design specifications. Strong experience in Object Oriented Design principles, applying software design patterns, working with stakeholders and end users to build solutions for Non-profit and For-Profit Organizations. Developed Proof-of-Concept projects to validate new architectures and solutions for planning and refactoring existing code base.",
    responsibilities: [
      "Leveraging cloud technologies (AWS and Azure)",
      "Utilization of GitHub Actions for CI/CD and automation workflows",
      "Designing, developing, and maintaining new software products for robustness and scalability",
      "Development of innovative and efficient application solutions in order to meet client requirements",
      "Staying current with the latest industry trends and technologies to drive innovation and business value",
    ],
  },
  {
    company: "Austin ISD / Hays Consolidated ISD - Austin, Texas",
    title: "Secondary Instructor",
    dates: "2020 - Present",
    info: "Responsibilities included instructing Advanced Placement and Academic Social Studies courses, creating and monitoring course credit recovery activities, and actively collaborating in Professional Learning Committee activities. Coaching responsibilities included coaching wide receivers, analyzing team statistics, managing video databases and team application utilization metrics. Produced team highlights weekly and individual highlights periodically for athletes.",
    responsibilities: [
      "Utilization of AI tools in curriculum management and creation",
      "Designing and implementing Strength and Conditioning programs",
      "Monitoring student success data for analysis in broader team settings",
      "Uploading, sharing, and distributing video footage amongst various teams",
      "Communicating relevant student needs, behavioural issues and successes to their families",
    ],
  },
];

const Experience = () => {
  return (
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
              <p>{experience.info}</p>
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
  );
};

export default Experience;
