import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/pages/home/Home";
import Footer from "./components/common/Footer";
import Aboutus from "./components/Pages/about/Aboutus";
import Team from "./components/Pages/team/Team";
import FaqPage from "./components/Pages/faq/Faq";
import Services from "./components/Pages/services/Services";
import PortFolio from "./components/Pages/portfolio/PortFolio";
import PricingPlan from "./components/Pages/price/Price";
import BeforeAfter from "./components/Pages/before-after/Beforeafter";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/pricing" element={<PricingPlan />} />
        <Route path="/before-after" element={<BeforeAfter />} />
      </Routes>
      <Footer />
    </>
  );
}
