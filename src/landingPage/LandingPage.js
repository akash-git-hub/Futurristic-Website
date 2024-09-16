import React, { useRef } from 'react';
import Header from '../components/Header/Header';
import MainSlider from '../components/MainSlider/MainSlider';
import AboutUs from './AboutUs/aboutUs';
import SectionTwo from '../components/Section02/SectionTwo';
import Footer from '../components/Footer/Footer';
import Service from '../components/Service/Service';
import ContactUs from '../components/ContactUs/ContactUs';
import OwnerDetails from '../components/Owner/OwnerDetail';

const LandingPage = () => {
  const aboutUsRef = useRef(null);
  const serviceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToRefs = {
    aboutUsRef,
    serviceRef,
    portfolioRef,
    contactUsRef,
  };

  return (
    <div>
      <Header scrollToRefs={scrollToRefs} />
      <MainSlider />
      <div ref={aboutUsRef}>
        <AboutUs scrollToRefs={scrollToRefs}/>
      </div>
      <div ref={serviceRef}>
        <Service />
      </div>
      <div ref={portfolioRef}></div>
      <SectionTwo />
      <OwnerDetails />
      {/* <HowWeDoIt/> */}  
      <div ref={contactUsRef}>
        <ContactUs />
      </div>

    

      <Footer scrollToRefs={scrollToRefs}/>
    </div>
  );
};

export default LandingPage;
