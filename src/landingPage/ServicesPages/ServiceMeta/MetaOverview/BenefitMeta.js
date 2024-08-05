import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const BenefitMeta = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col className="text-center">
                        <h1 className="mt-3 mb-3 fontWeight-800">
                            Here are the Potential Benefits of WebAR 
                        </h1>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col lg={2} sm={12} className='mb-3'>
                        <div className="BenefitContent">
                            <img src="https://futurristic.com/image/video/Metaverse/01-Benefits.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500 fontSize-18">Immersive Brand Presence</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} sm={12} className='mb-3'>
                        <div className="BenefitContent">
                            <img src="https://futurristic.com/image/video/Metaverse/02-Benefits.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500 fontSize-18">Enhanced Customer Engagement</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} sm={12} className='mb-3'>
                        <div className="BenefitContent">
                            <img src="https://futurristic.com/image/video/Metaverse/03-Benefits.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500 fontSize-18">Innovative Marketing and Sales Platforms</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} sm={12} className='mb-3'>
                        <div className="BenefitContent">
                            <img src="https://futurristic.com/image/video/Metaverse/04-Benefits.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-0 fontWeight-500 fontSize-18">Data-Driven Insights for Business Growth</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} sm={12} className='mb-3'>
                        <div className="BenefitContent">
                            <img src="https://futurristic.com/image/video/Metaverse/05-Benefits.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-0 fontWeight-500 fontSize-18">Future-Proofing Your Business</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} sm={12} className='mb-3'>
                        <div className="BenefitContent">
                            <img src="https://futurristic.com/image/video/Metaverse/06-Benefits.png" className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-0 fontWeight-500 fontSize-18">Scalability and Flexibility</h5>
                            </div>
                        </div>
                    </Col>

                </Row>
                <div className="mt-5 mb-3 row"></div>
            </Container>
        </>
    )
}
