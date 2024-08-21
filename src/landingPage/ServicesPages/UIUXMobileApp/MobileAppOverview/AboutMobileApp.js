import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AboutMobileApp = () => {
    return (
        <>
            <div className="OwnMeta my-5">
                <Container>
                    <div className="AboutUs02">
                        <Row className="justify-content-center align-items-center">
                            <Col md={8} sm={12}>
                                <div className="AboutUsText">
                                    <div className="text-left vstack gap-3">
                                        <h1 className="text-center fontWeight-800">Dealing with Unresponsive App, Website, Enterprise Platform?                                        </h1>
                                        <h4 className="text-center">Get Mobile Apps, Website, & Enterprise Solution at Your Fingertips</h4>
                                        <p className="text-center fontSize-24 fontWeight-500 " style={{ color: 'rgb(134, 134, 139)' }}>
                                        Having a sluggish app/website/enterprise platform may stifle business growth, frustrate your users, and undermine efficiency. Optimizing digital touchpoints like mobile, web, or enterprise ensure seamless performance and opens up new opportunities for innovation. And to get an edge over your competitors, integrating cryptocurrency by leveraging <Link to='/blockchain-integration-and-solutions' target="_blank">custom blockchain integration</Link> services from us.
                                        </p>
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
