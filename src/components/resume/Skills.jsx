const skills = [
  "Proficient knowledge of cloud networking, databases, compute, deployment, integration, scaling, and automation",
  "Intermediate proficiency with relational and non-relational databases (PostgreSQL, MongoDB, CosmosDB, etc.)",
  "Working knowledge of security protocols (Active Directory, JSON Web Token, OAuth)",
  "Intermediate proficiency in JavaScript frameworks (React, Node, Express, etc.)",
  "Designing and developing software utilizing industry-standard best practices",
  "Leading small teams through SDLC including deployments of PWAs",
  "Maintaining and contributing to GitHub Repositories",
  "Strong understanding of C# and .NET Framework"
];

const Skills = () => {
  return (
    <div className="card resume-cards">
      <header className="card-header">
        <h4>Skills & Competencies</h4>
      </header>
      <div className="card-body">
        <ul className="resume-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills;