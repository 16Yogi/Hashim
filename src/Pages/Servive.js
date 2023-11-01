import React from 'react'
import Nav from '../Component/Nav/Nav'
import Banner2 from '../Component/Banner/Banner2'
import Service from '../Component/Service/Service'
import Footer from '../Component/Footer/Footer'
import Analysis from '../Component/Analysis/Analysis'
import Service2 from '../Component/Service/Service2'

export default function Servive() {
  return (
    <>
       <Nav/>
       <Banner2 bannerName="Our Services"/>
       <Service/>
       <Service2/>
       <Analysis/>
       <Footer/>
    </>
    )
}
