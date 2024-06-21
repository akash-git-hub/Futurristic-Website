import React, { useState } from 'react';
import { Badge, Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { FaHeart, FaRegEye } from 'react-icons/fa';
import { FaFantasyFlightGames } from 'react-icons/fa';


const SectionOne = () => {
  const [clickedIcons, setClickedIcons] = useState([false, false, false, false]);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState([false, false, false, false]);

  const [cardContent, setCardContent] = useState([
    {
        imageTitle: 'https://cdn2.spatial.io/assets/v1/thumbnails/6491dbd9e551e16bb8789f04/customLogo/r/9395f3430414dcae1cd306ae3f654b1724ea6528224375846c598db4d55f9e4e/1699625060',
        image: 'https://cdn2.spatial.io/assets/v1/thumbnails/6491dbd9e551e16bb8789f04/posterThumbnail/r/120eabb1a33dfdd78ca3090bd88beea7f872e9ba07edf6e4771faeddb02f0045/1699327622',
        video: 'https://cdn2.spatial.io/assets/v1/videos/6491dbd9e551e16bb8789f04/posterVideo/r/3a7f193502dba986c1a047f90c562945540b50c55878ba3028560b75fbcebc99/1699327622',
        viewText: '5k',
        likeText: '1k',
    },
    {
        imageTitle: 'https://cdn2.spatial.io/assets/v1/thumbnails/6491dbd9e551e16bb8789f04/customLogo/r/9395f3430414dcae1cd306ae3f654b1724ea6528224375846c598db4d55f9e4e/1699625060',
        image: 'https://cdn2.spatial.io/assets/v1/thumbnails/64b570a71c1f96fd5ea6ca36/posterThumbnail/r/8099acc38686384f59df6403dc3cf525657287f89416508fc079d964b095102b/1699327694',
        video: 'https://cdn2.spatial.io/assets/v1/videos/6491dbd9e551e16bb8789f04/posterVideo/r/3a7f193502dba986c1a047f90c562945540b50c55878ba3028560b75fbcebc99/1699327622',
        viewText: '5k',
        likeText: '1k',
    },
    {
        imageTitle: 'https://cdn2.spatial.io/assets/v1/thumbnails/6491dbd9e551e16bb8789f04/customLogo/r/9395f3430414dcae1cd306ae3f654b1724ea6528224375846c598db4d55f9e4e/1699625060',
        image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65020b034b3117f026aa55be/posterThumbnail/r/3f94cd3cd79c5a02ea8795f5d4677385585343d8e6c6ec39b305b9cdd7e2eff9/1699326898',
        video: 'https://cdn2.spatial.io/assets/v1/videos/6491dbd9e551e16bb8789f04/posterVideo/r/3a7f193502dba986c1a047f90c562945540b50c55878ba3028560b75fbcebc99/1699327622',
        viewText: '5k',
        likeText: '1k',
    },
    {
        imageTitle: 'https://cdn2.spatial.io/assets/v1/thumbnails/6491dbd9e551e16bb8789f04/customLogo/r/9395f3430414dcae1cd306ae3f654b1724ea6528224375846c598db4d55f9e4e/1699625060',
        image: 'https://cdn2.spatial.io/assets/v1/thumbnails/64f8d2297af3f1ab8a72737d/posterThumbnail/r/5b1fafe1136e7dd1496021b59d881df2c0667fd8a7c6d40e8e09bcf907fde05c/1699624941',
        video: 'https://cdn2.spatial.io/assets/v1/videos/6491dbd9e551e16bb8789f04/posterVideo/r/3a7f193502dba986c1a047f90c562945540b50c55878ba3028560b75fbcebc99/1699327622',
        viewText: '5k',
        likeText: '1k',
    },
  ]);

  const handleMouseEnter = (cardIndex) => {
    setIsHovered((prev) => {
      const newState = [...prev];
      newState[cardIndex] = true;
      return newState;
    });
  };

  const handleMouseLeave = (cardIndex) => {
    setIsHovered((prev) => {
      const newState = [...prev];
      newState[cardIndex] = false;
      return newState;
    });
  };

  const handleIconClick = (cardIndex) => {
    setClickedIcons((prev) => {
      const newClickedIcons = [...prev];
      newClickedIcons[cardIndex] = !newClickedIcons[cardIndex];
      return newClickedIcons;
    });
  };

  return (
    <>
      <div className="futurrsticGame01">
        <Container>
          <h5 className="mt-3 mb-3" style={{ textAlign: 'left' }}>
            <FaFantasyFlightGames style={{ fontSize: '2rem' }} /> Futurrstic Game Sesson 01
          </h5>
          <Row xs={1} md={2} lg={4} className="card-row">
            {cardContent.map((card, cardIndex) => (
              <Col key={cardIndex}>
                <Card
                  onMouseEnter={() => handleMouseEnter(cardIndex)}
                  onMouseLeave={() => handleMouseLeave(cardIndex)}
                  activeindex={index}
                  className={isHovered[cardIndex] ? 'hovered' : ''}
                >
                  {isHovered[cardIndex] ? (
                    <video
                      className={`img-fluid ${isHovered[cardIndex] ? 'visible' : 'hiddenOpacity'}`}
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
                  <div className="cardHeader">
                    <span style={{ width: '10%' }}>
                      <Badge className="p-2 text-black" pill bg="light">
                        World Wide Game
                      </Badge>
                    </span>
                    <div
                      className="ReactIcons text-center"
                      onClick={() => handleIconClick(cardIndex)}
                      style={{
                        padding: '7px',
                        background: clickedIcons[cardIndex] ? 'red' : '#000',
                        borderRadius: '30px',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                      }}
                    >
                      <FaHeart className="text-white" />
                    </div>
                  </div>
                  <Card.Body className="CardBodyText">
                    {isHovered[cardIndex] ? null : (
                      <Stack direction="vertical" gap={2} style={{ justifyContent: 'space-between' }}>
                        <img src={card.imageTitle} className="img-fluid" alt="videoGameName" />
                        <Stack direction="horizontal" gap={3} style={{ justifyContent: 'space-between' }}>
                          <h6>By Futurrstic</h6>
                          <p className="mb-0">
                            <FaRegEye /> {card.viewText}
                          </p>
                          <p className="mb-0">
                            <FaHeart style={{ color: 'red' }} /> {card.likeText}
                          </p>
                        </Stack>
                      </Stack>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SectionOne;
