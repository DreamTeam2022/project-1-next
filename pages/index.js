import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Carousel from '../sections/Carousel'
import Deep from '../sections/Deep'
import Hero from '../sections/Hero'
import Lead from '../sections/Lead'
import Smartfeed from '../sections/Smartfeed'

export default function index() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Lead/>
    <Deep/>
    <Smartfeed/>
    <Carousel/>
    <Footer/>
    </>
  )
}
