import React, { useEffect, useRef, useState } from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { Move, User, Activity, CheckCircle2 } from 'lucide-react';

export const PilatesDetails: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="pilates" 
      ref={sectionRef}
      className="py-24 bg-brand-50/30 overflow-hidden scroll-mt-20 md:scroll-mt-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Imagem */}
          <div className={`w-full lg:w-1/2 relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
             <div className="absolute top-0 right-0 -mr-4 -mt-4 w-32 h-32 bg-brand-200 rounded-full opacity-40 blur-2xl" aria-hidden="true"></div>
             <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-40 h-40 bg-accent-500 rounded-full opacity-20 blur-2xl" aria-hidden="true"></div>
             <img 
               src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80" 
               alt="Aluna praticando Pilates em equipamento Reformer com instrutora supervisionando" 
               className="relative z-10 w-full h-auto rounded-2xl shadow-xl transform hover:scale-[1.01] transition-transform duration-500"
               loading="lazy"
             />
             <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 bg-white p-4 rounded-xl shadow-lg z-20 border border-gray-100 animate-float">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Corpo & Mente</p>
                  <p className="text-xs text-gray-500">Conexão total</p>
                </div>
             </div>
          </div>

          {/* Conteúdo */}
          <div className={`w-full lg:w-1/2 space-y-8 order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up animation-delay-200 opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
                <Move size={16} aria-hidden="true" />
                <span>Movimento Consciente</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                Pilates Clínico e Fitness: <br/>
                <span className="text-brand-600">Força, flexibilidade e controle.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Mais do que um exercício, o Pilates é uma filosofia de movimento. No Espaço Vida, oferecemos aulas personalizadas (máximo 2 alunos por instrutor) focadas em seus objetivos, seja reabilitação de lesões, correção postural ou condicionamento físico.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Correção Postural e Alívio de Dores nas Costas",
                "Tonificação Muscular e Definição (Core)",
                "Aumento da Flexibilidade e Mobilidade Articular",
                "Prevenção de Lesões em Atletas",
                "Pilates para Gestantes e Idosos"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 text-brand-500 shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-brand-100">
               <p className="text-gray-600 mb-6 text-sm italic">
                 "Com 10 sessões você perceberá a diferença, com 20 sessões os outros irão perceber a diferença e com 30 sessões você terá um novo corpo." — Joseph Pilates
               </p>
               <WhatsAppButton 
                 text="Agendar Aula Experimental" 
                 message="Olá! Gostaria de agendar uma aula experimental de Pilates."
                 className="w-full sm:w-auto justify-center" 
               />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};