import React from 'react'
import Card from '../components/Card'
import { Footer } from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Sidebar from '../layouts/Sidebar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Card/>
        <Sidebar/>
        <Footer/>
    </>
  )
}

export default Home