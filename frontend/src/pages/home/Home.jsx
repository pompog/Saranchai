import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import Top10 from '../shop/Top10'
import DealsSection from './DealsSection'
import PromoBanner from './PromoBanner'
import Footer from '../../components/Footer'


const Home = () => {
  return (
    <>
    <Banner></Banner>
    <Categories></Categories>
    <HeroSection></HeroSection>
    <Top10></Top10>
    <DealsSection/>
    <PromoBanner/>
    <Footer/>
    </>
  )
}

export default Home