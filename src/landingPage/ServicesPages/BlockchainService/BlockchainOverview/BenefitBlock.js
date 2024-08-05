import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

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
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Enhanced Security</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/02-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Improved Transparency</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/03-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500">Greater Efficiency</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/04-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Decentralized Control</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/05-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2">Immutable Records</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="BenefitContent">
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/06-Benefits-B.png" className="img-fluid benefitIcons" alt="" />
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
