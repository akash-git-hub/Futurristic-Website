import React, { useState } from 'react';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { FaGamepad } from 'react-icons/fa';

export const BlockPortfolio = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState([false, false, false, false]);
    const [modalVideoSrc, setModalVideoSrc] = useState('');

    const [Blockchain] = useState([
        {
          image: 'https://futurristic.s3.amazonaws.com/image/video/Blockchain/01-Alveychain.png',
          video: 'https://futurristic.s3.amazonaws.com/image/video/Blockchain/01-AlveyChain.mp4',
          TumbTitle: 'Blockchain Alvey'
        },
        {
          image: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-RumbleGo.png',
          video: 'https://futurristic.s3.amazonaws.com/image/video/Game/RumbleGo02.mp4',
          TumbTitle: 'Rumble Go'
        },
        {
          image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-OneBearth.png',
          video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-OneBearth.mp4',
          TumbTitle: 'Sports Metaverse'
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
                <h5 className="mt-3 mb-3" style={{ textAlign: 'left' }}>
                    <FaGamepad style={{ fontSize: '2rem' }} /> Our Portfolio
                </h5>
                <Row xs={1} sm={2} md={4} className="g-4 mb-5 FeatureRowMobile">
                    {Blockchain.map((card, cardIndex) => (
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
