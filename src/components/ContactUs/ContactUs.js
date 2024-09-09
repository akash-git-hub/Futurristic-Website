import { useState , useRef , useEffect} from 'react'
import { Container, Row, Col, Form, Button, Stack, FloatingLabel } from 'react-bootstrap'
import { HiLocationMarker } from "react-icons/hi";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import { BsMailbox2 } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { submitContactUsForm } from "../../services/NetworkCall"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
 
const ContactUs = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({ "email": "", "phoneNumber": "", "message": "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() == false) {
            event.stopPropagation();
            setValidated(true);
            return; // Exit the function early if the form is invalid
        }

        setValidated(true);

        setLoading(true);
        // call the apis
        if (form.checkValidity() == true) {
            const res = await submitContactUsForm(formData);
            if (res.success) {
                toast.success(res.message);
                setValidated(false);
                form.reset(); // Use 'form' instead of 'event.target' for clarity
                setLoading(false);
                return;
            }
            else {
                toast.error(res.message);
            }
            setLoading(false);
        }
        setLoading(false)
    };

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData((pre) => ({ ...pre, [name]: value }));
    }

    return (
        <>
            <ToastContainer />
            <div className="ContactMainContainer">
                <Container>
                    <div className="FormContent">
                        <Row>
                             <Col md={7} sm={12} >
                                <div className="FormHeading text-left ">
                                    <h3 className='fontWeight-800'>Let's Connect to Explore Possibilites</h3>
                                    <p>Didn’t find what you are looking for? Or want to discuss custom solutions? Let's connect!</p>
                                </div>

                                <div className="ContactInfo">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group className="mt-3" as={Col} md="12" controlId="validationCustom03">
                                                <Form.Label>Enter Email</Form.Label>
                                                <Form.Control type="email" placeholder="Email address" required name="email" onChange={inputHandler} />
                                                {/* <small style={{ color: "red", textAlign: "left" }}> {error.email}</small> */}
                                                <Form.Control.Feedback type="invalid" className='text-left'>
                                                    Please enter a valid email.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mt-3" as={Col} md="12" controlId="validationCustom04">
                                                <Form.Label>Enter Your Number</Form.Label>
                                                <Form.Control type="text" maxLength={12} placeholder="Mobile number" required name='phoneNumber' onChange={inputHandler} />
                                                {/* <small style={{ color: "red", textAlign: "left" }}> {error.phoneNumber}</small> */}
                                                <Form.Control.Feedback type="invalid" className='text-left'>
                                                    Please enter a valid mobile number.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mt-3" as={Col} md="12" controlId="validationCustom05">
                                                <Form.Label>Enter Your Message</Form.Label>
                                                <Form.Control as="textarea" rows={3} placeholder="Your message" required name='message' onChange={inputHandler} />
                                                {/* <small style={{ color: "red", textAlign: "left" }}> {error.message}</small> */}
                                                <Form.Control.Feedback type="invalid" className='text-left'>
                                                    Please enter a message.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mt-3" as={Col} md="12" controlId="1">
                                                <Form.Check
                                                    type="checkbox"
                                                    required
                                                    name='agree'
                                                    id='1'
                                                    feedback="You must agree before submitting."
                                                    feedbackType="invalid"
                                                    label={
                                                        <>
                                                            I agree to the{' '}
                                                            <a href="/termandcondition" target="_blank" rel="noopener noreferrer" style={{
                                                                textDecoration: 'none'
                                                            }}>terms & conditions</a>
                                                            {' '}and{' '}
                                                            <a href="/privacypolicy" target="_blank" rel="noopener noreferrer" style={{
                                                                textDecoration: 'none'
                                                            }}>privacy policy</a>.
                                                        </>
                                                    }
                                                />
                                                {/* <small style={{ color: "red", textAlign: "left" }}> {error.agree}</small> */}
                                            </Form.Group>
                                        </Row>
                                        <Button type="submit" variant="dark" className="ContactBtn rounded-5" disabled={loading}>Submit</Button>
                                    </Form>
                                </div>
                            </Col> 

                            <Col md={5} sm={12}>
                            <div className="FormHeading text-left mt-5">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/ContactUs.png" className="img-fluid w-100 rounded" alt="" />    
                            </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ContactUs
