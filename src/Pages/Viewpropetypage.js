import React from 'react'
import Visitproperty from '../Component/Visitproperty/Visitproperty'
import Nav from '../Component/Nav/Nav'
import Footer from '../Component/Footer/Footer'
import Customerreview from '../Component/Customerreview/Customerreview'
import Banner2 from '../Component/Banner/Banner2'

export default function Viewpropetypage() {
  return (
    <>
       <Nav></Nav>
       <Banner2></Banner2>
       <Visitproperty></Visitproperty>
       <Customerreview></Customerreview>
       <Footer></Footer>
    </>
    )
}
