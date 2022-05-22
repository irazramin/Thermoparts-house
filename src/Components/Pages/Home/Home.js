import React from 'react'
import Footer from '../../Shared/Footer'
import Aboutus from './Aboutus'
import Banner from './Banner'
import Business from './Business'
import Reviews from './Reviews/Reviews'
import Services from './Services'
import Tools from './Tools/Tools'

const Home = () => {
  return (
    <div>
        <Banner />
        <Tools/>
        <Business/>
        <Services/>
        <Reviews />
        <Aboutus />
        <Footer/>
    </div>
  )
}

export default Home