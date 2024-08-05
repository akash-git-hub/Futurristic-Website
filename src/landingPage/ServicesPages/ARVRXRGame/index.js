import React, { useEffect } from 'react'
import Header from '../../../components/Header/Header'
import { ARVRXRBanner } from './ARVRXROverview/BannerARVRXR'
import { AboutARVRXR } from './ARVRXROverview/AboutARVRXR'
import { ARVRXRservice } from './ARVRXROverview/ARVRXRService'
import { BenefitsARVRXR } from './ARVRXROverview/BenefitARVRXR'
import { ARVRXRTool } from './ARVRXROverview/ARVRXRTool'
import { ARVRXRPortfolio } from './ARVRXROverview/ARVRXRPortfolio'
import ContactUs from '../../../components/ContactUs/ContactUs'
import Footer from '../../../components/Footer/Footer'

export const ARVRXRGame = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <ARVRXRBanner />
      <AboutARVRXR />
      <ARVRXRservice />
      <BenefitsARVRXR />
      {/* <ARVRXRTool /> */}
      <ARVRXRPortfolio/>
      <ContactUs />
      <Footer />
    </>
  )
}
