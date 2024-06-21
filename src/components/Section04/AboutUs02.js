import React from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'

const AboutUss = () => {
    return (
        <>
            <Container>
                <div className="AboutUs">
                    <Row style={{
                        alignItems: 'center'
                    }}>
                        <Col md={6} sm={12}>
                            <div className="AboutUsText">
                                <Stack direction='vertical' gap={1} className='text-left'>
                                    <h1>Free Online Games</h1>
                                    <p>Spatial is the home for the most fun collection of free online games. Play our beautifully crafted 3D games on desktop, mobile, tablet, and even in VR. Just click to jump straight into cool games with friends from all around the world. No download required.</p>
                                    <Button className='rounded-5' type={'submit'} variant='dark'>Learn More</Button>
                                </Stack>
                            </div>
                        </Col>
                        <Col md={6} sm={12}  className='order-sm-first'>
                            <video className='img-fluid rounded-5' autoPlay loop muted>
                                <source src='https://dd2cgqlmnwvp5.cloudfront.net/about/cp-spatial-gaming.mp4' type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>

                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default AboutUss
