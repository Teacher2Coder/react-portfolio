// Import packages and components
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Add components
function App() {
  const [currentPage, setCurrentPage] = useState();

  return (
    <div>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="mx-3" id="main-content">
        <Outlet context={[currentPage, setCurrentPage]} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
