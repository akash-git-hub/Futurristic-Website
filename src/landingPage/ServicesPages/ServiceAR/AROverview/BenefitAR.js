import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const benefit1 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/webAR-benefit01.png'
const benefit2 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/webAR-benefit02.png'
const benefit3 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/webAR-benefit03.png'
const benefit4 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/webAR-benefit04.png'
const benefit5 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/webAR-benefit05.png'
const benefit6 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/webAR-benefit06.png'

export const BenefitAR = () => {
    return (
        <>
            <Container>
                <Row className='mt-5'>
                    <div className="justify-content-center mb-4 row">
                        <div className="text-center col">
                            <h1 className="mt-3 mb-1 fontWeight-800">
                                Here are the Potential Benefits of WebAR
                            </h1>
                            <p className="text-center text-grey-500 fontSize-20">
                                See your products jump off the screen—WebAR’s benefits are just a click away!
                            </p>
                        </div>
                    </div>
                </Row>
                <Row>
                    {/* First Column */}
                    <Col md={2} sm={3} xs={4}>
                        <div className="BenefitContent1">
                            <img src={benefit1} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Easy Accessibility
                                </h5>
                            </div>
                        </div>
                    </Col>
                    {/* Second Column */}
                    <Col md={2} sm={3} xs={4}>
                        <div className="BenefitContent2">
                            <img src={benefit2} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">No App Required
                                </h5>
                            </div>
                        </div>
                    </Col>
                    {/* Third Column */}
                    <Col md={2} sm={3} xs={4}>
                        <div className="BenefitContent1">
                            <img src={benefit3} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">High Engagement
                                </h5>
                            </div>
                        </div>
                    </Col>
                    {/* Fourth Column */}
                    <Col md={2} sm={3} xs={4}>
                        <div className="BenefitContent2">
                            <img src={benefit4} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Cost-Effective</h5>
                            </div>
                        </div>
                    </Col>
                    {/* Fifth Column */}
                    <Col md={2} sm={3} xs={4}>
                        <div className="BenefitContent1">
                            <img src={benefit5} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Wide Compatibility
                                </h5>
                            </div>
                        </div>
                    </Col>
                    {/* Sixth Column */}
                    <Col md={2} sm={3} xs={4}>
                        <div className="BenefitContent2">
                            <img src={benefit6} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Real-Time Updates
                                </h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
