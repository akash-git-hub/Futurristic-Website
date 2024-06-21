import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const BannerCondition = () => {
  return (
    <>
     <Container fluid>
                <div className="BannerSections">
                    <Row>
                        <Col className='p-0'>
                            <div className="imageBox">
                                <img src="https://futurristic.s3.amazonaws.com/image/video/term&condition.png" alt="" className="img-fluid" />
                                {/* <img src="image/video/term&condition.png" alt="" className="img-fluid" /> */}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
    </>
  )
}
