import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const Banner = () => {
    return (
        <>
            <Container fluid>
                <div className="BannerSections">
                    <Row>
                        <Col className='p-0'>
                            <div className="imageBox">
                                <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/MetaverseService02.png" alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}
