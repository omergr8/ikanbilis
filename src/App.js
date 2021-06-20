import logo from "./logo.svg";
import { Container, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Pages/Common/Navbar/Navbar";
import Footer from "./Pages/Common/Footer/Footer";
import simpleProcess from "./Assets/simpleProcess.svg";
import sixDots from "./Assets/sixDots.svg";
import smallCircle from "./Assets/smallCircle.svg";
import largeCircle from "./Assets/largeCircle.svg";
import Hero from "./Pages/Hero/Hero";
import ProfessionalTraders from "./Pages/ProfessionalTraders/ProfessionalTraders";
import PartnerCarousel from "./Pages/PartnerCarousel/PartnerCarousel";
import Evaluation from "./Pages/Evaluation/Evaluation";
import SimpleProcess from "./Pages/SimpleProcess/SimpleProcess";
import CustomerTestimonial from "./Pages/CustomerTestimonial/CustomerTestimonial";
import Faq from "./Pages/Faq/Faq";
import { ClassNames } from "@emotion/react";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Hero />
        <div className="simpleProcessBack">
          <img src={simpleProcess} alt="simpleProcessBack" />
        </div>
        <div className="sixDotsApp">
          <img src={sixDots} alt="simpleProcessBack" />
        </div>
        <div className="largeCircle">
          <img src={largeCircle} alt="largeCircle" />
        </div>
        <div className="smallCircle">
          <img src={smallCircle} alt="smallCircle" />
        </div>
        <div className="container">
          <ProfessionalTraders />
          <PartnerCarousel />
          <Evaluation />
          <div className="simpleProcess">
            <SimpleProcess />
          </div>
          <Faq />
          <CustomerTestimonial />
        </div>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
