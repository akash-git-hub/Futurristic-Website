import React, { useRef } from 'react'
import { ARVRBanner } from './ARVROverview/BannerARVR'
import { AboutARVR } from './ARVROverview/AboutARVR'
import { ARVRservice } from './ARVROverview/ARVRService'
import { BenefitsARVR } from './ARVROverview/BenefitARVR'
import { ARVRPortfolio } from './ARVROverview/ARVRPortfolio'
import ContactUs from '../../../components/ContactUs/ContactUs'
import Footer from '../../../components/Footer/Footer'
import ServiceHeader from '../../../components/Header/ServiceHeader'

export const ARVRTraning = () => {
  
  const portfolioRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToRefs = {
    portfolioRef,
    contactUsRef,
  };
 
  return (
    <>
       <ServiceHeader scrollToRefs={scrollToRefs}/>
      <ARVRBanner />
      <AboutARVR />
      <ARVRservice />
      <BenefitsARVR />
      {/* <ARVRTool /> */}
      <div ref={portfolioRef}>
      <ARVRPortfolio />
      </div>
      <div ref={contactUsRef}>
      <ContactUs />
      </div>
      <Footer scrollToRefs={scrollToRefs}/>
    </>
  )
}
