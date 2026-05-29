import {Navbar} from "./crm_landing_page/Navbar";
import {Hero} from "./crm_landing_page/Hero";
// import TrustedBy from "./crm_landing_page/TrustedBy";
import {Features} from "./crm_landing_page/Features";
import {Screenshots} from "./crm_landing_page/Screenshots";
import {MobileApp} from "./crm_landing_page/MobileApp";
import {HowItWorks} from "./crm_landing_page/HowItWorks";
import {Benefits} from "./crm_landing_page/Benefits";
import {Pricing} from "./crm_landing_page/Pricing";
// import Testimonials from "./crm_landing_page/Testimonials";
import {FAQ} from "./crm_landing_page/FAQ";
import {CTA} from "./crm_landing_page/CTA";
import {Contact} from "./crm_landing_page/Contact";
import {Footer} from "./crm_landing_page/Footer";
// import './crm_landing_page/styles/index.css'

export default function CRM() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* <TrustedBy /> */}
      <Features />
      <Screenshots />
      <MobileApp />
      <HowItWorks />
      <Benefits />
      <Pricing />
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
