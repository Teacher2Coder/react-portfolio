// Import packages and components
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

// Add components
function App() {

    const [currentPage, setCurrentPage] = useState();

    return (
        <body>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className='mx-3' id="main-content">
                <Outlet context={[currentPage, setCurrentPage]}/>
            </main>
            <footer>
                <div className='navbar sticky-bottom bg-secondary' id="footer-card">
                    <a className='btn btn-primary footer-link' href="https://github.com/Teacher2Coder">Github</a>
                    <a className='btn btn-primary footer-link' href="https://www.linkedin.com/in/ethan-owens-717b16199/">LinkedIn</a>
                    <a className='btn btn-primary footer-link' href="https://x.com/Coach_E83">X</a>
                </div>
            </footer>
        </body>
    )
}

export default App;