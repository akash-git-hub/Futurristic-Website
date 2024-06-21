import React, { useEffect } from 'react'
import Header from '../../../components/Header/Header'
import { BannerMobileApp } from './MobileAppOverview/BannerMobileApp'
import { AboutMobileApp } from './MobileAppOverview/AboutMobileApp'
import { MobileAppservice } from './MobileAppOverview/MobileAppService'
import { BenefitsMobileApp } from './MobileAppOverview/BenefitMobileApp'
import { MobileAppTool } from './MobileAppOverview/MobileAppTool'
import { MobileAppPortfolio } from './MobileAppOverview/MobileAppPortfolio'
import ContactUs from '../../../components/ContactUs/ContactUs'
import Footer from '../../../components/Footer/Footer'

export const MobileApp = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <BannerMobileApp />
      <AboutMobileApp />
      <MobileAppservice />
      <BenefitsMobileApp />
      <MobileAppTool />
      <MobileAppPortfolio/>
      <ContactUs />
      <Footer />
    </>
  )
}
