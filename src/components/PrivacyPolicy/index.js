import React from 'react'
import Header from '../Header/Header'
import { BannerPrivacy } from './Banner'
import { PrivacyContent } from './PrivacyContent'
import Footer from '../Footer/Footer'





export const PrivacyPolicy = () => {
  return (
    <>
      <Header/>
      <BannerPrivacy/>
      <PrivacyContent/>
      <Footer/>
    </>
  )
}
