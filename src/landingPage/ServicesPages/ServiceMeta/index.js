import React, { useEffect } from 'react'
import { Banner } from './MetaOverview/Banner'
import { AboutMeta } from './MetaOverview/AboutMeta'
import { ServiceMeta } from './MetaOverview/Service'
import { MetaTool } from './MetaOverview/MetaTool'
import { BenefitMeta } from './MetaOverview/BenefitMeta'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import ContactUs from '../../../components/ContactUs/ContactUs'
import { Portfolio } from './MetaOverview/Portfolio'

export const MetaServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Header />
      <Banner />
      <AboutMeta />
      <ServiceMeta />
      <BenefitMeta />
      <MetaTool />
      <Portfolio />
      <ContactUs />
      <Footer />
    </>
  )
}
