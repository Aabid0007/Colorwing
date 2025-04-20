import React from 'react'
import SubBanner from '../../Components/SubBanner/SubBanner'
import SupportSection from '../../Components/SupportSection/SupportSection'

const ContactPage = () => {
  return (
    <>
      <SubBanner
        firstPart="Our"
        highlightedText="support"
        secondPart='is always within reach, ready to guide you whenever you need.'
         svgType="contact"
      />
      <SupportSection />
    </>
  )
}

export default ContactPage