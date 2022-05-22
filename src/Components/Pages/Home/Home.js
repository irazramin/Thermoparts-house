import React from 'react'
import Footer from '../../Shared/Footer'
import Banner from './Banner'
import Business from './Business'
import Tools from './Tools/Tools'

const Home = () => {
  return (
    <div>
        <Banner />
        <Tools/>
        <Business/>
        <Footer/>
    </div>
  )
}

export default Home