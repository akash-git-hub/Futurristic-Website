import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const BenefitsMobileApp = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col className="text-center">
                        <h1 className="mt-3 mb-3 fontWeight-800" style={{ textAlign: 'center' }}>
                            Let's Dive into Mobile, Web & Enterprise Development Wonders
                        </h1>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Enhanced User Experience</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/02-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Increased Productivity</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/03-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">High Scalability</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/04-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Real-time Access</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/05-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Cost Efficiency</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/06-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Cross-platform Compatibility</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
