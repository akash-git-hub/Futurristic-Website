import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const MobileAppTool = () => {
    return (
        <>
            <div className="IntractiveTools my-5">
                <Container>
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
                            <path d="M224,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H32A16,16,0,0,0,16,80V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM224,80v32H192v-8a8,8,0,0,0-16,0v8H80v-8a8,8,0,0,0-16,0v8H32V80Zm0,112H32V128H64v8a8,8,0,0,0,16,0v-8h96v8a8,8,0,0,0,16,0v-8h32v64Z"></path>
                        </svg>{' '}
                        Intractive Tools
                    </h5>
                    <Row>
                        <Col  lg={2} sm={12} className='mb-3'>
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
                        <Col  lg={2} sm={12} className='mb-3'>
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
                        <Col  lg={2} sm={12} className='mb-3'>
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
                        <Col  lg={2} sm={12} className='mb-3'>
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
                        <Col  lg={2} sm={12} className='mb-3'>
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
                        <Col  lg={2} sm={12} className='mb-3'>
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
                        <Col  lg={2} sm={12} className='mb-3'>
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
                        <Col  lg={2} sm={12} className='mb-3'>
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
