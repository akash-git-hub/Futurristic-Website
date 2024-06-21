import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const AboutMeta = () => {
    return (
        <>
            <div className="OwnMeta my-5">
                <Container>
                    <div className="AboutUs02">
                        <Row className="justify-content-center align-items-center">
                            <Col md={8} sm={12}>
                                <div className="AboutUsText">
                                    <div className="text-left vstack gap-3">
                                        <h1 className="text-center fontWeight-800">Create Your Own Metaverse in Just 5 Minutes!</h1>
                                        <h4 className="text-center">we can help you make it a reality in no time.</h4>
                                        <p className="text-center fontSize-24 fontWeight-500" style={{ color: 'rgb(134, 134, 139)' }}>
                                            "Seeking innovative strategies to engage with your customers? Elevate your advertising, marketing, or branding efforts with our help. Our award-winning team of strategists, creators, and engineers are ready to craft your company or product's story. We specialize in designing, developing, and launching cutting-edge, impactful content across a range of technologies to drive your business forward."
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
