import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const service1 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-game-service01.png'
const service2 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-game-service02.png'
const service3 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-game-service03.png'
const service4 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-game-service04.png'
const service5 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-game-service05.png'
const service6 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRXR-game-service06.png'


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
                            <p className="text-center text-grey-500 fontSize-20 ">Here are the advanced Interactive AR/VR/XR <Link to="/" target='_blank'>game development services & solutions</Link> ,tailored to accomplish your business needs swiftly and effectively. </p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col sm={12} md={4} lg={4} className='mb-3 position-relative'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="d-flex justify-content-center p-3">
                                        <img src={service1} className="img-fluid serviceIcon" alt="" />
                                    </div><h5 className="mb-2 fontWeight-500 text-center">AR/VR/XR Game Consultation </h5>

                                    <p className="text-justify text-grey-500 text-center">Start your next game development project by getting a proper consultation from Futurristic’s expert game development crew. Clear your doubts and find out ways to craft your game within your budget with us.</p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        <Col sm={12} md={4} lg={4} className='mb-3 position-relative'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="d-flex justify-content-center p-3">
                                        <img src={service2} className="img-fluid serviceIcon" alt="" />
                                    </div> <h5 className="mb-2 fontWeight-500 text-center">Development and Design  </h5>

                                    <p className="text-justify text-grey-500 text-center">Develop your game from the game development services & solutions providers. Ensure engaging storytelling, prototyping, art & asset creation, and advanced features that meet your unique vision & expectations.</p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        <Col sm={12} md={4} lg={4} className='mb-3 position-relative'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="d-flex justify-content-center p-3">
                                        <img src={service3} className="img-fluid serviceIcon" alt="" />
                                    </div> <h5 className="mb-2 fontWeight-500 text-center">Technical Implementation  </h5>

                                    <p className="text-justify text-grey-500 text-center">Integrate your AR/VR/XR game seamlessly across multiple platforms that ensure strong compatibility and optimized performance. Additionally incorporate advanced technologies like AI & Spatial computing to enhance immersion & gameplay.</p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                    </Row>
                    <Row className="mt-4 mb-3">
                        <Col sm={12} md={4} lg={4} className='mb-3 position-relative'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="d-flex justify-content-center p-3">
                                        <img src={service4} className="img-fluid serviceIcon" alt="" />
                                    </div>  <h5 className="mb-2 fontWeight-500 text-center">UX & UI for Game</h5>

                                    <p className="text-justify text-grey-500 text-center">Let your game development partner Futurristic design perfect user experience & interface for your AR/VR/XR game. Add intuitive navigation, visually appealing interfaces, and immersive interactions for your gamers.</p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        <Col sm={12} md={4} lg={4} className='mb-3 position-relative'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="d-flex justify-content-center p-3">
                                        <img src={service5} className="img-fluid serviceIcon" alt="" />
                                    </div> <h5 className="mb-2 fontWeight-500 text-center">Testing and Quality Assurance  </h5>

                                    <p className="text-justify text-grey-500">Test your game from all corners to ensure quality delivery and seamless performance across diverse AR/VR/XR platforms. Optimize performance to guarantee an immersive and glitch-free gaming experience.</p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        <Col sm={12} md={4} lg={4} className='mb-3 position-relative'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="d-flex justify-content-center p-3">
                                        <img src={service6} className="img-fluid serviceIcon" alt="" />
                                    </div> <h5 className="mb-2 fontWeight-500 text-center">Support and Maintenance  </h5>

                                    <p className="text-justify text-grey-500">With Futurristic’s tech gurus, get the post-launch support & maintenance services necessary to ensure the ongoing functionality, optimization, and updates of your interactive AR/VR/XR games that enhance longevity & user satisfaction</p>
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
