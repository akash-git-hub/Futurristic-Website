import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgMenuHotdog } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Header = ({ scrollToRefs }) => {
  const [isSticky, setSticky] = useState(false);

  const scrollToRef = (ref) => {
    console.log(ref);
    if (ref && ref.current) {
      console.log('Scrolling to:', ref.current);  // Debugging output
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Reference is not defined or current is null:', ref);  // Debugging output
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`NavParent ${isSticky ? 'sticky' : ''}`} style={{ position: 'relative' }}>
      <Navbar expand="lg" fixed="top" className={`bg-body-tertiarys navChild ${isSticky ? 'navbar-scrolled' : ''}`} style={{
        width: '100%',
        zIndex: 999,
      }}>
        <Container>
          <Navbar.Brand href="/" style={{
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 'bold',
            color: '#fff',
            width: '25%'
          }}>
            <img src="https://futurristic.s3.amazonaws.com/image/MainLogo.png" alt="" className="img-fluid w-100 text-left p-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <CgMenuHotdog />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className='text-white navLinkHover fontWeight-800 mx-2'>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToRef(scrollToRefs.aboutUsRef)} className='text-white navLinkHover fontWeight-800 mx-2'>About Us</Nav.Link>
              <Nav.Link onClick={() => scrollToRef(scrollToRefs.serviceRef)} className='text-white navLinkHover fontWeight-800 mx-2'>Services</Nav.Link>
              <Nav.Link as={Link} to="https://futurristic.com/fexperience/" target="_blank" className='text-white navLinkHover fontWeight-800 mx-2'>Our Products</Nav.Link>
              <Nav.Link onClick={() => scrollToRef(scrollToRefs.portfolioRef)} className='text-white navLinkHover fontWeight-800 mx-2'>Portfolio</Nav.Link>
              <Button onClick={() => scrollToRef(scrollToRefs.contactUsRef)} type='submit' variant='light' className='GetTouch rounded-5 fontWeight-600 mx-2'>Get In Touch</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
