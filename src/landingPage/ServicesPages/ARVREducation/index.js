import React, { useEffect } from 'react'
import Header from '../../../components/Header/Header'
import { ARVRBanner } from './ARVROverview/BannerARVR'
import { AboutARVR } from './ARVROverview/AboutARVR'
import { ARVRservice } from './ARVROverview/ARVRService'
import { BenefitsARVR } from './ARVROverview/BenefitARVR'
import { ARVRTool } from './ARVROverview/ARVRTool'
import { ARVRPortfolio } from './ARVROverview/ARVRPortfolio'
import ContactUs from '../../../components/ContactUs/ContactUs'
import Footer from '../../../components/Footer/Footer'

export const ARVRTraning = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <ARVRBanner />
      <AboutARVR />
      <ARVRservice />
      <BenefitsARVR />
      <ARVRTool />
      <ARVRPortfolio/>
      <ContactUs />
      <Footer />
    </>
  )
}
