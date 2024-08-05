import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ARVRXRservice = () => {
    return (
        <>
            <div className="OfferedServicesMeta">
                <Container>
                    <Row className="justify-content-center mb-4">
                        <Col>
                            <h1 className="mt-3 mb-1 fontWeight-800">
                                Interactive AR/VR/XR Game Development Services
                            </h1>
                            <p>Here are the advanced Interactive AR/VR/XR <Link to="/" target='_blank'>game development services & solutions,</Link> tailored to accomplish your business needs swiftly and effectively. </p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/01-GameIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">AR/VR/XR Game Consultation Services</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Start your next game development project by getting a proper consultation from Futurristic’s expert game development crew. Clear your doubts and find out ways to craft your game within your budget with us.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/02-GameIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Development and Design Services</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Develop your game from the game development services & solutions providers. Ensure engaging storytelling, prototyping, art & asset creation, and advanced features that meet your unique vision & expectations.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/03-GameIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Technical Implementation Services</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Integrate your AR/VR/XR game seamlessly across multiple platforms that ensure strong compatibility and optimized performance. Additionally incorporate advanced technologies like AI & Spatial computing to enhance immersion & gameplay.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4 mb-3">
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/04-GameIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">UX & UI for Game</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Let your game development partner Futurristic design perfect user experience & interface for your AR/VR/XR game. Add intuitive navigation, visually appealing interfaces, and immersive interactions for your gamers.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/05-GameIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Testing and Quality Assurance Services</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Test your game from all corners to ensure quality delivery and seamless performance across diverse AR/VR/XR platforms. Optimize performance to guarantee an immersive and glitch-free gaming experience.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/05-GameIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Support and Maintenance Services</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">With Futurristic’s tech gurus, get the post-launch support & maintenance services necessary to ensure the ongoing functionality, optimization, and updates of your interactive AR/VR/XR games that enhance longevity & user satisfaction</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
