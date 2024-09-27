import React from 'react' 
import { BannerPrivacy } from './Banner'
import { PrivacyContent } from './PrivacyContent'
import TermsAndPrivacyHeader from '../Header/TermsAndPrivacyHeader'

export const PrivacyPolicy = () => {
  return (
    <>
      <TermsAndPrivacyHeader/>
      <BannerPrivacy/>
      <PrivacyContent/>
      {/* <Footer/> */}
    </>
  )
}
