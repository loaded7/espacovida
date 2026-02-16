import React, { useEffect, useRef, useState } from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { Activity, Zap, Move, HeartPulse } from 'lucide-react';

export const PhysiotherapyDetails: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Anima apenas uma vez
        }
      },
      { threshold: 0.2 } // Dispara quando 20% do elemento estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="fisioterapia" 
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden scroll-mt-20 md:scroll-mt-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          
          <div className={`w-full lg:w-1/2 relative transition-opacity duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
             <div className="absolute top-0 right-0 -mr-4 -mt-4 w-32 h-32 bg-brand-200 rounded-full opacity-50 blur-2xl" aria-hidden="true"></div>
             <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-40 h-40 bg-accent-500 rounded-full opacity-30 blur-2xl" aria-hidden="true"></div>
             <img 
               src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
               alt="Fisioterapeuta realizando mobilização articular em paciente na maca" 
               className="relative z-10 w-full h-auto rounded-2xl shadow-xl transform hover:scale-[1.01] transition-transform duration-500"
               loading="lazy"
             />
          </div>

          <div className={`w-full lg:w-1/2 space-y-8 transition-opacity duration-700 ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
                <Activity size={16} aria-hidden="true" />
                <span>Reabilitação Física</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                Fisioterapia Avançada: <br/>
                <span className="text-brand-600">Recupere sua liberdade de movimento.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nossa abordagem une técnicas manuais, tecnologia e exercícios terapêuticos para tratar a causa da dor, não apenas os sintomas. Desenvolvemos protocolos individualizados para ortopedia, neurologia e saúde do idoso.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
               <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0" aria-hidden="true">
                    <Move size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-800">Cinesioterapia</h4>
                   <p className="text-sm text-gray-600 mt-1">Exercícios terapêuticos para fortalecimento e mobilidade.</p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0" aria-hidden="true">
                    <Zap size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-800">Eletroterapia</h4>
                   <p className="text-sm text-gray-600 mt-1">Recursos tecnológicos para analgesia e regeneração tecidual.</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0" aria-hidden="true">
                    <HeartPulse size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-800">Terapia Manual</h4>
                   <p className="text-sm text-gray-600 mt-1">Mobilizações e manipulações para alívio imediato da dor.</p>
                 </div>
               </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
               <WhatsAppButton text="Agendar Avaliação Fisioterapêutica" className="w-full sm:w-auto justify-center" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};