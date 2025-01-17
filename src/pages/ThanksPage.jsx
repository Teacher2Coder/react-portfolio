import { useOutletContext } from "react-router-dom";

export default function ThanksPage() {

  const [currentPage, setCurrentPage] = useOutletContext("Thanks");

  setCurrentPage("Thanks");

  document.title = "Ethan Owens - " + currentPage;

  return (
    <div className="card" style={{ margin: '0 auto', width: '50%', marginTop: '20%' }}>
      <header className="card-header">Thanks!</header>
      <div className="card-body">
        <p>I have received your message! I will get back to you as soon as possible!</p>
      </div>
    </div>
  );
}