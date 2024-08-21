import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AboutMeta = () => {
    return (
        <>
            <div className="OwnMeta my-5">
                <Container>
                    <div className="AboutUs02">
                        <Row className="justify-content-center align-items-center">
                            <Col md={8} sm={12}>
                                <div className="AboutUsText">
                                    <div className="text-left vstack gap-3">
                                        <h1 className="text-center fontWeight-800">Still Lost in the Metaverse Maze? Let's Fix That!
                                        </h1>
                                        <h4 className="text-center">we can help you make it a reality in no time.</h4>
                                        <p className="text-center fontSize-24 fontWeight-500" style={{ color: 'rgb(134, 134, 139)' }}>
                                        Seeking an innovative team that can help you create Metaverse with complete customization at an affordable price? 
                                        You are at the right place. Let us handle your Metaverse-related worries and develop a tailored-made virtual 
                                        experience that aligns perfectly with your vision, engages your audience, and drives your business success.
                                         Help your users shop, work, play and hang out together in real time effectively and easily. You can also try
                                          Metaverse for games by leveraging <Link to='/interactive-ar-vr-xr-game-development' target='blank'>Interactive AR/VR/XR game development</Link> services from us.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}
