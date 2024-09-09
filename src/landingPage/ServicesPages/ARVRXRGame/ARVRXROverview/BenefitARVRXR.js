import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const benefit1 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-Game-benefit01.png'
const benefit2 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-Game-benefit02.png'
const benefit3 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-Game-benefit03.png'
const benefit4 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-Game-benefit04.png'
const benefit5 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-Game-benefit05.png'
const benefit6 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-Game-benefit06.png'


export const BenefitsARVRXR = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center my-5">
                    <Col className="text-center">
                        <h1 className="mt-3 mb-1 fontWeight-800">
                            Here are the Potential Benefits of Interactive AR/VR/XR Game Development
                        </h1>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <div className="BenefitContent1">
                            <img src={benefit1} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Enhanced user engagement</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent2">
                            <img src={benefit2} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Real-world simulation</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent1">
                            <img src={benefit3} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Immersive learning experiences</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent2">
                            <img src={benefit4} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Adaptive training environments</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src={benefit5} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Personalized customer interactions</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src={benefit6} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Competitive edge</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
