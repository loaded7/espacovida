import React from 'react';
import { CalendarCheck, Instagram, Youtube } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma avaliação inicial no Espaço Vida.")}`;

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50" aria-label="Introdução">
      {/* Background Decorativo Animado - Fluid Motion */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[30rem] h-[30rem] bg-brand-100/60 rounded-full blur-3xl animate-blob-fluid" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[25rem] h-[25rem] bg-accent-500/20 rounded-full blur-3xl animate-blob-fluid" style={{ animationDelay: '-5s' }} aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-50/50 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 space-y-8 text-center md:text-left z-10">
            <div className="space-y-4">
              <div className="inline-block animate-fade-in-up">
                 <span className="py-1 px-3 bg-brand-100 text-brand-700 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-brand-200 transition-colors cursor-default shadow-sm">
                    Espaço Vida
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-[1.15]">
                <span className="block animate-fade-in-up delay-100">Sua saúde em</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 animate-fade-in-up delay-200">
                  perfeito equilíbrio.
                </span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0 animate-fade-in-up delay-300 leading-relaxed">
              Clínica multidisciplinar especializada. Fisioterapia, Pilates, Tratamentos Estéticos e Psicologia com um olhar integrado para o seu bem-estar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2 items-center animate-fade-in-up delay-400">
              
              {/* Botão Principal Diferenciado (Agendar Consulta) */}
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg shadow-xl shadow-brand-500/30 hover:bg-brand-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <CalendarCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Agendar Consulta
              </a>
              
              <div className="flex gap-3 pl-2 sm:border-l border-gray-200 sm:ml-2">
                <a 
                  href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-500 hover:text-pink-600 hover:scale-110 hover:shadow-md transition-all duration-300"
                  title="Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-500 hover:text-red-600 hover:scale-110 hover:shadow-md transition-all duration-300"
                  title="YouTube"
                >
                  <Youtube size={22} />
                </a>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-2 sm:grid-cols-2 lg:flex gap-x-6 gap-y-3 text-sm text-gray-600 font-medium border-t border-brand-100 mt-4 animate-fade-in-up delay-500">
              {['Fisioterapia', 'Pilates', 'Estética', 'Psicologia'].map((item, idx) => (
                <div key={item} className="flex items-center gap-2 justify-center md:justify-start hover:text-brand-600 transition-colors cursor-default">
                  <div className={`w-1.5 h-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(84,131,129,0.6)] animate-pulse`} style={{ animationDelay: `${idx * 200}ms` }} aria-hidden="true"></div> 
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative animate-fade-in-up delay-300">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white transform animate-float hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" 
                alt="Ambiente da Clínica" 
                className="w-full h-full object-cover"
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Elemento Decorativo Atrás */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-200 rounded-[2.5rem] -z-10 hidden md:block animate-float delay-500"></div>

            {/* Responsável Técnica Badge */}
            <div className="absolute bottom-6 -left-6 md:bottom-12 md:-left-12 z-20 hidden md:block animate-fade-in-up delay-700">
              <div className="bg-white/95 backdrop-blur-md py-4 px-6 rounded-2xl shadow-xl border border-white/50 hover:scale-105 transition-transform duration-300 cursor-default flex items-center gap-4 w-max pr-8 hover:shadow-2xl">
                 <div className="h-12 w-1.5 bg-brand-500 rounded-full shrink-0"></div>
                 <div>
                    <p className="font-bold text-gray-800 text-lg leading-tight whitespace-nowrap">Dra. Adriana Villalobos</p>
                    <p className="text-xs text-brand-600 font-bold uppercase tracking-wide mt-1">Responsável Técnica</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};