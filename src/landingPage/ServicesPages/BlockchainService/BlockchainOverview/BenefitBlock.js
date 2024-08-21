import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const benefit1 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/bockchain-benefit01.png'
const benefit2 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/bockchain-benefit02.png'
const benefit3 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/bockchain-benefit03.png'
const benefit4 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/bockchain-benefit04.png'
const benefit5 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/bockchain-benefit05.png'
const benefit6 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/bockchain-benefit06.png'

export const BenefitBlock = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center my-5">
                    <Col className="text-center">
                        <h1 className="mt-3 mb-1 text-center fontWeight-800">
                            Here are the Potential Benefits of Blockchain
                        </h1>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <div className="BenefitContent1">
                            <img src={benefit1} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Enhanced Security</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent2">
                            <img src={benefit2} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Improved Transparency</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent1">
                            <img src={benefit3} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Greater Efficiency</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent2">
                            <img src={benefit4} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Decentralized Control</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent1">
                            <img src={benefit5} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Immutable Records</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent2">
                            <img src={benefit6} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Cost Savings</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="mt-5 mb-3 row"></div>
            </Container>
        </>
    )
}
