import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Card, Col, Container, Row, Stack, Tab, Tabs, Modal } from 'react-bootstrap';
import Slider from 'react-slick';
 

const SectionTwo = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState([false, false, false, false]);
  const [showModal, setShowModal] = useState(false);
  const [ ModalVideoName, setModalVideoName ] = useState('');

  const [modalVideoSrc, setModalVideoSrc] = useState('');

  useEffect(()=>{
    AOS.init({duration:2000})
});

  // ------------Portfolio for Metaverse------------------------
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
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-SkillsetMetaverse.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/01-SkillsetMetaverse.mp4',
      TumbTitle: 'Skillset Metaverse '
    },
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/EducationMetaverse.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/EducationMetaverse .mp4',
      TumbTitle: 'Education Metaverse'
    },
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/SaudiMetaverse.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/Metaverse/SaudiMetaverse.mp4',
      TumbTitle: 'Saudi Metaverse'
    },
  ]);

  // ------------Portfolio for Web AR------------------------
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
    {
      image: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/EngineVR.png',
      video: 'https://futurristic.s3.amazonaws.com/image/video/ARVRMR/EngineVR.mp4',
      TumbTitle: ' Engine VR'
    },
  ]);

  // ------------Portfolio for Blockchain------------------------
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

  // ------------Portfolio for Gaming------------------------
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
    {
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

// ------------Portfolio for AR/VR Training------------------------
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

// ------------Portfolio for Mobile Development------------------------  
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
    const videoname = contentArray[cardIndex].TumbTitle;
    setModalVideoName(videoname);
    setModalVideoSrc(videoSrc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalVideoSrc('');
    setShowModal(false);
  };

  return (
    <>
      <div className="FuturristicGame02 mt-5 mb-5">
        <Container  data-aos="fade-up">
          <h1 className="mt-3 mb-1 fontWeight-800" style={{ textAlign: 'center', fontWeight:'800' }}>
            Discover Our Dazzling Portfolio
          </h1>
          <h5>Here are some Futurristic's standout projects, exemplifying innovation and excellence in every endeavor. Explore now.</h5>
          <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">

            <Tab eventKey="all" title="Metaverse" className='TabDark' variant="dark">
            <Row className='p-4'>
              {cardContent.length >= 3 ? (            
                <Slider {...settings}>
                {cardContent.map((card, cardIndex) => (
                  <Col className="p-2 " key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20 ' : ''}`}
                      onClick={() => handleCardClick(cardIndex,cardContent)} // Added onClick handler
                    >
                      {isHovered === cardIndex ? (
                        <video
                          className=""
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
                cardContent.map((card, cardIndex) => (
                 <Col className="p-2 " key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
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
                )))}
              </Row>

            </Tab>
            <Tab eventKey="Web AR" title="Web AR">
              <Row className="p-4 ">
              {ARVRMRContent.length >= 3 ? (          
                <Slider {...settings}>
                {ARVRMRContent.map((card, cardIndex) => (
                 <Col className="p-2 " key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                      onClick={() => handleCardClick(cardIndex, ARVRMRContent)}
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
              ) : (
                ARVRMRContent.map((card, cardIndex) => (
               <Col className="p-2 " key={cardIndex}>
                  <Card
                    onMouseEnter={() => handleMouseEnter(cardIndex)}
                    onMouseLeave={handleMouseLeave}
                    activeindex={index}
                    className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                    onClick={() => handleCardClick(cardIndex, ARVRMRContent)}
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
                )))}
              </Row>
            </Tab>

            <Tab eventKey="Blockchain" title="Blockchain">
              <Row className="p-4 ">
              {Blockchain.length > 3 ? (            
                <Slider {...settings}>
                {Blockchain.map((card, cardIndex) => (
                 <Col className="p-2 " key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-30' : ''}`}
                       
                      onClick={() => handleCardClick(cardIndex,Blockchain)}
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
                ))}</Slider>
              ):(
                Blockchain.map((card, cardIndex) => (
                 <Col className="p-2" key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-30' : ''}`}
                       
                      onClick={() => handleCardClick(cardIndex, Blockchain)}
                    >
                      {isHovered === cardIndex ? (
                        <video
                          className="img-fluid video visible border-0"
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
               )))}
              </Row>
            </Tab>


            <Tab eventKey="AR/VR Training" title="AR/VR Training">
              <Row className="p-4 ">
              {ARtraning.length >= 3 ? (            
                <Slider {...settings}>
                {ARtraning.map((card, cardIndex) => (
                 <Col className="p-2 " key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                      onClick={() => handleCardClick(cardIndex, ARtraning)}
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
                ))}</Slider>
              ):(
                ARtraning.map((card, cardIndex) => (
                 <Col className="p-2 " key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                      onClick={() => handleCardClick(cardIndex, ARtraning)}
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
              )))}
              </Row>
            </Tab>


            <Tab eventKey="Gaming" title="Gaming">
              <Row className="p-4 ">
              {GameContent.length >= 3 ? (            
                <Slider {...settings}>
                {GameContent.map((card, cardIndex) => (
                 <Col className="p-2 " key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-30' : ''}`}
                      onClick={() => handleCardClick(cardIndex, GameContent)}
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
                ))}</Slider>
              ):(
                GameContent.map((card, cardIndex) => (
                 <Col className="p-2 " key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                      onClick={() => handleCardClick(cardIndex, GameContent)}
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
                )))}
              </Row>
            </Tab>

            <Tab eventKey="Mobile Development" title="Mobile Development">
              <Row className="p-4 ">
              {Mobile.length >= 3 ? (            
                <Slider {...settings}>
                {Mobile.map((card, cardIndex) => (
                 <Col className="p-2 " key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                      onClick={() => handleCardClick(cardIndex, Mobile)}
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
                ))}</Slider>
              ):(
                Mobile.map((card, cardIndex) => (
                 <Col className="p-2 " key={cardIndex}>
                    <Card
                      onMouseEnter={() => handleMouseEnter(cardIndex)}
                      onMouseLeave={handleMouseLeave}
                      activeindex={index}
                      className={`custom-card ${isHovered === cardIndex ? 'hovered scaleText w-20' : ''}`}
                      onClick={() => handleCardClick(cardIndex, Mobile)}
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
              )))}
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </div>


      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal"  size="sm">
        <Modal.Header closeButton>
          <Modal.Title>{ModalVideoName}</Modal.Title>
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
