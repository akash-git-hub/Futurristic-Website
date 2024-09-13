import React, { useState } from 'react';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { FaGamepad } from 'react-icons/fa';
import Slider from 'react-slick';

export const PortfolioAR = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState([false, false, false, false]);
    const [modalVideoSrc, setModalVideoSrc] = useState('');

    const [ARVRMRContent] = useState([
        {
          image: 'https://futurristic.s3.amazonaws.com/image/video/Branding/01-Golf.png',
          video: 'https://futurristic.s3.amazonaws.com/image/video/Branding/AR_Golf.mp4',
          TumbTitle: 'Game'
        },
        {
          image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-Sofa.png',
          video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/Chair.mp4',
          TumbTitle: 'Furniture'
        },
        {
          image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-cloths.png',
          video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/AR_Cloths.mp4',
          TumbTitle: 'Clothing '
        },
        {
          image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-DigitalMenu.png',
          video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/PlateVideo01.mp4',
          TumbTitle: 'Food'
        },
        {
          image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-Advertising.png',
          video: 'https://futurristic.s3.amazonaws.com/image/video/Game/Chirsmas.mp4',
          TumbTitle: 'Branding & Advertising'
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

            <Row className='mt-5'>
            <div className="justify-content-center mb-4 row">
                 <div className="text-center col">
                      <h1 className="mt-3 mb-1 fontWeight-800">
                      Discover Our Dazzling Portfolio 
                        </h1>
                        <p className="text-center text-grey-500 fontSize-20">
                        Here are some Futurristic's standout projects, exemplifying innovation and excellence in every endeavor. Explore now. 
                        </p>
                 </div>
            </div>
            </Row>

             <Row className="p-4 mb-5"> 
             {ARVRMRContent.length > 3 ? (            
                <Slider {...settings}>
                    {ARVRMRContent.map((card, cardIndex) => (
                        <Col key={cardIndex} className='p-2'>
                            <Card
                                onMouseEnter={() => handleMouseEnter(cardIndex)}
                                onMouseLeave={handleMouseLeave}
                                activeindex={index}
                                className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                                onClick={() => handleCardClick(cardIndex,ARVRMRContent)} // Added onClick handler
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
                                        <h5 className="text-center mb-3">{card.TumbTitle}</h5>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    </Slider>
             ) : (
                ARVRMRContent.map((card, cardIndex) => (
                    <Col xs={1} sm={2} md={4} key={cardIndex} className='p-2'>
                        <Card
                            onMouseEnter={() => handleMouseEnter(cardIndex)}
                            onMouseLeave={handleMouseLeave}
                            activeindex={index}
                            className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                            onClick={() => handleCardClick(cardIndex,ARVRMRContent)} // Added onClick handler
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
                                    <h5 className="text-center mb-3">{card.TumbTitle}</h5>
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
