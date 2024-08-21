import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const service1 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/blockchain-services01.png'
const service2 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/blockchain-services02.png'
const service3 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/blockchain-services03.png'
const service4 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/blockchain-services04.png'
const service5 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/blockchain-services05.png'
const service6 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/blockchain-services06.png'


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
                            <p className="text-center text-grey-500 fontSize-20 ">Find comprehensive <Link to='/' target>Blockchain integration and solutions</Link> tailored for seamless business transformation and innovation in decentralized technologies.</p>
                        </div>
                    </div>
                    <Row>
                        {/* First Column */}
                        <Col md={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className='d-flex justify-content-center p-3'>
                                        <img src={service1} className="img-fluid serviceIcon" alt="" /></div>
                                    <h5 className="mb-2 text-justify fontWeight-500 text-center">Blockchain Strategy Consulting</h5>
                                    <p className="text-justify text-grey-500">Get expert consultation from Futurristic’s professional team. Discuss ways to integrate this solution into your business model for enhanced efficiency & transparency. </p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        {/* Second Column */}
                        <Col md={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className='d-flex justify-content-center p-3'>
                                        <img src={service2} className="img-fluid serviceIcon" alt="" /></div>
                                    <h5 className="mb-2 text-justify fontWeight-500 text-center">Custom Blockchain Development</h5>
                                    <p className="text-justify text-grey-500">Explore bespoke solutions for your business model with Futurristic. Make use of custom blockchain integration and development to excel operational excellence and scalability.</p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        {/* Third Column */}
                        <Col md={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className='d-flex justify-content-center p-3'>
                                        <img src={service3} className="img-fluid serviceIcon" alt="" /></div>
                                    <h5 className="mb-2 text-justify fontWeight-500 text-center">Smart Contract Development and Implementation</h5>
                                    <p className="text-justify text-grey-500">Seamlessly integrate Smart Contracts to achieve robust, transparent digital agreements, enhancing operational reliability & optimizing transaction workflows.</p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        {/* Fourth Column */}
                        <Col md={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className='d-flex justify-content-center p-3 '>
                                        <img src={service4} className="img-fluid serviceIcon" alt="" /></div>
                                    <h5 className="mb-2 fontWeight-500 text-center">Blockchain Security Solutions</h5>
                                    <p className="text-justify text-grey-500">Ensure resilient protection against emerging cyber threats by implementing cutting-edge protocols to fortify your blockchain infrastructure and protect sensitive data. </p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        {/* Fifth Column */}
                        <Col md={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className='d-flex justify-content-center p-3'>
                                        <img src={service5} className="img-fluid serviceIcon" alt="" /></div>
                                    <h5 className="mb-2 fontWeight-500 text-center">Decentralized Application (dApp) Development</h5>
                                    <p className="text-justify text-grey-500">Build your decentralized application with Futurristic by leveraging groundbreaking technologies for bespoke functionality, unparalleled security, and enhanced user engagement. </p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        {/* Sixth Column */}
                        <Col md={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1"> <div className='d-flex justify-content-center p-3'>
                                    <img src={service6} className="img-fluid serviceIcon" alt="" /></div>
                                    <h5 className="mb-2 fontWeight-500 text-center">Blockchain Data Analytics</h5>
                                    <p className="text-justify text-grey-500">Have access to reliable data seamlessly, eliminating the need for manual data gathering and reconciliation, thereby enabling faster and more efficient analysis. </p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
