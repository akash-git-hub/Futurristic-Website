import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const benefit1 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/metaverse-benefit01.png'
const benefit2 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/metaverse-benefit02.png'
const benefit3 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/metaverse-benefit03.png'
const benefit4 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/metaverse-benefit04.png'
const benefit5 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/metaverse-benefit05.png'
const benefit6 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/metaverse-benefit06.png'

export const BenefitMeta = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col className="text-center">
                        <h1 className="mt-3 mb-3 fontWeight-800">
                            Here are the Potential Benefits of Metaverse
                        </h1>
                        <p className="text-center text-grey-500 fontSize-20 ">
                            Why settle for reality when the Metaverse offers limitless possibilities?  </p>
                    </Col>
                </Row>
                <Row className="mb-1">
                     <Col md={2} sm={3} xs={4} className='mb-3'>
                        <div className="BenefitContent1">
                            <img src={benefit1} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500 fontSize-18">Immersive Brand Presence</h5>
                            </div>
                        </div>
                    </Col>
                     <Col md={2} sm={3} xs={4} className='mb-3'>
                        <div className="BenefitContent2">
                            <img src={benefit2} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500 fontSize-18">Enhanced Customer Engagement</h5>
                            </div>
                        </div>
                    </Col>
                     <Col md={2} sm={3} xs={4} className='mb-3'>
                        <div className="BenefitContent1">
                            <img src={benefit3} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-2 fontWeight-500 fontSize-18">Innovative Marketing and Sales Platforms</h5>
                            </div>
                        </div>
                    </Col>
                     <Col md={2} sm={3} xs={4} className='mb-3'>
                        <div className="BenefitContent2">
                            <img src={benefit4} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-0 fontWeight-500 fontSize-18">Data-Driven Insights for Business Growth</h5>
                            </div>
                        </div>
                    </Col>
                     <Col md={2} sm={3} xs={4} className='mb-3'>
                        <div className="BenefitContent1">
                            <img src={benefit5} className="img-fluid benefitIcons" alt="" />
                            <div className="vstack gap-1">
                                <h5 className="mb-0 fontWeight-500 fontSize-18">Future-Proofing Your Business</h5>
                            </div>
                        </div>
                    </Col>
                     <Col md={2} sm={3} xs={4} className='mb-3'>
                        <div className="BenefitContent2">
                            <img src={benefit6} className="img-fluid benefitIcons" alt="" />
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
