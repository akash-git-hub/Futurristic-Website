import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const benefit1 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-benefit01.png'
const benefit2 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-benefit02.png'
const benefit3 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-benefit03.png'
const benefit4 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-benefit04.png'
const benefit5 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-benefit05.png'
const benefit6 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-benefit06.png'


export const BenefitsARVR = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center my-4">
                    <Col className="text-center">
                        <h1 className="mt-3 mb-3">
                            Let's Dive into AR VR Training & Educational Platform Wonders
                        </h1>
                        <p className="text-center text-grey-500 fontSize-20 ">
                        Explore how AR VR Training & Educational Platform makes education interesting and exciting.</p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <div className="BenefitContent1">
                              <img src={benefit1} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Enhanced User Engagement</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent2">
                             <img src={benefit2} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Improved Knowledge Retention</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent1">
                             <img src={benefit3} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Interactive Learning Environment</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent2">
                             <img src={benefit4} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Real-World Simulations</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent1">
                             <img src={benefit5} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Cost-Effective Training</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent2">
                             <img src={benefit6} className="img-fluid benefitIcons" alt="" />
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
