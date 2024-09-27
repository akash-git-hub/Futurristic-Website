import React, { useRef } from 'react'
import { ARVRXRBanner } from './ARVRXROverview/BannerARVRXR'
import { AboutARVRXR } from './ARVRXROverview/AboutARVRXR'
import { ARVRXRservice } from './ARVRXROverview/ARVRXRService'
import { BenefitsARVRXR } from './ARVRXROverview/BenefitARVRXR'
import { ARVRXRPortfolio } from './ARVRXROverview/ARVRXRPortfolio'
import ContactUs from '../../../components/ContactUs/ContactUs'
import Footer from '../../../components/Footer/Footer'
import ServiceHeader from '../../../components/Header/ServiceHeader'

export const ARVRXRGame = () => {
  const portfolioRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToRefs = {
    portfolioRef,
    contactUsRef,
  };
  return (
    <>
      <ServiceHeader scrollToRefs={scrollToRefs}/>
      <ARVRXRBanner />
      <AboutARVRXR />
      <ARVRXRservice />
      <BenefitsARVRXR />
      {/* <ARVRXRTool /> */}
      <div ref={portfolioRef}><ARVRXRPortfolio/></div> 
      <div ref={contactUsRef}><ContactUs /></div>
      <Footer scrollToRefs={scrollToRefs}/>
    </>
  )
}
