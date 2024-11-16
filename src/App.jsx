// Import packages and components
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

// Add components
function App() {
    return (
        <body>
            <Nav />
            <main className='mx-3' id="main-content">
                <Outlet />
            </main>
            <footer>
                <div className='navbar navbar-expand-xxl bg-secondary' id="footer-card">
                    <a className='btn btn-primary footer-link' href="https://github.com/Teacher2Coder">Github</a>
                    <a className='btn btn-primary footer-link' href="https://www.linkedin.com/in/ethan-owens-717b16199/">LinkedIn</a>
                    <a className='btn btn-primary footer-link' href="https://x.com/Coach_E83">X</a>
                </div>
            </footer>
        </body>
    )
}

export default App;