import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const benefit1 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/mobieweb-benefit01.png'
const benefit2 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/mobieweb-benefit02.png'
const benefit3 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/mobieweb-benefit03.png'
const benefit4 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/mobieweb-benefit04.png'
const benefit5 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/mobieweb-benefit05.png'
const benefit6 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/mobieweb-benefit06.png'



export const BenefitsMobileApp = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col className="text-center">
                        <h1 className="mt-3 mb-3 fontWeight-800" style={{ textAlign: 'center' }}>
                            Let's Dive into Mobile, Web & Enterprise Development Wonders
                        </h1>
                        <p className="text-center text-grey-500 fontSize-20">Turn your tech headaches into seamless solutions and see what benefits you will get.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <div className="BenefitContent1">
                            <img src={benefit1} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Enhanced User Experience</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent2">
                            <img src={benefit2} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Increased Productivity</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent1">
                            <img src={benefit3} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">High Scalability</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent2">
                            <img src={benefit4} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Real-time Access</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent1">
                            <img src={benefit5} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Cost Efficiency</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent2">
                            <img src={benefit6} className="img-fluid benefitIcons" alt="" />
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
