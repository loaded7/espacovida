import React, { useEffect, useRef, useState } from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { Brain, Heart, Lightbulb, UserCheck } from 'lucide-react';

export const PsychologyDetails: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Anima apenas uma vez quando aparece
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
      id="psychology" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-brand-50/30 overflow-hidden scroll-mt-20 md:scroll-mt-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Imagem com animação vindo de baixo */}
          <div className={`w-full lg:w-1/2 relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
             <div className="absolute top-0 right-0 -mr-4 -mt-4 w-32 h-32 bg-brand-100 rounded-full opacity-50 blur-2xl" aria-hidden="true"></div>
             <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-40 h-40 bg-pink-100 rounded-full opacity-50 blur-2xl" aria-hidden="true"></div>
             <img 
               src="https://images.unsplash.com/photo-1520206183501-b80df610434f?auto=format&fit=crop&w=800&q=80" 
               alt="Sala de atendimento psicológico acolhedora com poltrona confortável e iluminação suave" 
               className="relative z-10 w-full h-auto rounded-2xl shadow-xl transform hover:scale-[1.01] transition-transform duration-500"
               loading="lazy"
             />
             <div className="absolute -bottom-6 right-8 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs border-l-4 border-brand-400 hidden md:block">
                <p className="text-gray-600 italic font-medium">"Conhece-te a ti mesmo."</p>
             </div>
          </div>

          {/* Conteúdo de texto com animação e delay */}
          <div className={`w-full lg:w-1/2 space-y-8 order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up animation-delay-200 opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
                <Brain size={16} aria-hidden="true" />
                <span>Saúde Mental</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                Psicologia Clínica: <br/>
                <span className="text-brand-600">Um espaço de escuta e transformação.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Acreditamos que a saúde mental é o alicerce para uma vida plena. Oferecemos um ambiente seguro, sigiloso e acolhedor para você trabalhar suas emoções, superar desafios e reencontrar seu equilíbrio.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
               <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0" aria-hidden="true">
                    <UserCheck size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-800">Terapia Individual</h4>
                   <p className="text-sm text-gray-600 mt-1">Sessões personalizadas para adolescentes e adultos, focadas nas suas necessidades.</p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 shrink-0" aria-hidden="true">
                    <Heart size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-800">Gestão Emocional</h4>
                   <p className="text-sm text-gray-600 mt-1">Aprenda a lidar com ansiedade, estresse e conflitos de forma saudável.</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 shrink-0" aria-hidden="true">
                    <Lightbulb size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-800">Autoconhecimento</h4>
                   <p className="text-sm text-gray-600 mt-1">Descubra seus potenciais e ressignifique sua história de vida.</p>
                 </div>
               </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
               <p className="text-gray-600 mb-6 text-sm">
                 Nossa abordagem é humanizada e baseada em evidências científicas. Agende uma conversa inicial para conhecer nosso trabalho.
               </p>
               <WhatsAppButton text="Agendar Sessão de Terapia" className="w-full sm:w-auto justify-center" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};