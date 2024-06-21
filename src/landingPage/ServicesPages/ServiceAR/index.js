import React, { useEffect } from 'react'
import { BannerAR } from './AROverview/BannerAR'
import { AboutAR } from './AROverview/AboutAR'
import { BenefitAR } from './AROverview/BenefitAR'
import { ServiceAR } from './AROverview/ServiceAR'
import { ARTool } from './AROverview/ARTool'
import { PortfolioAR } from './AROverview/PortfolioAR'
import ContactUs from '../../../components/ContactUs/ContactUs'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'


export const WebARServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <BannerAR />
      <AboutAR />
      <ServiceAR />
      <BenefitAR />
      <ARTool />
      <PortfolioAR />
      <ContactUs />
      <Footer />
    </>
  )
}
