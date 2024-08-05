import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Stack } from 'react-bootstrap';

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
                        <source src='https://futurristic.s3.amazonaws.com/image/video/Metaverse/VisionPro.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <Carousel.Caption style={{
                        textAlign: 'left',
                        left: '6%'
                    }}>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default MainSlider
