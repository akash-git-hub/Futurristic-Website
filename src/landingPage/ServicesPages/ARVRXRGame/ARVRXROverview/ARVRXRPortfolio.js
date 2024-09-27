import React, { useState } from 'react';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import Slider from 'react-slick';

export const ARVRXRPortfolio = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState([false, false, false, false]);
    const [setModalVideoSrc] = useState('');

    const [Games] = useState([
        {
            image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-BoxingVR.png', 
            video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/BoxingVR.mp4',
            TumbTitle: 'Boxing'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-Christmas.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/Chirsmas.mp4',
            TumbTitle: 'Christmas'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-RumbleGo.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/RumbleGo02.mp4',
            TumbTitle: 'Rumble Go'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-JugarCarGame.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/JugarCarGame.mp4',
            TumbTitle: 'Road Racer'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-Gafala01.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/F-Video05.mp4',
            TumbTitle: 'Gafala'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/Walkopoly.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/Walkopoly.mp4',
            TumbTitle: 'Walkopoly'
          }, {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/Human&Dinosaur.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/Human&Dinosaur.mp4',
            TumbTitle: 'Human & Dinosaur'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/Lava&Space.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/Lava&Space.mp4',
            TumbTitle: 'Lava & Space'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/Butterfly.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/Butterfly.mp4',
            TumbTitle: 'Butterfly '
          },
      
    
      ]);

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

    return (
        <>
            <Container>
                <h1 className="mt-5 mb-1 fontWeight-800" style={{ textAlign: 'center' }}> Discover Our Dazzling Portfolio
                </h1>
                <p>Here are some Futurristic's standout projects, exemplifying innovation and excellence in every endeavor.</p>
                <Row className="p-4">
                {Games.length >= 3 ? (            
                <Slider {...settings}>
                    {Games.map((card, cardIndex) => (
                        <Col key={cardIndex} className="p-2">
                            <Card
                                onMouseEnter={() => handleMouseEnter(cardIndex)}
                                onMouseLeave={handleMouseLeave}
                                activeindex={index}
                                className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                                onClick={() => handleCardClick(cardIndex,Games)} // Added onClick handler
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
                    Games.map((card, cardIndex) => (
                        <Col key={cardIndex} className="p-2">
                            <Card
                                onMouseEnter={() => handleMouseEnter(cardIndex)}
                                onMouseLeave={handleMouseLeave}
                                activeindex={index}
                                className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                                onClick={() => handleCardClick(cardIndex,Games)} // Added onClick handler
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
