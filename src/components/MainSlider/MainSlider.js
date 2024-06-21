import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Badge, Button, Stack } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const MainSlider = () => {
    const [index, setIndex] = useState(0);
    const [isClicked, setClicked] = useState(false);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleIconClick = () => {
        setClicked(!isClicked);
    };
    return (
        <>
            <Carousel activeindex={index} onSelect={handleSelect} controls={false}>
                <Carousel.Item>
                    <video className='img-fluid MainSliderVideo' autoPlay loop muted onEnded={() => setIndex(1)}>
                        <source src='https://futurristic.s3.amazonaws.com/image/video/Metaverse/four04.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <Carousel.Caption style={{
                        textAlign: 'left',
                        left: '6%'
                    }}>
                        <Stack direction='vertical' gap={2}>
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Metaverse/02-Metaverse02.png" className='img-fluid GameTitleImg' alt="videoGameName" />
                            <Stack direction='horizontal' gap={3} >
                                <Button type='submit' variant='light' className='rounded-5' style={{
                                    width: 'auto',
                                    padding: '10px 20px',
                                    fontWeight: 'bold'
                                }}>Explore</Button>
                            </Stack>
                        </Stack>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <video className='img-fluid' autoPlay loop muted onEnded={() => setIndex(2)}>
                        <source src='https://futurristic.s3.amazonaws.com/image/video/Game/F-Video05.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <Carousel.Caption style={{
                        textAlign: 'left',
                        left: '6%'
                    }}>
                        <Stack direction='vertical' gap={2}>
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Game/01-Gafala.png" className='img-fluid GameTitleImg' alt="videoGameName" />
                            <Stack direction='horizontal' gap={3} >
                                <Button type='submit' variant='light' className='rounded-5' style={{
                                    width: 'auto',
                                    padding: '10px 20px',
                                    fontWeight: 'bold'
                                }}>Explore</Button>
                            </Stack>
                        </Stack>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <video className='img-fluid' autoPlay loop muted onEnded={() => setIndex(0)}>
                        <source src='https://futurristic.s3.amazonaws.com/image/video/Game/RumbleGo04.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <Carousel.Caption style={{
                        textAlign: 'left',
                        left: '6%'
                    }}>
                        <Stack direction='vertical' gap={2}>
                            <img src="https://futurristic.s3.amazonaws.com/image/video/Game/RumbleGoImg.png" className='img-fluid GameTitleImg' alt="videoGameName" />
                            <Stack direction='horizontal' gap={3} >
                                <Button type='submit' variant='light' className='rounded-5' style={{
                                    width: 'auto',
                                    padding: '10px 20px',
                                    fontWeight: 'bold'
                                }}>Explore</Button>
                            </Stack>
                        </Stack>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <video className='img-fluid' autoPlay loop muted onEnded={() => setIndex(0)}>
                        <source src='https://futurristic.s3.amazonaws.com/image/video/ARVRMR/BoxingVR.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <Carousel.Caption style={{
                        textAlign: 'left',
                        left: '6%'
                    }}>
                        <Stack direction='vertical' gap={2}>
                            <img src="https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-BoxingVR02.png" className='img-fluid GameTitleImg' alt="videoGameName" />
                            <Stack direction='horizontal' gap={3} >
                                <Button type='submit' variant='light' className='rounded-5' style={{
                                    width: 'auto',
                                    padding: '10px 20px',
                                    fontWeight: 'bold'
                                }}>Explore</Button>
                            </Stack>
                        </Stack>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default MainSlider
