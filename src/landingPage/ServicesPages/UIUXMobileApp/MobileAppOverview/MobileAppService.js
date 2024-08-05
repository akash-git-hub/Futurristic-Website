import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MobileAppservice = () => {
    return (
        <>
            <div className="OfferedServicesMeta">
                <Container>
                    <div className="justify-content-center mb-4 row">
                        <div className="text-center col">
                            <h1 className="mt-3 mb-1 fontWeight-800" style={{ textAlign: 'center' }}>
                                Mobile, Web & Enterprise Development Services
                            </h1>
                            <p>Dive into the various mobile web & enterprise development services and get started with the perfect, ideal solutions your business needs. </p>
                        </div>
                    </div>
                    <Row className="mb-3">
                        <Col lg={4} sm={12} className='mb-3'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img
                                            src="https://futurristic.s3.amazonaws.com/image/video/Icons/01-WebARIcon.png"
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                        <h5 className="mb-2 fontWeight-500">
                                            Consultation & Strategy
                                        </h5>
                                    </div>
                                    <p className="text-justify text-grey-500">
                                        Take expert guidance from Futurristic’s adepts in <Link to="/">mobile web & enterprise development services</Link> with years of expertise & experience. Consult regarding mobile web & enterprise dev-solution, enterprise mobility solutions, and data migration & integration.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} className='mb-3'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img
                                            src="https://futurristic.s3.amazonaws.com/image/video/Icons/02-WebARIcon.png"
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                        <h5 className="mb-2 fontWeight-500">Development & Design</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">
                                        Build your custom mobile app with Futurristic, encompassing enterprise web application development, responsive web design, cross-platform mobile development, and progressive web app (PWA) solutions to meet all your business needs.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} className='mb-3'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img
                                            src="https://futurristic.s3.amazonaws.com/image/video/Icons/03-WebARIcon.png"
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                        <h5 className="mb-2 fontWeight-500">Integration & Backend Services</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">
                                        From Backend & API Development to Cloud Integration Services and Enterprise System Integration, make your business model/platform competitive with such integrations. Add advanced features and functionalities with ease and efficiency.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} className='mb-3'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img
                                            src="https://futurristic.s3.amazonaws.com/image/video/Icons/04-WebARIcon.png"
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                        <h5 className="mb-2 fontWeight-500">User Experience & Interface</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">
                                        Design your mobile, web, or entrepreneurial platform with intuitive navigation, compelling, and responsive design. Ensure quick load times, usability by following WCAG guidelines, scalability, and seamless user interaction altogether
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} className='mb-3'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img
                                            src="https://futurristic.s3.amazonaws.com/image/video/Icons/05-WebARIcon.png"
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                        <h5 className="mb-2 fontWeight-500">Testing, Maintenance, & Security</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">
                                        Ensure robust performance complete, Mobile application testing & QA, Application maintenance & support, Mobile security solutions, and Performance optimization services for seamless, secure, and scalable operation.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} className='mb-3'>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img
                                            src="https://futurristic.s3.amazonaws.com/image/video/Icons/06-WebARIcon.png"
                                            className="img-fluid serviceIcon"
                                            alt=""
                                        />
                                        <h5 className="mb-2 fontWeight-500">Advanced Solutions & Support</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">
                                        Get advanced solutions & support to strengthen your business. Services include E-commerce development, Business Intelligence & Analytics Solutions, DevOps & Continuous Integration/Continuous Deployment (CI/CD), and AR/VR integration.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
