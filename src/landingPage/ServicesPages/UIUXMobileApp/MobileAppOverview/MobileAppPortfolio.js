import React, { useState } from 'react';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { FaGamepad } from 'react-icons/fa';

export const MobileAppPortfolio = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState([false, false, false, false]);
    const [setModalVideoSrc] = useState('');

    const [MobileApp] = useState([
        {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/01App-vibro.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/01App-vibro.mp4',
            TumbTitle: 'Music'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-Threads01.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-Threads.mp4',
            TumbTitle: 'Dating'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-Qme.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-Qme.mp4',
            TumbTitle: 'Social'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Game/02App-pet.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Game/02App-pet.mp4',
            TumbTitle: 'Pet Buddy'
          },
          {
            image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/Walkopoly.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/Walkopoly.mp4',
            TumbTitle: 'Walkopoly'
          },
      
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

    return (
        <>
            <Container>
                <h1 className="mt-5 mb-1 fontWeight-800" style={{ textAlign: 'center' }}>Discover Our Dazzling Portfolio
                </h1>
                <p>Here are some Futurristic's standout projects, exemplifying innovation and excellence in every endeavor.</p>
                <Row xs={1} sm={2} md={4} className="g-4 mb-5 FeatureRowMobile">
                    {MobileApp.map((card, cardIndex) => (
                        <Col key={cardIndex}>
                            <Card
                                onMouseEnter={() => handleMouseEnter(cardIndex)}
                                onMouseLeave={handleMouseLeave}
                                activeindex={index}
                                className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText' : ''}`}
                                onClick={() => handleCardClick(cardIndex)} // Added onClick handler
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
                </Row>
            </Container>
        </>
    )
}
