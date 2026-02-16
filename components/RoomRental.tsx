import React, { useEffect, useRef, useState } from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { Wifi, Snowflake, Coffee, Armchair, ShieldCheck, Key, CheckCircle2, Star } from 'lucide-react';

export const RoomRental: React.FC = () => {
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
    <section id="rental" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Lado Esquerdo: Conteúdo */}
          <div className={`flex-1 space-y-8 order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-xs font-bold tracking-widest uppercase mb-4">
                Para Profissionais
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
                Sua clínica, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                  sem burocracia.
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ofereça o melhor para seus pacientes em um ambiente sofisticado e totalmente equipado. 
                Ideal para fisioterapeutas, psicólogos, nutricionistas e médicos que buscam flexibilidade e estrutura de ponta sem o custo fixo de um consultório próprio.
              </p>
            </div>

            {/* Grid de Benefícios Moderno */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Snowflake, text: "100% Climatizado" },
                { icon: Armchair, text: "Mobiliado e Decorado" },
                { icon: Wifi, text: "Wi-Fi Alta Velocidade" },
                { icon: Coffee, text: "Copa e Café" },
                { icon: ShieldCheck, text: "Segurança e Portaria" },
                { icon: Key, text: "Locação por Hora/Período" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:text-brand-600 group-hover:bg-brand-50 transition-colors border border-gray-100" aria-hidden="true">
                    <item.icon size={20} />
                  </div>
                  <span className="font-medium text-gray-700 text-sm leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center border-t border-gray-100 animate-fade-in-up delay-500">
               <WhatsAppButton 
                 text="Consultar Disponibilidade" 
                 message="Olá! Sou profissional da saúde e tenho interesse no aluguel de salas do Espaço Vida."
                 className="w-full sm:w-auto justify-center"
               />
               <p className="text-xs text-gray-400 italic">
                 *Planos especiais para períodos fixos.
               </p>
            </div>
          </div>

          {/* Lado Direito: Mosaico Dinâmico (Collage Style) */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="relative h-[550px] w-full">
              
              {/* Elemento Decorativo de Fundo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand-50 rounded-full blur-3xl opacity-60 -z-10 animate-blob"></div>

              {/* Imagem Principal (Grande - Esquerda/Fundo) */}
              <div className={`absolute top-0 left-0 w-[70%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 group z-10 hover:z-30 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                 <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                  alt="Consultório principal" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Imagem Secundária 1 (Topo Direita - Sobreposta) */}
              <div className={`absolute top-8 right-0 w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-xl border-4 border-white transition-all duration-700 delay-200 group z-20 hover:z-30 hover:scale-110 hover:-rotate-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                 <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80" 
                  alt="Recepção" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Imagem Secundária 2 (Baixo Direita - Sobreposta) */}
              <div className={`absolute bottom-12 right-4 w-[40%] h-[35%] rounded-2xl overflow-hidden shadow-xl border-4 border-white transition-all duration-700 delay-300 group z-20 hover:z-30 hover:scale-110 hover:rotate-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                 <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80" 
                  alt="Detalhes" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Flutuante de Vidro */}
              <div className={`absolute bottom-24 left-[55%] -translate-x-1/2 bg-white/80 backdrop-blur-xl border border-white/60 p-4 pr-6 rounded-2xl shadow-xl z-40 flex items-center gap-4 transition-all duration-700 delay-500 hover:scale-105 cursor-default ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="bg-brand-600 p-3 rounded-xl text-white shadow-lg shadow-brand-600/30">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Ambiente Premium</p>
                  <div className="flex text-yellow-500 mt-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                  </div>
                </div>
              </div>

              {/* Badge Decorativa */}
              <div className={`absolute -bottom-4 left-10 bg-brand-100 text-brand-700 px-4 py-2 rounded-lg text-sm font-bold shadow-sm z-30 transform -rotate-3 transition-all duration-500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Pronto para usar!
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};