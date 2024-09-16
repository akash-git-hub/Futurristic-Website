import React from 'react';
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';

const AboutUs = ({scrollToRefs}) => 
    
    {
    const scrollToRef = (ref) => {
        if (ref && ref.current) {
          console.log('Scrolling to:', ref.current);  // Debugging output
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          console.error('Reference is not defined or current is null:', ref);  // Debugging output
        }
      };
      

      const handleContactClick = () => {
        scrollToRef(scrollToRefs.contactUsRef); // Scroll to contactUsRef
    };

    return (
        <>
          
            <div className='AboutUs_Section mb-5 py-5' style={{
                background: '#EBF5FF'
            }}>
                <Container>
                    <div className='AboutUs'>
                        <Row className="align-items-center">
                            <Col md={6} sm={12}>
                                <div className="AboutUsText">
                                    <Stack className="text-left px-md-0" direction='vertical' gap={0}>
                                        {/* <h4>About Us</h4> */}
                                        <h1 style={{
                                            fontSize: '3.8rem',
                                            fontWeight: '700',

                                        }}>Your Vision,</h1>
                                        <h1 style={{
                                            fontSize: '3.8rem',
                                            fontWeight: '700',
                                            textAlign: 'right',
                                            padding: '0px 50px'

                                        }}>Our Expertise</h1>
                                        {/* <h3> Welcome to Futurristic</h3> */}
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/AboutUs03.svg" className="img-fluid w-75" alt="" />
                                    </Stack>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className="AboutUsText">
                                    <Stack className="text-center px-md-0" direction='vertical' gap={2}>
                                        <h5>Futurristic empowers businesses to bridge the gap between vision and experience. We redefine possibilities through Augmented Reality, Virtual Reality, Mixed Reality experiences, Metaverse, Game Development and more to craft groundbreaking solutions that redefine customer engagement, employee training, and product visualization. </h5>
                                        <h5>Our team of passionate experts collaborates with you to translate your vision into multidimensional realities, drive innovation and propelling your brand to the forefront.</h5>
                                         <Button onClick={handleContactClick} className='rounded-5 mt-4 ContactBtn mobile-100' variant='dark' type='submit'>Let's get started</Button> 
                                    </Stack>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default AboutUs;
