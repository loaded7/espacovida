import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-white relative overflow-hidden" 
      aria-labelledby="testimonials-heading"
    >
      {/* Background Decorativo Animado (Blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block animate-bounce duration-[2000ms]">
             <span className="py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-xs font-bold tracking-widest uppercase mb-4 inline-block">
               Feedback
             </span>
          </div>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Histórias Reais
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A satisfação de quem confia sua saúde e bem-estar em nossas mãos.
          </p>
        </div>
        
        {/* Grid de Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className={`
                group bg-white p-8 rounded-[2rem] 
                border border-gray-100 
                shadow-[0_10px_30px_rgba(0,0,0,0.04)] 
                hover:shadow-[0_20px_40px_-15px_rgba(84,131,129,0.2)] 
                hover:border-brand-100 hover:-translate-y-2 
                transition-all duration-500 ease-out 
                flex flex-col relative
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{ transitionDelay: `${i * 150}ms` }} // Delay escalonado para entrada em cascata
            >
              {/* Ícone de Aspas Flutuante */}
              <div className="absolute -top-6 left-8 w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30 transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-brand-600">
                 <Quote size={28} fill="currentColor" className="text-white" />
              </div>

              {/* Estrelas Animadas */}
              <div className="mt-8 flex gap-1.5 mb-6 text-amber-400">
                {[...Array(5)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    size={18} 
                    fill="currentColor" 
                    className="transform transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${starIndex * 50}ms` }} // Estrelas crescem em sequência no hover
                  />
                ))}
              </div>
              
              {/* Texto do Depoimento */}
              <p className="text-gray-600 mb-8 relative z-10 text-lg leading-relaxed flex-1 italic">
                "{t.text}"
              </p>
              
              {/* Rodapé do Card (Autor) */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center text-brand-700 font-bold text-lg shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{t.name}</div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-600 font-bold uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 size={14} className="text-brand-500" />
                    Paciente Verificado
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};