import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Difference from './components/Difference';
import UseCase from './components/UseCase';
import Feedback from './components/Feedback';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#101010]">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Difference />
        <UseCase />
        <Feedback />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;