import React from 'react'
import Nav from '../Component/Nav/Nav'
import Banner2 from '../Component/Banner/Banner2'
import Work from '../Component/Work/Work'
import Research from '../Component/Research/Research'
import Customerreview from '../Component/Customerreview/Customerreview'
import Footer from '../Component/Footer/Footer'



export default function Project() {
  return (
    <>
      <Nav/>
      <Banner2 bannerName="Projects"/>
      <Work/>
      <Research/>
      <Customerreview/>
      <Footer/>
    </>
    )
}
