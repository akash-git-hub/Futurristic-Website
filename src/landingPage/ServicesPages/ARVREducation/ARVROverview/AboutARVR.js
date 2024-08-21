import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AboutARVR = () => {
    return (
        <>
            <div className="OwnMeta my-5">
                <Container>
                    <div className="AboutUs02">
                        <Row className="justify-content-center align-items-center">
                            <Col md={8} sm={12}>
                                <div className="AboutUsText">
                                    <div className="text-left vstack gap-3">
                                        <h1 className="text-center fontWeight-800">Want to Overcome Stagnant Engagement and Outdated Training Methods?                                        </h1>
                                       <h4 className="text-center">Transform Training & Engagement with Custom AR/VR Solutions</h4>
                                        <p className="text-center fontSize-24 fontWeight-500" style={{ color: 'rgb(134, 134, 139)' }}>
                                        Seeking innovative ideas to train and engage with your customer? Leverage AR/VR solutions with full customization to transform training and education to the next level. Provide immersive, interactive, and impactful learning experiences across various domains and industries with us. Additionally, when you are ready to bring it to the web, <Link to='/web-ar-based-marketing-solutions' target='_blank'>Web AR-based marketing solutions</Link> can be your next choice.  </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}
