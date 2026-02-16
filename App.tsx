import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { RoomRental } from './components/RoomRental';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services /> {/* Agora os detalhes abrem como Pop-up aqui dentro */}
        <RoomRental />
        <Testimonials />
        <FAQ />
      </main>

      <Contact />

      <ScrollToTop />

      {/* Floating WhatsApp Button - Visível em todas as telas agora */}
      <div className="fixed bottom-6 right-6 z-40">
        <WhatsAppButton 
          text="" 
          className="rounded-full w-14 h-14 !p-0 flex items-center justify-center !px-0 shadow-xl hover:scale-110 transition-transform" 
        />
      </div>
    </div>
  );
}

export default App;