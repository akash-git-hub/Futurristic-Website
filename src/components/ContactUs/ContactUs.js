import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { submitContactUsForm } from "../../services/NetworkCall"
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({ "email": "", "phoneNumber": "", "message": "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return; // Exit the function early if the form is invalid
        }

        setValidated(true);

        setLoading(true);
        // call the apis
        if (form.checkValidity() === true) {
            const res = await submitContactUsForm(formData);

            if (res.success) {
                alertSuccess();
                setValidated(false);
                form.reset(); // Use 'form' instead of 'event.target' for clarity
                setLoading(false);
                return;
            }
            else {
                // toast.error(res.message);
                alertError();
            }
            setLoading(false);
        }
        setLoading(false)
    };

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData((pre) => ({ ...pre, [name]: value }));
    }

    const captchaclick = ( value ) => {
        console.log("Captcha value:", value);
    }


    const alertSuccess = () => {
        Swal.fire({
            title: 'Thank You! ',
            text: "You have nailed it! We are diving into your information and will be in touch soon!",
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }

    const alertError = () => {
        Swal.fire({
            title: 'Oh oh!',
            text: 'It seems something went wrong. Please try again or email us at support@futurristic.com.',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
    }


    return (
        <>

            <div className="ContactMainContainer">
                <Container>
                    <div className="FormContent">
                        <Row>
                            <Col md={7} sm={12} >
                                <div className="FormHeading text-left ">
                                    <h3 className='fontWeight-800'>Let's Connect to Explore Possibilites</h3>
                                    <p>Didn’t find what you are looking for? Or want to discuss custom solutions? Let's connect!</p>
                                </div>

                                <div className="ContactInfo ">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group className="mt-3" as={Col} md="12" controlId="validationCustom03">
                                                <Form.Label>Enter Email</Form.Label>
                                                <Form.Control type="email" placeholder="Email address" required name="email" onChange={inputHandler} />
                                                <Form.Control.Feedback type="invalid" className='text-left'>
                                                    Please enter a valid email.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mt-3" as={Col} md="12" controlId="validationCustom04">
                                                <Form.Label>Enter Your Mobile Number</Form.Label>
                                                <Form.Control type="text" pattern="\d{10}" title="Please enter exactly 10 digits" placeholder="Mobile number" required name='phoneNumber' onChange={inputHandler} />
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
                                            <Form.Group  className="mt-3" as={Col} md="12" controlId="1">
                                                <Form.Check type='checkbox' id='contact-check' >
                                                    <Form.Check.Input type='checkbox' name='agree' id='1' required />
                                                    <Form.Check.Label className='text-dark'>I agree to <Link to='/termsandconditions' target='_blank' style={{ textDecoration: "none" }}>Terms and Conditions</Link> and <Link to='/privacypolicy' target='_blank' style={{ textDecoration: "none" }}>Privacy Policy .</Link></Form.Check.Label>
                                                    <Form.Control.Feedback type="invalid"> You must agree before submitting.</Form.Control.Feedback>
                                                </Form.Check>
                                            </Form.Group>
                                             {/* <Form.Group className="mt-3" as={Col} md='12' sm='10' xs='10'>
                                             <ReCAPTCHA sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' onChange={captchaclick}/>
                                             </Form.Group> */}
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
