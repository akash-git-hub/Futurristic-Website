import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const service1 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/WebAR-service01.png'
const service2 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/WebAR-service02.png'
const service3 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/WebAR-service03.png'
const service4 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/WebAR-service04.png'
const service5 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/WebAR-service05.png'
const service6 = 'https://futurristic.s3.amazonaws.com/image/video/Icons/WebAR-service06.png'




export const ServiceAR = () => {
    return (
        <>
            <div className="OfferedServicesMeta">
                <Container>
                    <div className="justify-content-center mb-4 row">
                        <div className="text-center col">
                            <h1 className="mt-3 mb-1 fontWeight-800">
                                Web AR-Based Marketing Solutions
                            </h1>
                            <p className="text-center text-grey-500 fontSize-20 ">
                                Give a Boost to Your Business with Futurristic’s <Link to='/' target='_blank'>web based augmented reality</Link> services and solutions, with innovative and immersive augmented reality experiences.
                            </p>
                        </div>
                    </div>
                    <Row className="mb-3">
                        <Col lg={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className='d-flex justify-content-center p-3'>
                                        <img
                                            src={service1}
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="mb-2 text-justify fontWeight-800 text-center">
                                        Interactive Campaign Creation
                                    </h5>

                                    <p className="text-justify text-grey-500 p-3">
                                        Create stunning interactive campaigns that bring websites to life with the help of Futurristic. Integrate your brand values and data to personalize user experiences.
                                    </p>

                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>

                        <Col lg={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">

                                    <div className='d-flex justify-content-center p-3'>
                                        <img
                                            src={service2}
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="mb-2 text-justify fontWeight-800 text-center">Custom AR Development</h5>

                                    <p className="text-justify text-grey-500 p-3">
                                        Crafting unique, bespoke WebAR experiences that seamlessly blend with your brand message, increase customer engagement and leave a lasting impression like never before.
                                    </p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        <Col lg={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">

                                    <div className='d-flex justify-content-center p-3'>
                                        <img
                                            src={service3}
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="mb-2 text-justify fontWeight-800 text-center">Augmented Reality Advertising</h5>

                                    <p className="text-justify text-grey-500 p-3">
                                        Cut through the digital clutter with Augmented Reality Advertising. Leverage AR technology to create innovative advertisements that leap off the screen.
                                    </p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                    </Row>
                    <Row className="mt-4 mb-3">
                        <Col lg={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">

                                    <div className='d-flex justify-content-center p-3'>
                                        <img
                                            src={service4}
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="mb-2 text-justify fontWeight-800 text-center">Social Media AR Integration</h5>

                                    <p className="text-justify text-grey-500 p-3">
                                        Bring products to life for virtual try-ons, or stimulate engagement with gamification filters by integrating AR features into social media platforms.
                                    </p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        <Col lg={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">

                                    <div className='d-flex justify-content-center p-3'>
                                        <img
                                            src={service5}
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="mb-2 text-justify fontWeight-800 text-center">Analytics and Performance Tracking</h5>

                                    <p className="text-justify text-grey-500 p-3">
                                        Gain valuable insights into customer engagement & campaign performance to make informed marketing decisions that optimize strategies & drive results.
                                    </p>
                                </div>
                            </div>
                            <div className='BenefitContentMetashadow'></div>
                        </Col>
                        <Col lg={4} sm={12} className='mb-3 animationcol'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">

                                    <div className='d-flex justify-content-center p-3'>
                                        <img
                                            src={service6}
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="mb-2 text-justify fontWeight-800 text-center">Technical Support and Training</h5>

                                    <p className="text-justify text-grey-500 p-3">
                                        Have access to expert guidance & training on the seamless AR technology deployment in marketing allowing your team to gain the skills needed to use it effectively.
                                    </p>
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
