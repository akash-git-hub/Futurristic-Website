import React, { useRef } from 'react'
import { BannerAR } from './AROverview/BannerAR'
import { AboutAR } from './AROverview/AboutAR'
import { BenefitAR } from './AROverview/BenefitAR'
import { ServiceAR } from './AROverview/ServiceAR'
import { PortfolioAR } from './AROverview/PortfolioAR'
import ContactUs from '../../../components/ContactUs/ContactUs'
import Footer from '../../../components/Footer/Footer'
import ServiceHeader from '../../../components/Header/ServiceHeader'


export const WebARServices = () => {
 
  const portfolioRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToRefs = {
    portfolioRef,
    contactUsRef,
  };

  return (
    <>
      <ServiceHeader scrollToRefs={scrollToRefs} />
      <BannerAR />
      <AboutAR />
      <ServiceAR />
      <BenefitAR />
      {/* <ARTool /> */}
      <div ref={portfolioRef}> <PortfolioAR /></div> 
      <div ref={contactUsRef}><ContactUs /></div>
      <Footer scrollToRefs={scrollToRefs}/>
    </>
  )
}
