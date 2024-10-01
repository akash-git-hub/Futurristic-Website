import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AboutAR = () => {
    return (
        <>
            <div className="OwnMeta my-5">
                <Container>
                    <div className="AboutUs02">
                        <Row className="justify-content-center align-items-center">
                            <Col md={9} sm={12}>
                                <div className="AboutUsText">
                                    <div className="text-left vstack gap-3">
                                        <h1 className="text-center fontWeight-800">Create Web AR Experience for your product and brands across various domains </h1>
                                        <h4 className="text-center">Blend the real and virtual worlds to witness the magic </h4>
                                        <p className="text-center fontSize-24 fontWeight-500" style={{ color: 'rgb(134, 134, 139)' }}>
                                        Our team of experts specializes in implementing Web-based AR solutions tailored to elevate your product, helping in achieving 
                                        business goals. We tackle challenges head-on, provide innovative solutions resulting in increased user engagement, sales & brand loyalty.
                                        And for an immersive twist, why not explore <Link to='/ar-vr-training-&-educational-platform' target='_blank'>AR VR Development Services</Link> services to create an unforgettable experience for your users?
                                        </p>
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
