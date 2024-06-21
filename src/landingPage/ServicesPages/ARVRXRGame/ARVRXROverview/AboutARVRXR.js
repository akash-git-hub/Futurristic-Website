import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

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
                                        <h1 className="text-center fontWeight-800">Create your Own AR/VR/XR Game and publish.</h1>
                                        <h4 className="text-center">we can help you make it a reality in no time.</h4>
                                        <p className="text-center fontSize-24 fontWeight-500" style={{ color: 'rgb(134, 134, 139)' }}>
                                            "We specialize in the multidisciplinary approach needed for creating an Interactive AR/VR/XR game development. We create immersive experiences that captivate players in virtual worlds or augment their reality with digital content."
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
