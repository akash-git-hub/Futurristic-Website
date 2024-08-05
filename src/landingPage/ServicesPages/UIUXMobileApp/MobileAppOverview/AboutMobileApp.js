import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AboutMobileApp = () => {
    return (
        <>
            <div className="OwnMeta my-5">
                <Container>
                    <div className="AboutUs02">
                        <Row className="justify-content-center align-items-center">
                            <Col md={8} sm={12}>
                                <div className="AboutUsText">
                                    <div className="text-left vstack gap-3">
                                        <h1 className="text-center fontWeight-800">Mobile Apps, Website, and Enterprise Solution at Your Fingertips</h1>
                                        <h4 className="text-center">we can help you make it a reality in no time.</h4>
                                        <p className="text-center fontSize-24 fontWeight-500" style={{ color: 'rgb(134, 134, 139)' }}>
                                            We specialize in developing high-quality, user-friendly mobile and web applications for iOS and Android platforms. Our team leverages the latest technologies and frameworks for <Link to='/' target='_blank'>custom mobile applications development</Link>, tailored to meet the specific needs and requirements of our clients.
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
