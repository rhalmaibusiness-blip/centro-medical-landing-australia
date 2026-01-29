import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <WhoWeServe />
        <HowItWorks />
        <WhyLocal />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
