import React, { useRef } from 'react'
import Header from '../../../components/Header/Header'
import { BannerBlock } from './BlockchainOverview/BannerBlock'
import { AboutBlock } from './BlockchainOverview/AboutBlock'
import { BlockService } from './BlockchainOverview/BlockService'
import { BenefitBlock } from './BlockchainOverview/BenefitBlock'
// import { BlockTool } from './BlockchainOverview/BlockTool'
import { BlockPortfolio } from './BlockchainOverview/BlockPortfolio'
import ContactUs from '../../../components/ContactUs/ContactUs'
import Footer from '../../../components/Footer/Footer'
import ServiceHeader from '../../../components/Header/ServiceHeader'

export const BlockChain = () => {
 
  const portfolioRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToRefs = {
    portfolioRef,
    contactUsRef,
  };

  return (
    <>
      <ServiceHeader scrollToRefs={scrollToRefs} />
      <BannerBlock />
      <AboutBlock/>
      <BlockService />
      <BenefitBlock />
      {/* <BlockTool/> */}
      <div ref={portfolioRef}> <BlockPortfolio /></div> 
      <div ref={contactUsRef}><ContactUs /></div>
      <Footer scrollToRefs={scrollToRefs}/>
    </>
  )
}
