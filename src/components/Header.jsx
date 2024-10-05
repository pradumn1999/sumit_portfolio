import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar as BootstrapNavbar, Container } from 'react-bootstrap';
import './header.css'; 
import { Images } from './../image/index';
import { Link } from 'react-scroll';  // Import Link from react-scroll

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BootstrapNavbar expand="lg" className={`navbar-light bgs ${isSticky ? 'navbar-sticky' : ''}`}>
      <Container fluid>
        {/* Left Side with Image */}
        <BootstrapNavbar.Brand href="#/">
          <img className='sumit-logo' src={Images.Image16} alt="Logo" style={{ height: '80px', marginRight: '50px' }} />
        </BootstrapNavbar.Brand>

        {/* Toggler for Mobile Screens */}
        <BootstrapNavbar.Toggle aria-controls="navbarResponsive" className="custom-toggler" />

        {/* Collapsible Menu */}
        <BootstrapNavbar.Collapse id="navbarResponsive">
          {/* Right Side with Navigation Links */}
          <Nav className="ms-auto">
            <Nav.Item>
              <Link 
                to="home" 
                className="nav-item mx-2 clr-whites link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-70}
              >
                Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link 
                to="about" 
                className="nav-item mx-2 clr-whites link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-70}
              >
                About Us
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link 
                to="activities" 
                className="nav-item mx-2 clr-whites link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-70}
              >
                Activities
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link 
                to="politicalCarrier" 
                className="nav-item mx-2 clr-whites link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-70}
              >
                Gallery
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link 
                to="contact" 
                className="nav-item mx-2 clr-whites link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-70}
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>

          {/* Contact Button */}
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <button className="btn btn-primary ms-lg-3">+91 87898 32218</button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
