import {
  Navbar,
  Nav,
  Container,
  NavbarToggle,
  NavbarCollapse
} from 'react-bootstrap';

import { useState } from'react';


export default function NavComponent({ currentPage, handlePageChange }) {
  // The Navbar UI component will render each of the Item elements in the Items prop

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expanded={expanded} 
      expand='md' 
      bg='primary' 
      variant='light'
      className='fixed-top'
    >
      <Container>
        <Navbar.Brand 
          className='text-light' 
          onClick={() => handlePageChange('Home')} 
          href='/'
        >
          <img 
            src='./EO.svg'
            alt='logo'
            width='30'
            height='30'
            className='d-inline-block align-top'
            style={{ marginRight: '10px' }} 
          />
          Ethan Owens
        </Navbar.Brand>
        <NavbarToggle aria-controls='navbar-nav' onClick={() => setExpanded(!expanded)} />
        <NavbarCollapse id='navbar-nav'>
          <Nav className='me-auto'>
          <Nav.Link 
              href="/about"
              onClick={() => handlePageChange('About')} 
            >
              <button 
                className={ 
                  currentPage === 'About' ? 'btn btn-secondary' : 'btn btn-outline-light' 
                }
                style={{ width: '100%' }}
              >
                About
              </button>
            </Nav.Link>
            <Nav.Link 
              href="/contact"
              onClick={() => handlePageChange('Contact')} 
            >
              <button 
                className={ 
                  currentPage === 'Contact' ? 'btn btn-secondary' : 'btn btn-outline-light' 
                }
                style={{ width: '100%' }}
              >
                Contact
              </button>
            </Nav.Link>
            <Nav.Link 
              href="/portfolio"
              onClick={() => handlePageChange('Portfolio')} 
            >
              <button 
                className={ 
                  currentPage === 'Portfolio' ? 'btn btn-secondary' : 'btn btn-outline-light' 
                }
                style={{ width: '100%' }}
              >
                Portfolio
              </button>
            </Nav.Link>
            <Nav.Link 
              href="/resume"
              onClick={() => handlePageChange('Resume')} 
            >
              <button 
                className={ 
                  currentPage === 'Resume' ? 'btn btn-secondary' : 'btn btn-outline-light' 
                }
                style={{ width: '100%' }}
              >
                Resume
              </button>
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
