import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#' || href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappScheduleUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de verificar horários disponíveis para agendamento.")}`;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white shadow-sm py-3' 
          : 'bg-white/80 backdrop-blur-md py-5 shadow-none'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl font-bold text-brand-700 tracking-tight focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-md p-1 cursor-pointer"
          aria-label="Espaço Vida - Ir para o topo"
        >
          ESPAÇO <span className="text-brand-500">VIDA</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Menu principal">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-600 hover:text-brand-600 font-medium transition-colors text-sm uppercase tracking-wide focus:outline-none focus:text-brand-700 focus:underline decoration-2 underline-offset-4 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          
          {/* Botão com cara de Agendar (Calendário) */}
          <a 
            href={whatsappScheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            <Calendar size={18} />
            Agendar Horário
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4"
        >
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-gray-700 hover:text-brand-600 font-medium py-2 border-b border-gray-50 focus:outline-none focus:bg-brand-50 focus:pl-2 transition-all rounded cursor-pointer"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a 
              href={whatsappScheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-lg font-bold shadow-md active:scale-95 transition-all"
            >
              <Calendar size={20} />
              Agendar Horário
            </a>
          </div>
        </div>
      )}
    </header>
  );
};