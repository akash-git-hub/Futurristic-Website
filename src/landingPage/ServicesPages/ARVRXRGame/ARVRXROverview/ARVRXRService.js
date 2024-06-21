import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const ARVRXRservice = () => {
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
                                    <path d="M22.1987 18.498l-9.7699 5.5022v-4.2855l6.0872-3.3338 3.6826 2.117zm.6683-.6026V6.3884l-3.5752 2.0544v7.396zm-21.0657.6026l9.7699 5.5022v-4.2855L5.484 16.3809l-3.6826 2.117zm-.6683-.6026V6.3884l3.5751 2.0544v7.396zm.4183-12.2515l10.0199-5.644v4.1434L5.152 7.6586l-.0489.028zm20.8975 0l-10.02-5.644v4.1434l6.4192 3.5154.0489.028 3.5518-2.0427zm-10.8775 13.096l-6.0056-3.2873V8.9384l6.0054 3.4525v6.349zm.8575 0l6.0053-3.2873V8.9384l-6.0053 3.4525zM5.9724 8.1845l6.0287-3.3015L18.03 8.1845l-6.0288 3.4665z"></path>
                                </svg>{' '}
                                Interactive AR/VR/XR Game development
                            </h5>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/01-GameIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Custom Game Design and Development</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Tailoring game concepts, designs, and mechanics to meet specific client needs and objectives, ensuring a unique and relevant gaming experience.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/02-GameIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Interactive Storytelling</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Creating engaging narratives and scenarios that not only entertain but also convey brand messages or educational content effectively.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/03-GameIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 text-justify fontWeight-500">Multi-platform Integration</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Ensuring games are compatible across various devices and platforms, including mobile devices, VR headsets, and desktops, for maximum accessibility.</p>
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
                                        <h5 className="mb-2 fontWeight-500">(UX) and (UI) Design</h5>
                                    </div>
                                    <p className="text-justify text-grey-500">Crafting intuitive and user-friendly interfaces and experiences, vital for keeping players engaged and ensuring ease of use.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="BenefitContentMeta">
                                <div className="vstack gap-1">
                                    <div className="hstack gap-1">
                                        <img src="https://futurristic.s3.amazonaws.com/image/video/Icons/05-GameIcon.png" className="img-fluid serviceIcon" alt="" />
                                        <h5 className="mb-2 fontWeight-500">Post-Launch Support and Analytics</h5>
                                    </div>
                                    <p className="text-justify text-grey-500"> Providing ongoing maintenance, updates, and support post-launch, along with detailed analytics on game performance and user engagement.</p>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
