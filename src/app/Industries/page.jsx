import React from 'react'
import Industries from '../Industries/Industries'
import NavBar from "../NavBar/NavBar";
import { footerData } from "../Footer/Footerapi"
import Footer from "../Footer/Footer";

const page = () => {
  return (
 <>
   <NavBar />
 <Industries />
 <Footer
        services={footerData.services}
        quickLinks={footerData.quickLinks}
        contactDetails={footerData.contactDetails}
      />
 </>
  )
}

export default page