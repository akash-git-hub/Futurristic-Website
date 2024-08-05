import React from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Service = () => {
    return (
        <>
            <div className="ServiceContainer mt-5 mb-5">
                <div className="ServiceContent mt-4 mb-4">
                    <Container>
                        <h1 className='text-center mt-3 fontWeight-800'>Take A Glimpse At Our Services</h1>
                        <h5 className='mb-5'>Explore Futurristic's array of innovative services designed to propel your vision forward.</h5>
                        <Row>
                            <Col md={4} sm={12}>
                                <div className="Part 01">
                                    <Stack direction='vertical' gap={2}>
                                        <img src="https://futurristic.s3.amazonaws.com/image/icon/01-Service.png" alt="" class="img-fluid serviceIcon mx-auto" />
                                        {/* <img src="./image/icon/01-Service.png" alt="" class="img-fluid serviceIcon mx-auto" /> */}
                                        <h4>Metaverse End to End <br/>Solution</h4>
                                        <p className='fontSize-16 text-grey-500'>Supercharge Unity creations with Futurristic expert team, tools, and templates. Open doors to endless possibilities in your game development odyssey.</p>
                                        <Link to='/metaverse-end-to-end-solutions' target='_blank'>
                                            <Button className='rounded-5 mt-4 ContactBtn mobile-100' variant='dark' type='submit'>Learn More</Button>
                                        </Link>
                                    </Stack>
                                </div>
                            </Col>
                            <Col md={4} sm={12}>
                                <div className="Part 02">
                                    <Stack direction='vertical' gap={2}>
                                        <img src="https://futurristic.s3.amazonaws.com/image/icon/02-Service.png" alt="" class="img-fluid serviceIcon mx-auto" />
                                        {/* <img src="./image/icon/02-Service.png" alt="" class="img-fluid serviceIcon mx-auto" /> */}
                                        <h4>Web AR-Based Marketing<br/> Solutions</h4>
                                        <p className='fontSize-16 text-grey-500'>Sell digital goods with top-tier revenue share. Start monetizing your content and building a sustainable online business today!</p>
                                        <Link to='/web-ar-based-marketing-solutions' target='_blank'>
                                            <Button className='rounded-5 mt-5 ContactBtn mobile-100' variant='dark' type='submit'>Learn More</Button>
                                        </Link>
                                    </Stack>
                                </div>
                            </Col>
                            <Col md={4} sm={12}>
                                <div className="Part 03">
                                    <Stack direction='vertical' gap={2}>
                                        <img src="https://futurristic.s3.amazonaws.com/image/icon/03-Service.png" alt="" class="img-fluid serviceIcon mx-auto" />
                                        {/* <img src="./image/icon/03-Service.png" alt="" class="img-fluid serviceIcon mx-auto" /> */}
                                        <h4>Blockchain Integration and<br/> Solutions</h4>
                                        <p className='fontSize-16 text-grey-500'>Explore boundless opportunities through decentralized solutions. Integrate blockchain into your business for heightened security & efficiency gains.</p>
                                        <Link to='/blockchain-integration-and-solutions' target='_blank'>
                                            <Button className='rounded-5 mt-4 ContactBtn mobile-100' variant='dark' type='submit'>Learn More</Button>
                                        </Link>
                                    </Stack>
                                </div>
                            </Col>
                        </Row>

                        <Row className='mt-4'>
                            <Col md={4} sm={12}>
                                <div className="Part 04">
                                    <Stack direction='vertical' gap={2}>
                                        <img src="https://futurristic.s3.amazonaws.com/image/icon/04-Service.png" alt="" class="img-fluid serviceIcon mx-auto" />
                                        {/* <img src="./image/icon/04-Service.png" alt="" class="img-fluid serviceIcon mx-auto" /> */}
                                        <h4>AR VR Training & Educational Platform</h4>
                                        <p className='fontSize-16 text-grey-500'>Turn your ideas into reality with an AR/VR training & educational platform.Craft immersive experiences for effective learning in the AR/VR domain.</p>
                                        <Link to='/ar-vr-training-&-educational-platform' target='_blank'>
                                            <Button className='rounded-5 mt-4 ContactBtn mobile-100' variant='dark' type='submit'>Learn More</Button>
                                        </Link>
                                    </Stack>
                                </div>
                            </Col>
                            <Col md={4} sm={12}>
                                <div className="Part 05">
                                    <Stack direction='vertical' gap={2}>
                                        <img src="https://futurristic.s3.amazonaws.com/image/icon/05-Service.png" alt="" class="img-fluid serviceIcon mx-auto" />
                                        {/* <img src="./image/icon/05-Service.png" alt="" class="img-fluid serviceIcon mx-auto" /> */}
                                        <h4>Interactive AR/VR/XR Game Development</h4>
                                        <p className='fontSize-16 text-grey-500'>Create and publish your interactive AR/VR/XR game & apps experience across all platforms, ensuring a global audience reach & engagement.</p>
                                        <Link to='/interactive-ar-vr-xr-game-development' target='_blank'>
                                            <Button className='rounded-5 mt-5 ContactBtn mobile-100' variant='dark' type='submit'>Learn More</Button>
                                        </Link>
                                    </Stack>
                                </div>
                            </Col>
                            <Col md={4} sm={12}>
                                <div className="Part 06">
                                    <Stack direction='vertical' gap={2}>
                                        <img src="https://futurristic.s3.amazonaws.com/image/icon/06-Service.png" alt="" class="img-fluid serviceIcon mx-auto" />
                                        {/* <img src="./image/icon/06-Service.png" alt="" class="img-fluid serviceIcon mx-auto" /> */}
                                        <h4>Mobile Web & Enterprise Development</h4>
                                        <p className='fontSize-16 text-grey-500'>Forge powerful mobile web and enterprise solutions. Reach diverse audiences across devices to enhance business functionality & scalability. </p>
                                        <Link to='/mobile-web-&-enterprise-development' target='_blank'>
                                            <Button className='rounded-5 mt-4 ContactBtn mobile-100' variant='dark' type='submit'>Learn More</Button>
                                        </Link>
                                    </Stack>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        </>
    )
}

export default Service
