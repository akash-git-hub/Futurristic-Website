import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const BlockService = () => {
    return (
        <>
            <div className="OfferedServicesMeta">
                <Container>
                    <div className="justify-content-center mb-4 row">
                        <div className="text-center col">
                            <h1 className="mt-3 mb-1 fontWeight-800">
                                Blockchain Integration and Solutions
                            </h1>
                            <p>Find comprehensive Blockchain integration and solutions tailored for seamless business transformation and innovation in decentralized technologies.</p>
                        </div>
                    </div>
                    <Row>
                        {/* First Column */}
                        <Col md={4} sm={12}>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/01-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Blockchain Strategy Consulting</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Get expert consultation from Futurristic’s professional team. Discuss ways to integrate this solution into your business model for enhanced efficiency & transparency. </p>
                                </div>
                            </div>
                        </Col>
                        {/* Second Column */}
                        <Col md={4} sm={12}>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/02-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Custom Blockchain Development</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Explore bespoke solutions for your business model with Futurristic. Make use of custom blockchain integration and development to excel operational excellence and scalability.</p>
                                </div>
                            </div>
                        </Col>
                        {/* Third Column */}
                        <Col md={4} sm={12}>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/03-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Smart Contract Development and Implementation</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Seamlessly integrate Smart Contracts to achieve robust, transparent digital agreements, enhancing operational reliability & optimizing transaction workflows.</p>
                                </div>
                            </div>
                        </Col>
                        {/* Fourth Column */}
                        <Col md={4} sm={12}>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/04-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Blockchain Security Solutions</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Ensure resilient protection against emerging cyber threats by implementing cutting-edge protocols to fortify your blockchain infrastructure and protect sensitive data. </p>
                                </div>
                            </div>
                        </Col>
                        {/* Fifth Column */}
                        <Col md={4} sm={12}>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/05-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Decentralized Application (dApp) Development</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Build your decentralized application with Futurristic by leveraging groundbreaking technologies for bespoke functionality, unparalleled security, and enhanced user engagement. </p>
                                </div>
                            </div>
                        </Col>
                        {/* Sixth Column */}
                        <Col md={4} sm={12}>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/06-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-0">Blockchain Data Analytics</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Have access to reliable data seamlessly, eliminating the need for manual data gathering and reconciliation, thereby enabling faster and more efficient analysis. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
