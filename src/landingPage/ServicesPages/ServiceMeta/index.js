import React, { useEffect , useRef} from 'react'
import { Banner } from './MetaOverview/Banner'
import { AboutMeta } from './MetaOverview/AboutMeta'
import { ServiceMeta } from './MetaOverview/Service'
import { MetaTool } from './MetaOverview/MetaTool'
import { BenefitMeta } from './MetaOverview/BenefitMeta'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import ContactUs from '../../../components/ContactUs/ContactUs'
import { Portfolio } from './MetaOverview/Portfolio'
import ServiceHeader from '../../../components/Header/ServiceHeader'

export const MetaServices = () => {
 
  const portfolioRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToRefs = {
    portfolioRef,
    contactUsRef,
  };

  return (
    <>
      <div>
      <ServiceHeader scrollToRefs={scrollToRefs}/>
      <Banner />
      <AboutMeta />
      <ServiceMeta />
      <BenefitMeta />
      {/* <MetaTool /> */}
      <div ref={portfolioRef}>
      <Portfolio />
      </div>
    
      <div ref={contactUsRef}>
      <ContactUs />
      </div>
      
      <Footer scrollToRefs={scrollToRefs}/>
      </div>
    </>
  )
}
 