import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Stack, FloatingLabel } from 'react-bootstrap'
import { HiLocationMarker } from "react-icons/hi";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import { BsMailbox2 } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <>
            <div className="ContactMainContainer">
                <Container>
                    <div className="FormContent">
                        <Row>
                            <Col md={8} sm={12}>
                                <div className="FormHeading text-left ">
                                    <h3 className='fontWeight-800'>Let's Connect to Explore Possibilities</h3>
                                    <p>Didn’t find what you are looking for? Or want to discuss custom solutions? Let's connect!</p>
                                </div>
                                <div className="ContactInfo">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group className="mt-3" as={Col} md="12" controlId="validationCustom03">
                                                <Form.Label>Enter Email</Form.Label>
                                                <Form.Control type="email" placeholder="Email address" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter a valid email.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mt-3" as={Col} md="12" controlId="validationCustom04">
                                                <Form.Label>Enter Your Number</Form.Label>
                                                <Form.Control type="number" placeholder="Mobile number" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter a valid mobile number.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mt-3" as={Col} md="12" controlId="validationCustom05">
                                                <Form.Label>Enter Your Message</Form.Label>
                                                <Form.Control as="textarea" rows={3} placeholder="Your message" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter a message.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mt-3" as={Col} md="12" controlId="validationCustom06">
                                                <Form.Check
                                                    type="checkbox"
                                                    required
                                                    feedback="You must agree before submitting."
                                                    feedbackType="invalid"
                                                    label={
                                                        <>
                                                            I agree to the{' '}
                                                            <a href="/termandcondition" target="_blank" rel="noopener noreferrer" style={{
                                                                textDecoration:'none'
                                                            }}>terms & conditions</a>
                                                            {' '}and{' '}
                                                            <a href="/privacypolicy" target="_blank" rel="noopener noreferrer" style={{
                                                                textDecoration:'none'
                                                            }}>privacy policy</a>.
                                                        </>
                                                    }
                                                />
                                            </Form.Group>
                                        </Row>
                                        <Button type="submit" variant="dark" className="ContactBtn rounded-5">Submit form</Button>
                                    </Form>
                                </div>
                            </Col>
                            <Col md={4} sm={12}>
                                <div className="FormHeading text-left ">
                                    {/* <h3 className='fontWeight-800'>Contact Info</h3> */}
                                </div>
                                <img src="https://futurristic.s3.amazonaws.com/image/video/ContactUs.png" className="img-fluid w-100" alt="" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ContactUs
