import { useOutletContext } from "react-router-dom";

export default function ThanksPage() {

  const [currentPage, setCurrentPage] = useOutletContext("Thanks");

  setCurrentPage("Thanks");

  document.title = "Ethan Owens - " + currentPage;

  return (
    <div>
      <h1>Thanks!</h1>
      <p>I have received your email! I will get back to you as soon as possible!</p>
    </div>
  );
}