const education = [
  "Bachelor of Science (B.S.) - Exercise Physiology: University of Mary Hardin - Baylor",
  "Coding Bootcamp - The University of Texas at Austin",
  "AZ-900 - Microsoft Certified: Azure Fundamentals",
  "CLF-CO2 - AWS Certified Cloud Practitioner (Expected Completion Date: March 2025)",
];

const Education = () => {
  return (
    <div className="card resume-cards">
      <header className="card-header">
        <h4>Education and Certifications</h4>
      </header>
      <div className="card-body">
        <ul className="resume-list">
          {education.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Education;