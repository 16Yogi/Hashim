import React from 'react'
import Aboutservice from '../Component/Service/Aboutservice'
import Nav from '../Component/Nav/Nav'
import Analysis from '../Component/Analysis/Analysis'
import Customerreview from '../Component/Customerreview/Customerreview'
import Footer from '../Component/Footer/Footer'
import Banner2 from '../Component/Banner/Banner2'

export default function Serviceitem() {
  return (
    <>
      <Nav/>
      <Banner2 bannerName="Welcome to Apni Zameen"/>
      <Aboutservice/>
      <Analysis/>
      <Customerreview/>
      <Footer/>
    </>
    )
}
