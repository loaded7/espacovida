import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão após rolar 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-30 p-3 rounded-full bg-white text-brand-600 shadow-lg border border-gray-100 hover:bg-brand-50 hover:-translate-y-1 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>
    </>
  );
};