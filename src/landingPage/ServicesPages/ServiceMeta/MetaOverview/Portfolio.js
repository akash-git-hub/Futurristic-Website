import React, { useState } from 'react';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { FaGamepad } from 'react-icons/fa';


export const Portfolio = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState([false, false, false, false]);
    const [modalVideoSrc, setModalVideoSrc] = useState('');

    const [cardContent] = useState([
        {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-Metaverse.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/one.mp4',
            TumbTitle: 'Corporate Metaverse'
        },
        {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/02-Metaverse.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/four.mp4',
            TumbTitle: 'Business Metaverse'
        },
        {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-Artgallery.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/ArtGallery.mp4',
            TumbTitle: 'Art Gallery Metaverse'
        },
        {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-OneBearth.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-OneBearth.mp4',
            TumbTitle: 'Sports Metaverse'
        },
        {
            image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-EducationMeta.png',
            video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-EducationMeta.mp4',
            TumbTitle: 'Training Metaverse'
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
                <h1 className="mt-3 mb-1 fontWeight-800">
                    Discover Our Dazzling Portfolio
                </h1>
                <p className='text-center text-grey-500 fontSize-20 mb-3'>Here are some Futurristic's standout projects, exemplifying innovation and excellence in every endeavor. Explore now.</p>
                <Row xs={1} sm={2} md={4} className="g-4 mb-5 FeatureRowMobile">
                <div data-slick='{"slideToShow": 4, "slidesToScroll": 4}' >
                    {cardContent.map((card, cardIndex) => (
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
                                    // className={`CardBodyText02 pb-0 ${isHovered === cardIndex ? 'hidden' : 'visible'
                                    //     }`}
                                >
                                    <Stack direction="vertical" gap={0}>
                                        <h5 className="text-left mb-3">{card.TumbTitle}</h5>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </div>
                </Row>
            </Container>
        </>
    )
}
