export default function Nav({ currentPage, handlePageChange }) {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <nav className="navbar fixed-top navbar-expand bg-primary" id="navigation">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="navigation-item">
                <a
                  href="/"
                  onClick={() => handlePageChange('Home')}
                  className="navbar-brand text-light"
                >
                  Ethan Owens
                </a>
              </li>
              <li className="navigation-item">
                <a
                  href="/about"
                  onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'btn btn-secondary' : 'btn btn-outline-light'}
                >
                  About
                </a>
              </li>
              <li className="navigation-item">
                <a
                  href="/contact"
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'btn btn-secondary' : 'btn btn-outline-light'}
                >
                  Contact
                </a>
              </li>
              <li className="navigation-item">
                <a
                  href="/portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  className={currentPage === 'Portfolio' ? 'btn btn-secondary' : 'btn btn-outline-light'}
                >
                  Portfolio
                </a>
              </li>
              <li className="navigation-item">
                <a
                  href="/resume"
                  onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'btn btn-secondary' : 'btn btn-outline-light'}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}