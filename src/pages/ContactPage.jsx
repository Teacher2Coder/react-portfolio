import { useOutletContext } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  const [currentPage, setCurrentPage] = useOutletContext("Contact");

  setCurrentPage("Contact");

  document.title = "Ethan Owens - " + currentPage;

  return (
    <div>
      <div className="card contact-card">
          <ContactForm />
      </div>
    </div>
  );
}
