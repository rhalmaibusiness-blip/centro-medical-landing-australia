import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import WhoWeServe from './components/WhoWeServe';
import HowItWorks from './components/HowItWorks';
import WhyLocal from './components/WhyLocal';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

function LandingPage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <WhoWeServe />
      <HowItWorks />
      <WhyLocal />
      <CTASection />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;

