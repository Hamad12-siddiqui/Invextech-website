import React from 'react'
import Header from '../ContactUs/Header'
import NavBar from "../NavBar/NavBar";
import { footerData } from "../Footer/Footerapi"
import Footer from "../Footer/Footer";
import Projects from '../Projects/Projects'
const page = () => {
  return (
 <>
   <NavBar />
<Header />
<Projects />
 <Footer
        services={footerData.services}
        quickLinks={footerData.quickLinks}
        contactDetails={footerData.contactDetails}
      />
 </>
  )
}

export default page