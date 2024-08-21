import { useState , useRef , useEffect} from 'react'
import { Container, Row, Col, Form, Button, Stack, FloatingLabel } from 'react-bootstrap'
import { HiLocationMarker } from "react-icons/hi";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import { BsMailbox2 } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
 
const ContactUs = () => {
    const [validated, setValidated] = useState(false);
    const [formdata,setformdata] = useState([]);
    const email=useRef();
    const mobile=useRef();
    const message = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else{
            setValidated(true);
            const em = email.current.value;
            const mb = mobile.current.value;
            const msg = message.current.value;
            const obj = { email: em, mobile: mb, message: msg}
            setformdata((prevFormData) => [...prevFormData, obj]);
            setValidated(true); 
            console.log([...formdata,obj]);
            alertSuccess();
           clear(); 
        }
    };

    const clear = () => {
        email.current.value = "";
        mobile.current.value = "";
        message.current.value = "";
    }

    const alertSuccess = () =>{
        Swal.fire({
           title:'Thank You! ',
           text: "You have nailed it! We are diving into your information and will be in touch soon!",
           icon: 'success',
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

                                <div className="ContactInfo">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={12} className='mb-3'>
                                                <Form.Label>Enter Email</Form.Label>                                              
                                                    <Form.Control
                                                        required
                                                        placeholder="Email address"
                                                        ref={email}
                                                        id='email'
                                                    /> 
                                                    <Form.Control.Feedback type="invalid" >Please enter  a valid email.</Form.Control.Feedback>                                                
                                            </Col>

                                            <Col md={12} className='mb-3'>
                                                <Form.Label>Enter Number</Form.Label>                                              
                                                    <Form.Control
                                                        required
                                                        id='number'
                                                        ref={mobile}
                                                        placeholder="Mobile number"
                                                         type="number"
                                                    /> 
                                                     <Form.Control.Feedback type="invalid">Please enter  a valid mobile number.</Form.Control.Feedback>                                                
                                            </Col>

                                            <Col md={12} className='mb-3'>
                                                <Form.Label>Enter Your Message</Form.Label>                                              
                                                    <Form.Control
                                                    required
                                                        placeholder="Enter message"
                                                        as='textarea'
                                                        id='message'
                                                        ref={message}
                                                        style={{height:'100px'}}
                                                    />     
                                                     <Form.Control.Feedback type="invalid">Please enter message.</Form.Control.Feedback>                                            
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3">
                                            <Form.Check type='checkbox' id='contact-check' >
                                                <Form.Check.Input type='checkbox' required />
                                                <Form.Check.Label className='text-dark'>I agree to <Link to='https://futurristic.com/termandcondition' style={{ textDecoration: "none" }}>Terms and Conditions</Link> and <Link to='https://futurristic.com/privacypolicy' style={{ textDecoration: "none" }}>Privacy Policy .</Link></Form.Check.Label>
                                                <Form.Control.Feedback type="invalid"> You must agree before submitting.</Form.Control.Feedback>
                                            </Form.Check>
                                        </Form.Group>

                                        <Button type="submit" variant='primary' className='ContactBtn rounded-5'>Submit form</Button>
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
