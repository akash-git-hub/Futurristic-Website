import React from 'react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { FaUnity } from 'react-icons/fa'
import { GiVirtualMarker } from "react-icons/gi";
import { SiLegacygames } from "react-icons/si";

const HowWeDoIt = () => {
    return (
        <>
            <div className="HowWeDoIt">
                <img src="https://www.spatial.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgame-collage.7c1e8350.webp&w=3840&q=75" className='DoItBG' alt="" />
                <div className="HowTextContent">
                    <Container>
                        <h1 className='text-center mt-3 mb-5 fontWeight-800'>Services Offered</h1>
                        <Row>
                            <Col md={4} sm={12}>
                                <div className="Part 01">
                                    <Stack direction='vertical' gap={2}>
                                        <FaUnity />
                                        <h2>Creator Toolkit</h2>
                                        <p>Supercharge Unity creations with our tools and templates. Unlock a world of possibilities for your game development journey.</p>

                                    </Stack>
                                </div>
                            </Col>
                            <Col md={4} sm={12}>
                                <div className="Part 02">
                                    <Stack direction='vertical' gap={2}>
                                    <GiVirtualMarker />
                                        <h2>Virtual Economy</h2>
                                        <p>Sell digital goods with top-tier revenue share. Start monetizing your content and building a sustainable online business today!</p>
                                    </Stack>
                                </div>
                            </Col>
                            <Col md={4} sm={12}>
                                <div className="Part 03">
                                    <Stack direction='vertical' gap={2}>
                                    <SiLegacygames />
                                        <h2>Multi-Platform</h2>
                                        <p>Publish games everywhere across web, mobile, and VR. Reach a global audience and engage players on multiple devices.</p>
                                    </Stack>
                                </div>
                            </Col>
                        </Row>
                        <Button className='rounded-5 mt-4 ContactBtn' variant='light' type='submit'>Learn More</Button>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default HowWeDoIt
