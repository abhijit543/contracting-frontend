import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/Pages/home/Home";
import Footer from "./components/common/Footer";
import Aboutus from "./components/Pages/about/Aboutus";
import Clients from "./components/Pages/clients/Clients";
import FaqPage from "./components/Pages/faq/Faq";
import Services from "./components/Pages/services/Services";
import PortFolio from "./components/Pages/portfolio/PortFolio";
// import PricingPlan from "./components/Pages/price/Price";
import Projects from "./components/Pages/projects/Projects";
import LifeCycle from "./components/Pages/project-lifecycle/LifeCycle";

import ContactUs from "./components/Pages/contactus/Contactus";
import RecentProject from "./components/Pages/recent-project/RecentProject";
// import SpacePlanning from "./components/Pages/space-planning/SpacePlanning";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<PortFolio />} />
        {/* <Route path="/pricing" element={<PricingPlan />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-lifecycle" element={<LifeCycle />} />
      
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/recent-project" element={<RecentProject />} />

        {/* <Route path="/space-planning" element={<SpacePlanning />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
