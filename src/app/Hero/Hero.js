import Image from "next/image";
import Services from "../Services/Services";
import Main from "../Progress/Main";
import TabComponent from "../Development/Development";
import Talk from "../TalkExpert/Talk";
import Team from "../OwnTeam/Team";
import Projects from "../Projects/Projects";
import NavBar from "../NavBar/NavBar";
import { footerData } from "../Footer/Footerapi"
import Footer from "../Footer/Footer";

const Hero = () => {
  return (
    <>
    
    <NavBar />
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Digital product development background"
        fill
        quality={100}
        className="absolute inset-0 z-0 object-cover"
        priority 
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-center text-white max-w-[800px] mx-4 md:mx-20">
        <p className="text-start text-lg mb-4">
          All-IN-ONE Digital Product Development
        </p>

        <h1 className="text-3xl font-bold md:text-4xl mt-4 font-roboto-slab">
          Maximize Your Digital Potential with BrainX Full Stack Development Services
        </h1>

        <div className="mt-12">
          <button
            className="bg-sky-500 py-3 px-8 rounded-full text-md hover:bg-blue-500 transition duration-300"
            aria-label="Let's Talk"
          >
            LET'S TALK
          </button>
        </div>
      </div>

      {/* Group1 and Vector Images with Text */}
      {/* <div className="relative z-10">
        <Image
          src="/images/frame.png"
          alt="Frame"
          width={1000} 
          height={300} 
          className="absolute bottom-0 right-64"
        />
      </div> */}
    </section>
    <Services />
    <Main />
    <TabComponent />
    <Talk />
    <Team />
    <Projects />
    <Footer
        services={footerData.services}
        quickLinks={footerData.quickLinks}
        contactDetails={footerData.contactDetails}
      />
    </>
  );
};

export default Hero;




