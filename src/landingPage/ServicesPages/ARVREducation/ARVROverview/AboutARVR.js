import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

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
                                        <h1 className="text-center fontWeight-800">Transform Training & Engagement with Custom AR/VR Solutions</h1>
                                        {/* <h4 className="text-center">we can help you make it a reality in no time.</h4> */}
                                        <p className="text-center fontSize-24 fontWeight-500" style={{ color: 'rgb(134, 134, 139)' }}>
                                            "Seeking innovative ideas to train and engage with your customer. Our experienced team is ready to create an AR/VR experience which will transform training and education by providing immersive, interactive, and impactful learning experiences across various domains and industries."
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
