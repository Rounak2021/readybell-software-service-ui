import './App.css';
import Home from './components/page components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/assets/css/aos.css"
// import "./components/assets/css/bootstrap.min.css"
import "./components/assets/css/font-awesome.min.css"
import "./components/assets/css/jquery.fancybox.min.css"
import "./components/assets/css/owl.carousel.min.css"
import "./components/assets/css/style.css"
import "./components/assets/css/aos.css"
import "./components/assets/css/swiper.min.css"
import Footer from './components/page components/Footer';
import About from './components/page components/about';
import Header from './components/page components/Header';
import WhyRreadybell from './components/page components/why-readybell';
import Affilliations from './components/page components/our-affilliations';
import Team from './components/page components/our-team';
import Services from './components/page components/our-services';
import Contact from './components/page components/contact';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-readybell" element={<WhyRreadybell />} />
          <Route path="/affiliations" element={<Affilliations />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/asa" element={<Home />} />
          <Route path="/ccna" element={<Home />} />
          <Route path="/ccnp-encor" element={<Home />} />
          <Route path="/ccnp-scor" element={<Home />} />
          <Route path="/ccnp-vpn" element={<Home />} />
          <Route path="/cloudcomputing" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/ftd-fmc" element={<Home />} />
          <Route path="/java" element={<Home />} />
          <Route path="/mean" element={<Home />} />
          <Route path="/mern" element={<Home />} />
          <Route path="/node" element={<Home />} />
          <Route path="/node-sql" element={<Home />} />
          <Route path="/affiliations" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/team" element={<Home />} />
          <Route path="/python" element={<Home />} />
          <Route path="/ui" element={<Home />} />
          <Route path="/vpn" element={<Home />} />
          <Route path="/why-readybell" element={<Home />} /> */}

        </Routes>
        <Footer />

      </div>
    </BrowserRouter>

  );
}

export default App;
