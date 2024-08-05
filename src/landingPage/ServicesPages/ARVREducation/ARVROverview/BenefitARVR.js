import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const BenefitsARVR = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center my-4">
                    <Col className="text-center">
                        <h1 className="mt-3 mb-3">
                            Let's Dive into AR VR Training & Educational Platform Wonders
                        </h1>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Enhanced User Engagement</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/02-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Improved Knowledge Retention</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/03-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Interactive Learning Environment</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/04-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Real-World Simulations</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/05-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Cost-Effective Training</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/06-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Increased Learner Motivation</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="mt-5 mb-3 row"></div>
            </Container>
        </>
    )
}
