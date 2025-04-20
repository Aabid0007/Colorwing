import React from 'react'
import OurClients from '../../Components/OurClients/OurClients'
import SubBanner from '../../Components/SubBanner/SubBanner'
import OurServicesDetails from '../../Components/OurServicesDetails/OurServicesDetails'

const ServicesPage = () => {
  return (
    <>
      <SubBanner
        firstPart="Empowering you with seamless solutions—whenever you need,"
        highlightedText="we're here to help"
        svgType="services"
      />
      <OurServicesDetails />
      <OurClients />
    </>
  )
}

export default ServicesPage