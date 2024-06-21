import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const AboutBlock = () => {
    return (
        <>
            <div className="OwnMeta my-5">
                <Container>
                    <div className="AboutUs02">
                        <Row className="justify-content-center align-items-center">
                            <Col md={8} sm={12}>
                                <div className="AboutUsText">
                                    <div className="text-left vstack gap-3">
                                        <h1 className="text-center fontWeight-800">Create Your Own Cryptocurrency Platform.</h1>
                                        <h4 className="text-center">we can help you make it a reality in no time.</h4>
                                        <p className="text-center fontSize-24 fontWeight-500" style={{ color: 'rgb(134, 134, 139)' }}>
                                        "We have an experienced team working on custom blockchain solution, Smart contract, Cryptocurrency, Wallet and DeFi Solutions. We believed in the potential of cryptocurrency and are excited to continue pushing forward the state of the art through encryption, leading key generation, and network participation."
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
