import React, { useState } from 'react';
import { Badge, Card, Col, Container, Row, Stack, Tab, Tabs } from 'react-bootstrap';
import { FaHeart, FaGamepad } from 'react-icons/fa';

const SectionTwo = () => {
  const [clickedIcons, setClickedIcons] = useState([false, false, false, false]);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState([false, false, false, false]);

  const [cardContent, setCardContent] = useState([
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/Branding/01-Golf.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/Branding/AR_Golf.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
      TumbTitle:'Digital Menu'
    },
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/Branding/01-Dinosuor.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/Branding/AR_Dinasuor.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
  ]);

  const [GameContent, setGameContent] = useState([
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-JugarCarGame.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/Game/JugarCarGame.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-RumbleGo.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/Game/RumbleGo02.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/Game/01-RumbleGo.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/Game/F-Video05.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
  ]);

  const [ARVRMRContent, setARVRMRContent] = useState([
    // {
    //   image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-BoxingVR.png',
    //   video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/BoxingVR.mp4',
    //   viewText: '5k',
    //   likeText: '1k',
    //   gameDevText: 'AR/VR/MR Unity',
    //   gameStudioText: 'By FUTURRSTIC',
    //   TumbTitle:'Boxing VR - Gaming'
    // },
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-Edscope.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/DocAR.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
      TumbTitle:'Edscope VR'
    },
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-Edscope-leaf.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-Edscope-leaf.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
      TumbTitle:'Edscope AR - Education'
    },
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-Plant-cell.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-Plant-cell.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
      TumbTitle:'Plant Cell VR '
    },
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-Leaf-cell.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-Leaf-cell.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
      TumbTitle:'Leaf Cell - Gaming'
    },
    {
      image:  'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-BodyJoints.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/HumanJoint.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
      TumbTitle:'Human Joint - VR '
    },
  ]);
  const [foodContent, setFoodContent] = useState([
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/01-DigitalMenu.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/PlateVideo01.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
      TumbTitle:'Digital Menu'
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
  ]);

  const [MetaverseContent, setMetaverseContent] = useState([
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-Metaverse.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/Web_AR_Video.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
      TumbTitle:'Corporate Metaverse'
    },
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/02-Metaverse.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/AR_Cloths.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
      TumbTitle:'Business Metaverse'
    },
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-ArtGallery.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/ArtGallery.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
      TumbTitle:'Art Gallery Metaverse'
    },
    {
      image:  'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-Edscopemeta_food.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/edscopemeta_food.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image:  'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-Chandrayyan-2.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-Chandrayyan-2.mp4',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
    {
      image: 'https://cdn2.spatial.io/assets/v1/thumbnails/65258ab91dec16db2e33e42a/customThumbnail/r/48d1f1580aa969feef33f29662d64158ec6e7d55638c93393cc2274d1e5446f5/1701165101',
      video: 'https://cdn2.spatial.io/assets/v1/videos/65258ab91dec16db2e33e42a/customVideo/r/2fd6e4fc796e69f68d559de9df5280ceba81dc801bb399c835bef8ef6475ae6e/1699889458',
      viewText: '5k',
      likeText: '1k',
      gameDevText: 'MetaVerse Developer',
      gameStudioText: 'By FUTURRSTIC',
    },
  ]);

  const handleMouseEnter = (cardIndex) => {
    setIsHovered(cardIndex);
  };

  const handleMouseLeave = () => {
    setIsHovered(-1);
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
      <div className="futurrsticGame02 mt-5">
        <Container>
          <h5 className="mt-3 mb-3" style={{ textAlign: 'left' }}>
            <FaGamepad style={{ fontSize: '2rem' }} /> Feature Games
          </h5>
          <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
            <Tab eventKey="all" title="Branding" className='TabDark' variant="dark">
              <Row xs={1} sm={2} md={4} className="g-4 FeatureRowMobile">
                {cardContent.map((card, cardIndex) => (
                  <Col key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText' : ''}`}
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
                      <Card.Body
                        className={`CardBodyText02 pb-0 ${isHovered === cardIndex ? 'hidden' : 'visible'
                          }`}
                      >
                        <Stack direction="vertical" gap={0}>
                          <h6 className="text-left mb-0">Into The CYBERVERSE: Episode 1</h6>
                          <p className="mb-0 text-left text-grey-500 fontSize-12">
                            {card.gameDevText} / {card.gameStudioText}
                          </p>
                          <p className="mb-2 text-left text-grey-500 fontSize-12">
                            View {card.viewText} Like {card.likeText}
                          </p>
                        </Stack>
                      </Card.Body>
                      <Card.Body
                        className={`CardBodyText02 loremText pt-0 ${isHovered === cardIndex ? 'visibleText' : 'displayNone'
                          }`}
                      >
                        <Stack direction="vertical" gap={0}>
                          <p className="mb-0 text-left fontSize-12">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ea quod
                            nisi incidunt sint natus dignissimos eos excepturi similique, dolorum
                            ratione praesentium voluptas omnis debitis!
                          </p>
                        </Stack>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="arvr" title="Education  Web AR">
              <Row xs={1} sm={2} md={4} className="g-4 FeatureRowMobile">
                {ARVRMRContent.map((card, cardIndex) => (
                  <Col key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText' : ''}`}
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
                      <Card.Body
                        className={`CardBodyText02 pb-0 ${isHovered === cardIndex ? 'hidden' : 'visible'
                          }`}
                      >
                        <Stack direction="vertical" gap={0}>
                          <h6 className="text-left mb-0">{card.TumbTitle}</h6>
                          <p className="mb-0 text-left text-grey-500 fontSize-12">
                            {card.gameDevText} / {card.gameStudioText}
                          </p>
                          <p className="mb-2 text-left text-grey-500 fontSize-12">
                            View {card.viewText} Like {card.likeText}
                          </p>
                        </Stack>
                      </Card.Body>
                      <Card.Body
                        className={`CardBodyText02 loremText pt-0 ${isHovered === cardIndex ? 'visibleText' : 'displayNone'
                          }`}
                      >
                        <Stack direction="vertical" gap={0}>
                          <p className="mb-0 text-left fontSize-12">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ea quod
                            nisi incidunt sint natus dignissimos eos excepturi similique, dolorum
                            ratione praesentium voluptas omnis debitis!
                          </p>
                        </Stack>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="metaverse" title="Web AR">
              <Row xs={1} sm={2} md={4} className="g-4 FeatureRowMobile">
                {MetaverseContent.map((card, cardIndex) => (
                  <Col key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText' : ''}`}
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
                      <Card.Body
                        className={`CardBodyText02 pb-0 ${isHovered === cardIndex ? 'hidden' : 'visible'
                          }`}
                      >
                        <Stack direction="vertical" gap={0}>
                          <h6 className="text-left mb-0">{card.TumbTitle}</h6>
                          <p className="mb-0 text-left text-grey-500 fontSize-12">
                            {card.gameDevText} / {card.gameStudioText}
                          </p>
                          <p className="mb-2 text-left text-grey-500 fontSize-12">
                            View {card.viewText} Like {card.likeText}
                          </p>
                        </Stack>
                      </Card.Body>
                      <Card.Body
                        className={`CardBodyText02 loremText pt-0 ${isHovered === cardIndex ? 'visibleText' : 'displayNone'
                          }`}
                      >
                        <Stack direction="vertical" gap={0}>
                          <p className="mb-0 text-left fontSize-12">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ea quod
                            nisi incidunt sint natus dignissimos eos excepturi similique, dolorum
                            ratione praesentium voluptas omnis debitis!
                          </p>
                        </Stack>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="web3" title="Food AR">
              <Row xs={1} sm={2} md={4} className="g-4 FeatureRowMobile">
                {foodContent.map((card, cardIndex) => (
                  <Col key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText' : ''}`}
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
                      <Card.Body
                        className={`CardBodyText02 pb-0 ${isHovered === cardIndex ? 'hidden' : 'visible'
                          }`}
                      >
                        <Stack direction="vertical" gap={0}>
                          <h6 className="text-left mb-0">Into The CYBERVERSE: Episode 1</h6>
                          <p className="mb-0 text-left text-grey-500 fontSize-12">
                            {card.gameDevText} / {card.gameStudioText}
                          </p>
                          <p className="mb-2 text-left text-grey-500 fontSize-12">
                            View {card.viewText} Like {card.likeText}
                          </p>
                        </Stack>
                      </Card.Body>
                      <Card.Body
                        className={`CardBodyText02 loremText pt-0 ${isHovered === cardIndex ? 'visibleText' : 'displayNone'
                          }`}
                      >
                        <Stack direction="vertical" gap={0}>
                          <p className="mb-0 text-left fontSize-12">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ea quod
                            nisi incidunt sint natus dignissimos eos excepturi similique, dolorum
                            ratione praesentium voluptas omnis debitis!
                          </p>
                        </Stack>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="games" title="Chrismas AR">
              <Row xs={1} sm={2} md={4} className="g-4 FeatureRowMobile">
                {GameContent.map((card, cardIndex) => (
                  <Col key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText' : ''}`}
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
                      <Card.Body
                        className={`CardBodyText02 pb-0 ${isHovered === cardIndex ? 'hidden' : 'visible'
                          }`}
                      >
                        <Stack direction="vertical" gap={0}>
                          <h6 className="text-left mb-0">Into The CYBERVERSE: Episode 1</h6>
                          <p className="mb-0 text-left text-grey-500 fontSize-12">
                            {card.gameDevText} / {card.gameStudioText}
                          </p>
                          <p className="mb-2 text-left text-grey-500 fontSize-12">
                            View {card.viewText} Like {card.likeText}
                          </p>
                        </Stack>
                      </Card.Body>
                      <Card.Body
                        className={`CardBodyText02 loremText pt-0 ${isHovered === cardIndex ? 'visibleText' : 'displayNone'
                          }`}
                      >
                        <Stack direction="vertical" gap={0}>
                          <p className="mb-0 text-left fontSize-12">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ea quod
                            nisi incidunt sint natus dignissimos eos excepturi similique, dolorum
                            ratione praesentium voluptas omnis debitis!
                          </p>
                        </Stack>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default SectionTwo;
