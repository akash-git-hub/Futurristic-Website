import React, { useState } from 'react';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { FaGamepad } from 'react-icons/fa';
import Slider from 'react-slick';

export const ARVRPortfolio = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState([false, false, false, false]);
    const [modalVideoSrc, setModalVideoSrc] = useState('');

    const [ARVRMR] = useState([
        {
            image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-Edscope.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/DocAR.mp4',
            TumbTitle: 'Education - AR'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-EducationAR.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-EducationAR.mp4',
            TumbTitle: 'Education - VR'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-CasinoVR.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-CasinoVR.mp4',
            TumbTitle: 'Casino - VR'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-CarVR.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-CarVR.mp4',
            TumbTitle: 'Training'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-PsychologistVR.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-PsychologistVR.mp4',
            TumbTitle: 'PsychologistVR'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-Advertising.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/Chirsmas.mp4',
            TumbTitle: 'Branding & Advertising'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/Human&Dinosaur.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/Human&Dinosaur.mp4',
            TumbTitle: 'Human & Dinosaur'
          }
    
      ]);


    const handleMouseEnter = (cardIndex) => {
        setIsHovered(cardIndex);
    };

    const handleMouseLeave = () => {
        setIsHovered(-1);
    };

    const handleCardClick = (cardIndex, contentArray) => {
        const videoSrc = contentArray[cardIndex].video;
        setModalVideoSrc(videoSrc);
        // setShowModal(true);
    };

    var settings ={
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive:[
          {
            breakpoint:480,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
       }

    return (
        <>
            <Container>
                <h1 className="mt-3 mb-1" style={{ textAlign: 'center' }}> Discover Our Dazzling Portfolio
                </h1>
                <p>Here are some Futurristic's standout projects, exemplifying innovation and excellence in every endeavor. </p>
                <Row className='p-4'>
                {ARVRMR.length > 3 ? (            
                <Slider {...settings}>
                    {ARVRMR.map((card, cardIndex) => (
                        <Col key={cardIndex} className='p-2'>
                            <Card
                                onMouseEnter={() => handleMouseEnter(cardIndex)}
                                onMouseLeave={handleMouseLeave}
                                activeindex={index}
                                className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                                onClick={() => handleCardClick(cardIndex,ARVRMR)} // Added onClick handler
                            >
                                {isHovered === cardIndex ? (
                                    <video
                                        className="img-fluid video visible"
                                        autoPlay
                                        loop
                                        muted
                                        onEnded={() => setIndex(cardIndex)}
                                    >
                                        <source src={card.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Card.Img variant="top" src={card.image} />
                                )}
                                <Card.Body
                                    className={`CardBodyText02 pb-0 ${isHovered === cardIndex ? 'hidden' : 'visible'
                                        }`}
                                >
                                    <Stack direction="vertical" gap={0}>
                                        <h5 className="text-left mb-3">{card.TumbTitle}</h5>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    </Slider>
                ):(
                    ARVRMR.map((card, cardIndex) => (
                        <Col key={cardIndex} className='p-2'>
                            <Card
                                onMouseEnter={() => handleMouseEnter(cardIndex)}
                                onMouseLeave={handleMouseLeave}
                                activeindex={index}
                                className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                                onClick={() => handleCardClick(cardIndex,ARVRMR)} // Added onClick handler
                            >
                                {isHovered === cardIndex ? (
                                    <video
                                        className="img-fluid video visible"
                                        autoPlay
                                        loop
                                        muted
                                        onEnded={() => setIndex(cardIndex)}
                                    >
                                        <source src={card.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Card.Img variant="top" src={card.image} />
                                )}
                                <Card.Body
                                    className={`CardBodyText02 pb-0 ${isHovered === cardIndex ? 'hidden' : 'visible'
                                        }`}
                                >
                                    <Stack direction="vertical" gap={0}>
                                        <h5 className="text-left mb-3">{card.TumbTitle}</h5>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))   
                )}
                </Row>
            </Container>
        </>
    )
}
