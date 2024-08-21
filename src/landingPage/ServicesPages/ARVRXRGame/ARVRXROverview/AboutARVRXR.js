import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AboutARVRXR = () => {
    return (
        <>
            <div className="OwnMeta my-5">
                <Container>
                    <div className="AboutUs02">
                        <Row className="justify-content-center align-items-center">
                            <Col md={8} sm={12}>
                                <div className="AboutUsText">
                                    <div className="text-left vstack gap-3">
                                        <h1 className="text-center fontWeight-800">Struggling to Bring Your Dream Gaming World to Life?</h1>
                                        <h4 className="text-center">Witness Immersive Worlds Come to Life with AR/VR/XR Game Development                                        </h4>
                                        <p className="text-center fontSize-24 fontWeight-500" style={{ color: 'rgb(134, 134, 139)' }}>
                                        Being specialized in the multidisciplinary approach needed for creating an Interactive AR/VR/XR game development, let’s create your custom game. List down your requirements, and we’ll transform your ideas into a breathtaking game that not only meets but exceeds your expectations. Not only in games, ensure your vision is perfectly executed across all platforms with <Link to='/mobile-web-&-enterprise-development' target='_blank'>mobile web & enterprise development services</Link>.
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
