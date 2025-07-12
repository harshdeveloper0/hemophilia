import React from 'react'
import Hero from "@/components/Hero"
import News from '@/components/News'
import About from '@/components/About'
import Symptoms from '@/components/Symptoms'
import Treatment from '@/components/Treatments'
import Contact from '@/components/Contact'
import Footer2 from '@/components/Footer2'
import FactorInformatin from "@/components/FactorInformation"
import Meetings from '@/components/Meetings'

const page = () => {
  return (
    <div>
      <Hero/>
      <FactorInformatin/>
      
      {/* <Meetings/> */}
      <News/>
      <About/>
      <Symptoms/>
      <Treatment/>
      <Contact/>
      <Footer2/>

    </div>
  )
}

export default page