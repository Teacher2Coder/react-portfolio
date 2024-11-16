import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="navbar-brand text-light" to="/">
            Ethan Owens
        </Link>,
        <Link key={2} className="nav-item btn btn-outline-light" to="/about">
            About
        </Link>,
        <Link key={3} className="nav-item btn btn-outline-light" to="/contact">
            Contact
        </Link>,
        <Link key={4} className="nav-item btn btn-outline-light" to="/portfolio">
            Portfolio
        </Link>,
        <Link key={5} className="nav-item btn btn-outline-light" to="/resume">
            Resume
        </Link>
      ]}
    />
  );
}