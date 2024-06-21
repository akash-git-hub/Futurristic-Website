import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const AboutAR = () => {
    return (
        <>
            <div className="OwnMeta my-5">
                <Container>
                    <div className="AboutUs02">
                        <Row className="justify-content-center align-items-center">
                            <Col md={8} sm={12}>
                                <div className="AboutUsText">
                                    <div className="text-left vstack gap-3">
                                        <h1 className="text-center fontWeight-800">Create Web AR Experience for your product and brands across various domains.</h1>
                                        <h4 className="text-center">we can help you make it a reality in no time.</h4>
                                        <p className="text-center fontSize-24 fontWeight-500" style={{ color: 'rgb(134, 134, 139)' }}>
                                            "Our experts will implemented Web AR solutions for your product to achieve your business objectives.We work on challeges and come up with the solutions which will increase the user engagement, sales & brand loyality."
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
