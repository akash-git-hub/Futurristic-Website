import React, { useState } from 'react';
import { Card, Col, Container, Row, Stack, Tab, Tabs, Modal } from 'react-bootstrap';

const SectionTwo = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState([false, false, false, false]);
  const [showModal, setShowModal] = useState(false);

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

  const [GameContent] = useState([
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
    },

  ]);

  const [ARtraning] = useState([
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
      video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/PlateVideo01.mp4',
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

  ]);

  const [Mobile] = useState([
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
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalVideoSrc('');
    setShowModal(false);
  };

  return (
    <>
      <div class="FuturristicGame02 mt-5 mb-5">
        <Container>
          <h1 className="mt-3 mb-1 fontWeight-800" style={{ textAlign: 'center', fontWeight:'800' }}>
            Discover Our Dazzling Portfolio
          </h1>
          <h5>Here are some Futurristic's standout projects, exemplifying innovation and excellence in every endeavor. Explore now.</h5>
          <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
            <Tab eventKey="all" title="Metaverse" className='TabDark' variant="dark">
              <Row xs={1} sm={2} md={4} className="g-4 FeatureRowMobile">
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
            </Tab>
            <Tab eventKey="Web AR" title="Web AR">
              <Row xs={1} sm={2} md={4} className="g-4 FeatureRowMobile">
                {ARVRMRContent.map((card, cardIndex) => (
                  <Col key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText' : ''}`}
                      onClick={() => handleCardClick(cardIndex, cardContent)}
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
            </Tab>
            <Tab eventKey="Blockchain" title="Blockchain">
              <Row xs={1} sm={2} md={4} className="g-4 FeatureRowMobile">
                {Blockchain.map((card, cardIndex) => (
                  <Col key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText' : ''}`}
                      onClick={() => handleCardClick(cardIndex, cardContent)}
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
            </Tab>
            <Tab eventKey="AR/VR Training" title="AR/VR Training">
              <Row xs={1} sm={2} md={4} className="g-4 FeatureRowMobile">
                {ARtraning.map((card, cardIndex) => (
                  <Col key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText' : ''}`}
                      onClick={() => handleCardClick(cardIndex, cardContent)}
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
            </Tab>
            <Tab eventKey="Gaming" title="Gaming">
              <Row xs={1} sm={2} md={4} className="g-4 FeatureRowMobile">
                {GameContent.map((card, cardIndex) => (
                  <Col key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText' : ''}`}
                      onClick={() => handleCardClick(cardIndex, cardContent)}
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
            </Tab>
            <Tab eventKey="Mobile Development" title="Mobile Development">
              <Row xs={1} sm={2} md={4} className="g-4 FeatureRowMobile">
                {Mobile.map((card, cardIndex) => (
                  <Col key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText' : ''}`}
                      onClick={() => handleCardClick(cardIndex, cardContent)}
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
            </Tab>
          </Tabs>
        </Container>
      </div>


      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Video Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalVideoSrc && (
            <video className="img-fluid video" autoPlay controls>
              <source src={modalVideoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Modal.Body>
      </Modal>




    </>
  );
};

export default SectionTwo;
