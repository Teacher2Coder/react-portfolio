const affiliations = [
  "Austin .NET User Group - Member",
  "Austin AWS Users - Member",
  "Azure Austin - Member",
  "React ATX - Member",
];

const Affiliations = () => {
  return (
    <div className="card resume-cards">
      <header className="card-header">
        <h4>Past and Present Affiliations</h4>
      </header>
      <div className="card-body">
        <ul className="resume-list">
          {affiliations.map((affiliation, index) => (
            <li key={index}>{affiliation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Affiliations;