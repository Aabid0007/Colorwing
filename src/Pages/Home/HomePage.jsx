import React from 'react'
import Banner from '../../Components/Banner/Banner';
import AboutUs from '../../Components/AboutUs/AboutUs';
import OurServices from '../../Components/OurServices/OurServices';
import SampleVideo from '../../Components/SampleVideo/SampleVideo';
import ClientCarousel from '../../Components/ClientCarousel/ClientCarousel';
import OurClients from '../../Components/OurClients/OurClients';

const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <OurServices />
      <SampleVideo />
      <ClientCarousel />
      <OurClients />
    </>
  )
}

export default HomePage

