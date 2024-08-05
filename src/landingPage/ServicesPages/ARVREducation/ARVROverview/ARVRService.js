import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ARVRservice = () => {
    return (
        <>
            <div className="OfferedServicesMeta">
                <Container>
                    <Row className="justify-content-center mb-4">
                        <Col>
                            <h1 className="mt-3 mb-3 fontWeight-800">
                                AR VR Training & Educational Platform Services
                            </h1>
                            <p>Find comprehensive, professional AR VR solutions tailored for seamless business transformation, improvising training & educational experiences effectively.</p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/01-Training.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">AR/VR Consultation Services</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Get a free consultation from the <Link to='/'>expert AR/VR design and development</Link> team to shape your immersive learning solutions effectively. Explore and unlock possibilities to enhance your training and education initiative.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/02-Training.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Custom Content Development</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Captivate learners and enhance knowledge retention by developing a custom content without leaving a single unturned. Get your bespoke AR/VR solutions with interactive simulations & immersive virtual environments.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/03-Training.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Platform Development</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Build your own AR/VR training & educational platform with scalable backend infrastructure and user friendly interface. Set the seal on seamless navigation & optimal performance for educators and learners alike. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4 mb-3">
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/04-Training.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Integration Services</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Integrate AR/VR solutions with any of your existing LMS or other corporate training platforms effortlessly. Ensure smooth data exchange,unified user experience and enhance functionalities across integrated systems.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/05-Training.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">User Experience (UX) Design</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Design and develop an intuitive & immersive interface optimized for AR/VR interactions with us. Enhance user engagement, ease of navigation, and overall satisfaction to deliver a solid learning experience. </p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/06-Training.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-0">Analytics and Performance Tracking</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Easily implement advanced analytics tools to monitor learner engagement, progress, & performance within your AR/VR environment. Optimize training strategies, measure effectiveness, & drive continuous improvement.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
