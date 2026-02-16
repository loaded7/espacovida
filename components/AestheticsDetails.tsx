import React, { useEffect, useRef, useState } from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { Sparkles, Sun, Zap, Flower2, Thermometer, Snowflake, Waves, ArrowRight, X } from 'lucide-react';

export const AestheticsDetails: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Bloqueia o scroll da página quando o modal está aberto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section 
      id="aesthetics" 
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden scroll-mt-20 md:scroll-mt-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          
          {/* Imagem Principal */}
          <div className={`w-full lg:w-1/2 relative transition-opacity duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-pink-50 via-purple-50 to-transparent rounded-full opacity-60 blur-3xl" aria-hidden="true"></div>
             <img 
               src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80" 
               alt="Procedimento estético facial sendo realizado com cuidado e tecnologia" 
               className="relative z-10 w-full h-auto rounded-[2rem] shadow-2xl border-4 border-white"
               loading="lazy"
             />
          </div>

          {/* Conteúdo Principal */}
          <div className={`w-full lg:w-1/2 space-y-8 transition-opacity duration-700 ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4">
                <Sparkles size={16} aria-hidden="true" />
                <span>Estética Avançada</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                Beleza que reflete <br/>
                <span className="text-pink-500">sua melhor versão.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Unimos tecnologia de ponta e conhecimento dermatofuncional para oferecer tratamentos seguros e eficazes. Cuidamos da sua autoestima com protocolos personalizados para corpo e face.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
               <div className="flex gap-4 group">
                 <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true">
                    <Sun size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-800">Facial</h4>
                   <p className="text-sm text-gray-600 mt-1">Limpeza de pele, Peelings, Microagulhamento e Rejuvenescimento.</p>
                 </div>
               </div>
               
               <div className="flex gap-4 group">
                 <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true">
                    <Flower2 size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-800">Corporal</h4>
                   <p className="text-sm text-gray-600 mt-1">Drenagem Linfática, Massagem Modeladora e Tratamento de Celulite.</p>
                 </div>
               </div>

               <div className="flex gap-4 group">
                 <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true">
                    <Zap size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-800">Alta Tecnologia</h4>
                   <p className="text-sm text-gray-600 mt-1">Radiofrequência, Criolipólise e Ultrassom Microfocado.</p>
                 </div>
               </div>
            </div>

            {/* Botões de Ação */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
               <button 
                 onClick={openModal}
                 className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-pink-500 text-pink-600 font-medium hover:bg-pink-50 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-pink-500"
               >
                 Ver detalhes das Tecnologias
                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>

               <WhatsAppButton 
                 text="Agendar Avaliação" 
                 message="Olá! Gostaria de saber mais sobre os tratamentos estéticos do Espaço Vida."
                 className="!bg-pink-600 hover:!bg-pink-700 !shadow-pink-600/20 text-center justify-center" 
               />
            </div>

          </div>
        </div>

        {/* MODAL (POP-UP) */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
            {/* Backdrop com Blur */}
            <div 
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
              onClick={closeModal}
              aria-hidden="true"
            ></div>

            {/* Conteúdo do Modal */}
            <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-fade-in-up flex flex-col">
              
              {/* Botão Fechar */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 hover:text-gray-800 transition-colors z-10"
                aria-label="Fechar janela"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <div className="inline-flex items-center justify-center p-3 bg-pink-100 text-pink-600 rounded-full mb-4">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Tecnologias Transformadoras</h3>
                  <p className="text-gray-600">
                    Entenda como nossos equipamentos de última geração atuam no seu corpo para promover resultados reais.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Card 1: Radiofrequência */}
                  <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                    <div className="w-14 h-14 bg-white text-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <Thermometer size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Radiofrequência</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Utiliza calor profundo para estimular a produção natural de colágeno e elastina.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>Combate a flacidez</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>Melhora o contorno corporal</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>Suaviza rugas finas</li>
                    </ul>
                  </div>

                  {/* Card 2: Criolipólise */}
                  <div className="bg-cyan-50/50 p-6 rounded-2xl border border-cyan-100">
                    <div className="w-14 h-14 bg-white text-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <Snowflake size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Criolipólise</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Tecnologia de resfriamento controlado que congela e elimina células de gordura localizada.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>Redução de medidas</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>Tratamento não invasivo</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>Resultados progressivos</li>
                    </ul>
                  </div>

                  {/* Card 3: Ultrassom Microfocado */}
                  <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                    <div className="w-14 h-14 bg-white text-purple-500 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <Waves size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Ultrassom Microfocado</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Atinge as camadas mais profundas da pele, promovendo um efeito lifting sem cirurgia.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>Efeito lifting imediato</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>Definição do ângulo da mandíbula</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>Arquitetura facial renovada</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10 text-center pt-8 border-t border-gray-100">
                   <p className="text-gray-500 mb-4">Ficou com alguma dúvida sobre qual procedimento escolher?</p>
                   <WhatsAppButton 
                     text="Falar com Especialista" 
                     className="!bg-pink-600 hover:!bg-pink-700 !shadow-pink-600/20"
                   />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};