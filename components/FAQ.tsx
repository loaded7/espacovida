import React, { useState, useEffect, useRef } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, CONTACT_INFO } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Mensagem personalizada para quem vem do FAQ
  const whatsappMessage = "Olá! Li as perguntas frequentes no site, mas ainda tenho uma dúvida específica. Poderiam me ajudar?";
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden relative">
       {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl animate-blob pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Lado Esquerdo: Cabeçalho */}
          <div className={`lg:w-1/3 space-y-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-700 text-sm font-bold rounded-full uppercase tracking-wide">
              <HelpCircle size={16} />
              <span>Dúvidas</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Perguntas <br />
              <span className="text-brand-600">Frequentes</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Separamos as principais dúvidas de nossos pacientes para te ajudar. Se não encontrar o que procura, nossa equipe está pronta para atender no WhatsApp.
            </p>

            <div className="hidden lg:block pt-8">
               <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                  <h4 className="font-bold text-gray-800 mb-2 relative z-10">Ainda tem dúvidas?</h4>
                  <p className="text-sm text-gray-500 mb-4 relative z-10">Nossa equipe de atendimento está disponível para te ajudar agora.</p>
                  
                  {/* Link direto para WhatsApp mantendo o estilo discreto */}
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 font-bold text-sm hover:underline relative z-10 inline-flex items-center gap-1 cursor-pointer focus:outline-none transition-transform hover:translate-x-1"
                  >
                    Fale Conosco &rarr;
                  </a>
               </div>
            </div>
          </div>

          {/* Lado Direito: Acordeão */}
          <div className={`lg:w-2/3 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <div 
                  key={index} 
                  className={`group bg-white rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden ${
                    openIndex === index 
                      ? 'border-brand-200 shadow-[0_10px_40px_-10px_rgba(84,131,129,0.15)]' 
                      : 'border-gray-100 hover:border-brand-200 hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 md:py-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={openIndex === index}
                  >
                    <span className={`font-bold text-lg transition-colors duration-300 leading-snug ${
                      openIndex === index ? 'text-brand-700' : 'text-gray-700 group-hover:text-brand-600'
                    }`}>
                      {item.question}
                    </span>
                    
                    {/* Ícone Animado */}
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] border ${
                      openIndex === index 
                        ? 'bg-brand-600 text-white border-brand-600 rotate-180 shadow-md' 
                        : 'bg-gray-50 text-gray-400 border-gray-100 group-hover:bg-brand-50 group-hover:text-brand-600 group-hover:border-brand-100'
                    }`}>
                      <ChevronDown size={20} className="transition-transform duration-700" />
                    </div>
                  </button>

                  {/* Conteúdo com Grid Animation Fluida */}
                  <div 
                    className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-base border-t border-dashed border-transparent">
                        <div 
                          className={`
                            pt-4 transform transition-all duration-700 ease-out 
                            ${openIndex === index 
                              ? 'opacity-100 translate-y-0 delay-100' 
                              : 'opacity-0 -translate-y-4' // Movimento sutil de "descida" ou "subida"
                            }
                          `}
                        >
                           {/* Linha separadora que expande */}
                           <div className={`h-px bg-brand-100 mb-4 transition-all duration-700 ${openIndex === index ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
                           {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};