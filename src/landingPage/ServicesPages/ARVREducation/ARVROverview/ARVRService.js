import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const service1 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-service01.png'
const service2 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-service02.png'
const service3 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-service03.png'
const service4 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-service04.png'
const service5 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-service05.png'
const service6 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/ARVRTraining-service06.png'

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
                            <p className="text-center text-grey-500 fontSize-20">Find comprehensive, professional AR VR solutions tailored for seamless business transformation, improvising training & educational experiences effectively.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={4} lg={4} className='mb-3 position-relative'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="d-flex justify-content-center p-3">
                                         <img src={service1} className="img-fluid serviceIcon" alt="" />
                                    </div><h5 className="mb-2 text-justify fontWeight-800 text-center">AR/VR Consultation Services</h5>
                                    <p className="text-justify text-grey-500">Get a free consultation from the <Link to='/'>expert AR/VR design and development</Link> team to shape your immersive learning solutions effectively. Explore and unlock possibilities to enhance your training and education initiative.</p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        <Col sm={12} md={4} lg={4} className='mb-3 position-relative'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="d-flex justify-content-center p-3">
                                         <img src={service2} className="img-fluid serviceIcon" alt="" />
                                    </div> <h5 className="mb-2 text-justify fontWeight-800 text-center">Custom Content Development</h5>
                                    <p className="text-justify text-grey-500">Captivate learners and enhance knowledge retention by developing a custom content without leaving a single stone unturned. Get your bespoke AR/VR solutions with interactive simulations & immersive virtual environments.</p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        <Col sm={12} md={4} lg={4} className='mb-3 position-relative'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="d-flex justify-content-center p-3">
                                        <img src={service3} className="img-fluid serviceIcon" alt="" />
                                    </div> <h5 className="mb-2 text-justify fontWeight-800 text-center">Platform Development</h5>

                                    <p className="text-justify text-grey-500">Build your own AR/VR training & educational platform with scalable backend infrastructure and user friendly interface. Set the seal on seamless navigation & optimal performance for educators and learners alike. </p>
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
                                    </div><h5 className="mb-2 text-justify fontWeight-800 text-center">Integration Services</h5>

                                    <p className="text-justify text-grey-500">Integrate AR/VR solutions with any of your existing LMS or other corporate training platforms effortlessly. Ensure smooth data exchange,unified user experience and enhance functionalities across integrated systems.</p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col >
                        <Col  sm={12} md={4} lg={4} className='mb-3 position-relative'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="d-flex justify-content-center p-3">
                                       <img src={service5} className="img-fluid serviceIcon" alt="" />
                                    </div><h5 className="mb-2 text-justify fontWeight-800 text-center">User Experience (UX) Design</h5>

                                    <p className="text-justify text-grey-500">Design and develop an intuitive & immersive interface optimized for AR/VR interactions with us. Enhance user engagement, ease of navigation, and overall satisfaction to deliver a solid learning experience. </p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        <Col sm={12} md={4} lg={4} className='mb-3 position-relative'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="d-flex justify-content-center p-3">
                                         <img src={service6} className="img-fluid serviceIcon" alt="" />
                                    </div> <h5 className="mb-2 text-justify fontWeight-800 text-center">Analytics and Performance Tracking</h5>

                                    <p className="text-justify text-grey-500">Easily implement advanced analytics tools to monitor learner engagement, progress, & performance within your AR/VR environment. Optimize training strategies, measure effectiveness, & drive continuous improvement.</p>
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
