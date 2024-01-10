import React from 'react'
import Nav from '../Component/Nav/Nav'
import Banner2 from '../Component/Banner/Banner2'
import Service from '../Component/Service/Service'
import Servicesall from '../Component/Serviceall/Servicesall'
import Footer from '../Component/Footer/Footer'
import Research from '../Component/Research/Research'
import Analysis from '../Component/Analysis/Analysis'

export default function Sellbuy() {
    return (
        <>
            <Nav />
            <Banner2 bannerName="Sell & Buy"/>
            <Service />
            <Servicesall />
            <Research/>
            <Analysis/>
            <Footer/>
        </>
    )
}
