import React from 'react';
import { Container, Row, Col, Nav, Stack } from 'react-bootstrap';
import { BiLogoGmail } from 'react-icons/bi';
import { BsMailbox2 } from 'react-icons/bs';
import { RiInstagramFill } from "react-icons/ri";

import { FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { FaRegCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = ({ scrollToRefs }) => {
    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            console.log('Scrolling to:', ref.current);  // Debugging output
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error('Reference is not defined or current is null:', ref);  // Debugging output
        }
    };



    return (
        <>
            <Footer className="mt-5 py-5">
                <Container>
                    <Row>
                        {/* Left side logo */}
                        <Col xs={12} md={4} className="text-center text-md-start mb-3 mb-md-0">
                            <h4 className='fontWeight-800'>FUTURRISTIC</h4>
                            <h6>We Forge Frontiers</h6>
                            <h5 className='fontWeight-500 mt-5'>Lets Connect</h5>
                            <Stack className='mt-4' direction='horizontal' gap={2}>
                                <a href="https://www.linkedin.com/company/futurristicbusinesssolutions" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn className='fontSize-24 text-black' />
                                </a>
                                {/* <a href="https://wa.me/918305348270" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className='fontSize-24 text-black' />
                                </a> */}
                                <a href="mailto:support@futurristic.com">
                                    <BiLogoGmail className='fontSize-24 text-black' />
                                </a>
                                <a href="https://www.instagram.com/futurristicbiz/">
                                    <RiInstagramFill className='fontSize-24 text-black' />
                                </a>
                            </Stack>
                        </Col>


                        {/* Right side links */}
                        <Col xs={12} md={4} className="text-md-left " style={{ textAlign: 'center' }}>
                            <Nav.Link as={Link} to="/" className="my-2 text-black TD-none">Home</Nav.Link>
                            <Nav.Link onClick={() => scrollToRef(scrollToRefs.serviceRef)} className='my-2 text-black TD-none'>Services</Nav.Link>
                            <Nav.Link onClick={() => scrollToRef(scrollToRefs.aboutUsRef)} className='my-2 text-black TD-none'>About Us</Nav.Link>
                            <Nav.Link onClick={() => scrollToRef(scrollToRefs.contactUsRef)} to="" className="my-2    text-black TD-none">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="https://futurristic.com/fexperience/" target="_blank" className="my-2 text-black TD-none">Our Products</Nav.Link>
                            <Nav.Link as={Link} to='/privacypolicy' target="_blank" className="my-2 text-black TD-none">Privacy Policy</Nav.Link>
                            <Nav.Link as={Link} to="/termsandconditions" target="_blank" className="my-2 text-black TD-none">Terms & Conditions</Nav.Link>
                        </Col>  
                        
                        <Col xs={12} md={4} className="text-center text-md-end mb-3 mb-md-0">
                            <Stack direction='vertical' gap={2}>
                                <h5>Address</h5>
                                <Stack direction='horizontal' gap={3} style={{
                                    justifyContent: 'end'
                                }}>
                                    <HiLocationMarker className='fontSize-24' />
                                    <h className='mb-0'>Ft. Lauderdale (USA), Indore (India)</h>
                                </Stack>
                                <h5 className='mt-4'>Contact Us</h5>
                                {/* <Stack direction='horizontal' gap={3} style={{
                                    justifyContent: 'end'
                                }}>
                                    <a href="https://wa.me/918305348270" target="_blank" rel="noopener noreferrer" style={{
                                        display: 'flex',
                                        textDecoration: 'none',
                                        color: '#000'
                                    }}>
                                        <BiSolidPhoneCall className='fontSize-24 mx-3' />
                                        <p className='mb-0'>+91-8305348270</p>
                                    </a>
                                </Stack>   */}
                                <Stack direction='horizontal' gap={3} style={{
                                    justifyContent: 'end'
                                }}>
                                    <a href="mailto:support@futurristic.com" style={{
                                        display: 'flex',
                                        textDecoration: 'none',
                                        color: '#000'
                                    }}>
                                        <BsMailbox2 className='fontSize-24 mx-3' />
                                        <p className='mb-0'>support@futurristic.com</p>
                                    </a>
                                </Stack>
                            </Stack>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <p style={{
                                padding: '10px',
                                background: '#000',
                                color: '#fff',
                                marginTop: '20px'
                            }}>Copyright <FaRegCopyright /> 2024 | All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        </>
    )
}

export default Footer
