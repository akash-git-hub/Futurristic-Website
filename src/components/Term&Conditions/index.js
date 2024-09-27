import React from 'react'
import { BannerCondition } from './Banner'
import { TermConditionContent } from './TermConditionContent'
import TermsAndPrivacyHeader from '../Header/TermsAndPrivacyHeader'





export const TermCondition = () => {
  return (
    <>
      <TermsAndPrivacyHeader/>
      <BannerCondition/>
      <TermConditionContent/>
      {/* <Footer/> */}
      
    </>
  )
}
