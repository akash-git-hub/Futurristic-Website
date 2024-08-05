import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const MobileAppTool = () => {
    return (
        <>
            <div className="IntractiveTools my-5">
                <Container>
                    <h1 className="mt-3 mb-3" style={{ textAlign: 'center' }}>
                        Discover Our Dazzling Portfolio
                    </h1>
                    <p>Here are some Futurristic's standout projects, exemplifying innovation and excellence in every endeavor.</p>
                    <Row>
                        <Col lg={2} sm={12} className='mb-3'>
                            <div className="ToolContent">
                                <div className="vstack gap-2" style={{ alignItems: 'center' }}>
                                    <img
                                        src="https://futurristic.s3.amazonaws.com/image/video/Icons/Tool01.png"
                                        className="img-fluid serviceIcon"
                                        alt=""
                                    />
                                    <h5>Networking</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} sm={12} className='mb-3'>
                            <div className="ToolContent">
                                <div className="vstack gap-2" style={{ alignItems: 'center' }}>
                                    <img
                                        src="https://futurristic.s3.amazonaws.com/image/video/Icons/Tool02.png"
                                        className="img-fluid serviceIcon"
                                        alt=""
                                    />
                                    <h5>Livestream</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} sm={12} className='mb-3'>
                            <div className="ToolContent">
                                <div className="vstack gap-2" style={{ alignItems: 'center' }}>
                                    <img
                                        src="https://futurristic.s3.amazonaws.com/image/video/Icons/Tool03.png"
                                        className="img-fluid serviceIcon"
                                        alt=""
                                    />
                                    <h5>Meeting Software</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} sm={12} className='mb-3'>
                            <div className="ToolContent">
                                <div className="vstack gap-2" style={{ alignItems: 'center' }}>
                                    <img
                                        src="https://futurristic.s3.amazonaws.com/image/video/Icons/Tool04.png"
                                        className="img-fluid serviceIcon"
                                        alt=""
                                    />
                                    <h5>Smart Contract</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} sm={12} className='mb-3'>
                            <div className="ToolContent">
                                <div className="vstack gap-2" style={{ alignItems: 'center' }}>
                                    <img
                                        src="https://futurristic.s3.amazonaws.com/image/video/Icons/Tool05.png"
                                        className="img-fluid serviceIcon"
                                        alt=""
                                    />
                                    <h5>Share Content</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} sm={12} className='mb-3'>
                            <div className="ToolContent">
                                <div className="vstack gap-2" style={{ alignItems: 'center' }}>
                                    <img
                                        src="https://futurristic.s3.amazonaws.com/image/video/Icons/Tool06.png"
                                        className="img-fluid serviceIcon"
                                        alt=""
                                    />
                                    <h5>Gaming</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} sm={12} className='mb-3'>
                            <div className="ToolContent">
                                <div className="vstack gap-2" style={{ alignItems: 'center' }}>
                                    <img
                                        src="https://futurristic.s3.amazonaws.com/image/video/Icons/Tool07.png"
                                        className="img-fluid serviceIcon"
                                        alt=""
                                    />
                                    <h5>NFT</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} sm={12} className='mb-3'>
                            <div className="ToolContent">
                                <div className="vstack gap-2" style={{ alignItems: 'center' }}>
                                    <img
                                        src="https://futurristic.s3.amazonaws.com/image/video/Icons/Tool08.png"
                                        className="img-fluid serviceIcon"
                                        alt=""
                                    />
                                    <h5>AI Assistants</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
