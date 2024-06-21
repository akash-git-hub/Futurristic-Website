import React from 'react'
import Header from '../Header/Header'
import { BannerCondition } from './Banner'
import { TermConditionContent } from './TermConditionContent'
import Footer from '../Footer/Footer'





export const TermCondition = () => {
  return (
    <>
      <Header/>
      <BannerCondition/>
      <TermConditionContent/>
      <Footer/>
    </>
  )
}
