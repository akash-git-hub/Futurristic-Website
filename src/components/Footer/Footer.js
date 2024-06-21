import React from 'react';
import { Container, Row, Col, Nav, Stack } from 'react-bootstrap';
import { BiLogoGmail, BiSolidPhoneCall } from 'react-icons/bi';
import { BsMailbox2 } from 'react-icons/bs';
import { RiInstagramFill } from "react-icons/ri";

import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { FaRegCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer className="mt-5 py-5">
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
                                <a href="https://wa.me/918305348270" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className='fontSize-24 text-black' />
                                </a>
                                <a href="mailto:support@futurristic.com">
                                    <BiLogoGmail className='fontSize-24 text-black' />
                                </a>
                                <a href="mailto:support@futurristic.com">
                                    <RiInstagramFill className='fontSize-24 text-black' />
                                </a>
                            </Stack>
                        </Col>


                        {/* Right side links */}
                        <Col xs={12} md={4} className="text-md-center " style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Nav.Link as={Link} to="" className="my-2    text-black TD-none">Home</Nav.Link>
                            <Nav.Link as={Link} to="" className="my-2    text-black TD-none">About</Nav.Link>
                            <Nav.Link as={Link} to="" className="my-2    text-black TD-none">Services</Nav.Link>
                            <Nav.Link as={Link} to="" className="my-2    text-black TD-none">Our Products</Nav.Link>
                            <Nav.Link as={Link} to="" className="my-2    text-black TD-none">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/privacypolicy" className="my-2 text-black TD-none">Privacy Policy</Nav.Link>
                            <Nav.Link as={Link} to="/termandcondition" className="my-2 text-black TD-none">Terms & Conditions</Nav.Link>
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
                                <Stack direction='horizontal' gap={3} style={{
                                    justifyContent: 'end'
                                }}>
                                    <BiSolidPhoneCall className='fontSize-24' />
                                    <p className='mb-0'>+91-8305348270</p>
                                </Stack>
                                <Stack direction='horizontal' gap={3} style={{
                                    justifyContent: 'end'
                                }}>
                                    <BsMailbox2 className='fontSize-24' />
                                    <p className='mb-0'>support@futurristic.com</p>
                                </Stack>
                            </Stack>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <p style={{
                                padding:'10px',
                                background:'#000',
                                color:'#fff',
                                marginTop:'20px'
                            }}>Copyright <FaRegCopyright /> 2018 | All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer
