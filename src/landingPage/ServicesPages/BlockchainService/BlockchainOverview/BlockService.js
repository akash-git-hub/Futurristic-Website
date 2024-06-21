import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const BlockService = () => {
    return (
        <>
            <div className="OfferedServicesMeta">
                <Container>
                    <div className="justify-content-center mb-4 row">
                        <div className="text-center col">
                            <h5 className="mt-3 mb-3" style={{ textAlign: 'left' }}>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 256 256"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ fontSize: '2rem' }}
                                >
                                    <path
                                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm73.23,146.26c-5.63,9-14.33,13.74-25.16,13.74-20.73,0-34.81-25.31-49.72-52.11C115.47,112.33,101.93,88,90.61,88,78.18,88,64,116.88,64,142.21c0,8.26,1.5,15,4.34,19.56C71,166,74.68,168,79.93,168c6.08,0,13.52-7,22.74-21.51a8,8,0,0,1,13.49,8.59C99.84,180.71,88.22,184,79.93,184c-10.83,0-19.53-4.75-25.16-13.74-4.43-7.08-6.77-16.78-6.77-28A103.13,103.13,0,0,1,59,97.06C67.34,80.9,78.57,72,90.61,72c20.73,0,34.81,25.31,49.72,52.11C151.21,143.66,164.75,168,176.07,168c5.25,0,8.93-2,11.59-6.23,2.84-4.53,4.34-11.3,4.34-19.56C192,116.88,177.82,88,165.39,88c-3.4,0-7.35,2.31-11.74,6.88a8,8,0,1,1-11.54-11.09C149.74,75.86,157.35,72,165.39,72c12,0,23.27,8.9,31.62,25.06a103.13,103.13,0,0,1,11,45.15C208,153.48,205.66,163.18,201.23,170.26Z"
                                    ></path>
                                </svg>
                                Blockchain Integration and Solutions
                            </h5>
                        </div>
                    </div>
                    <Row>
                        {/* First Column */}
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/01-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Blockchain Strategy Consulting</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Providing expert advice on integrating blockchain technology into your business model for enhanced efficiency and transparency.</p>
                                </div>
                            </div>
                        </Col>
                        {/* Second Column */}
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/02-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Custom Blockchain Development</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Developing tailor-made blockchain solutions to meet specific business needs, ensuring compatibility with existing systems.</p>
                                </div>
                            </div>
                        </Col>
                        {/* Third Column */}
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/03-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Smart Contract Development and Implementation</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Creating and implementing smart contracts to automate and secure business transactions.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4 mb-3">
                        {/* Fourth Column */}
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/04-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Blockchain Security Solutions</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Enhancing data security with robust blockchain-based solutions, protecting against fraud and cyber threats.</p>
                                </div>
                            </div>
                        </Col>
                        {/* Fifth Column */}
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/05-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Decentralized Application (dApp) Development</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Building decentralized applications for various use cases, offering improved reliability and user experience.</p>
                                </div>
                            </div>
                        </Col>
                        {/* Sixth Column */}
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/06-BlockchainIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-0">Blockchain Data Analytics</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Offering advanced analytics services to understand blockchain transaction patterns and gain insights for business decisions.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
