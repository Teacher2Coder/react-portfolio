// Import packages and components
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import Footer from "./components/Footer";

// Add components
function App() {
  const [currentPage, setCurrentPage] = useState();

  return (
    <div>
      <NavComponent currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <main className="mx-3" id="main-content">
        <Outlet context={[currentPage, setCurrentPage]} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
