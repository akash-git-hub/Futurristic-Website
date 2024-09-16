import React, { useRef } from 'react'
import Header from '../../../components/Header/Header'
import { BannerMobileApp } from './MobileAppOverview/BannerMobileApp'
import { AboutMobileApp } from './MobileAppOverview/AboutMobileApp'
import { MobileAppservice } from './MobileAppOverview/MobileAppService'
import { BenefitsMobileApp } from './MobileAppOverview/BenefitMobileApp'
import { MobileAppTool } from './MobileAppOverview/MobileAppTool'
import { MobileAppPortfolio } from './MobileAppOverview/MobileAppPortfolio'
import ContactUs from '../../../components/ContactUs/ContactUs'
import Footer from '../../../components/Footer/Footer'
import ServiceHeader from '../../../components/Header/ServiceHeader'

export const MobileApp = () => {

  const portfolioRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToRefs = {
    portfolioRef,
    contactUsRef,
  };
  
  return (
    <>
      <ServiceHeader scrollToRefs={scrollToRefs} />
      <BannerMobileApp />
      <AboutMobileApp />
      <MobileAppservice />
      <BenefitsMobileApp />
      {/* <MobileAppTool /> */} 
      <div ref={portfolioRef}><MobileAppPortfolio/></div> 
      <div ref={contactUsRef}><ContactUs /></div>
      <Footer scrollToRefs={scrollToRefs}/>
    </>
  )
}
