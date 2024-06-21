import React, { useEffect } from 'react'
import Header from '../../../components/Header/Header'
import { BannerBlock } from './BlockchainOverview/BannerBlock'
import { AboutBlock } from './BlockchainOverview/AboutBlock'
import { BlockService } from './BlockchainOverview/BlockService'
import { BenefitBlock } from './BlockchainOverview/BenefitBlock'
import { BlockTool } from './BlockchainOverview/BlockTool'
import { BlockPortfolio } from './BlockchainOverview/BlockPortfolio'
import ContactUs from '../../../components/ContactUs/ContactUs'
import Footer from '../../../components/Footer/Footer'

export const BlockChain = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <BannerBlock />
      <AboutBlock/>
      <BlockService />
      <BenefitBlock />
      <BlockTool/>
      <BlockPortfolio />
      <ContactUs />
      <Footer />
    </>
  )
}
