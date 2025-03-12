import React from 'react'

import NavBar from "../NavBar/NavBar";
import { footerData } from "../Footer/Footerapi"
import Footer from "../Footer/Footer";
import Header from '../work/header';


const page = () => {
  return (
   <>
   <NavBar />
 <Header />
 <Footer
        services={footerData.services}
        quickLinks={footerData.quickLinks}
        contactDetails={footerData.contactDetails}
      />
   </>
  )
}

export default page