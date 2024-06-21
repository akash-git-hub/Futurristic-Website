import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const ARVRservice = () => {
    return (
        <>
            <div className="OfferedServicesMeta">
                <Container>
                    <Row className="justify-content-center mb-4">
                        <Col>
                            <h5 className="mt-3 mb-3" style={{ textAlign: 'left' }}>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ fontSize: '2rem' }}
                                >
                                    <title></title>
                                    <path d="M6.816 15.126l4.703 2.715v-5.433L6.814 9.695v5.432zm-2.025 1.168l6.73 3.882v3.82L1.481 18.206V6.616l3.31 1.91v7.769zM12 6.145L7.298 8.863 12 11.579l4.704-2.717L12 6.146zm0-2.332l5.659 3.274 3.31-1.91L12 0 1.975 5.79 5.28 7.695zm7.207 12.48v-3.947l-2.023 1.167v1.614l-4.703 2.715v.005-5.436L22.518 6.62v11.587L12.48 24v-3.817l6.727-3.887z"></path>
                                </svg>{' '}
                                AR VR Training & Educational Platform
                            </h5>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/01-Traning.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Immersive Learning Experience</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">AR and VR technologies create a fully immersive educational environment, enhancing the learning experience by making it more engaging and interactive. This can lead to improved comprehension and retention of information.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/02-Traning.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Safe Training Environment</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Particularly useful for high-risk industries, AR/VR provides a safe space for training where learners can practice and make mistakes without real-world consequences, leading to better preparedness in actual scenarios.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/03-Traning.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Cost-Effective</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Reduces the need for physical resources, travel, and on-site training facilities. AR/VR can simulate various scenarios and environments, saving costs on logistics and materials.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4 mb-3">
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/04-Traning.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Scalability and Accessibility</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">AR/VR platforms can be scaled to accommodate a large number of users simultaneously, making training and education more accessible to a wider audience, regardless of geographical location.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/05-Traning.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Platform Design and Development</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Building user-friendly AR/VR platforms that are easy to navigate, ensuring a seamless learning experience for users of all skill levels.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/06-Traning.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-0">Real-Time Analytics and Feedback</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Providing tools for real-time performance tracking and feedback, enabling educators and trainers to monitor progress and adjust teaching strategies accordingly</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
