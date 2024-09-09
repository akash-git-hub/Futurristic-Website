import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                                        <h1 className="text-center fontWeight-800">Still Paying Traditional Fees? Time to Build Your Own Cryptocurrency Platform!</h1>
                                        <h4 className="text-center">Create Your Own Cryptocurrency Platform</h4>
                                        <p className="text-center fontSize-24 fontWeight-500 " style={{ color: 'rgb(134, 134, 139)' }}>
                                        Why stick to conventional methods when you can have your own crypto platform? Futurristic’s seasoned team provides custom blockchain solutions, smart contracts, cryptocurrency development, wallets, and DeFi solutions.By pushing the boundaries of encryption, key generation, and network participation to leapfrog the crypto game and its competition. Why stop at cryptocurrency? Leverage <Link to='/metaverse-end-to-end-solutions' target='_blank'>Metaverse services & solutions</Link> and blockchain integration together to tackle today's challenges and redefine tomorrow’s standards.
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
