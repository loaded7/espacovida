import React, { useEffect, useRef, useState } from 'react';
import { Award, GraduationCap, ChevronRight, X, BookOpen, ScrollText, Star, User } from 'lucide-react';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax Effect Logic
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && imageRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Verifica se a seção está visível na tela
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calcula progresso relativo (0 quando entra, 1 quando sai)
          const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
          // Ajusta a posição Y da imagem (Parallax)
          // Move de -30px para +30px conforme o scroll
          const translateY = (progress - 0.5) * 60; 
          
          imageRef.current.style.transform = `scale(1.05) translateY(${translateY}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia o scroll quando o modal abre
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Foto Profissional - Vem da esquerda com Parallax */}
          <div className={`order-2 md:order-1 relative group transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="absolute inset-0 bg-brand-100 rounded-3xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" aria-hidden="true"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg z-10 aspect-[3/4] md:aspect-auto md:h-[600px]">
               <img 
                  ref={imageRef}
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80" 
                  alt="Dra. Adriana Villalobos, Fisioterapeuta" 
                  className="w-full h-full object-cover transition-transform duration-100 will-change-transform"
                  style={{ transform: 'scale(1.05)' }} // Base scale para evitar bordas brancas no parallax
                  loading="lazy"
                />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            {/* Apresentação da Clínica - Vem da direita */}
            <div className={`transition-all duration-1000 ease-out delay-100 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-sm font-bold rounded-full uppercase tracking-wide mb-4 hover:bg-brand-200 transition-colors cursor-default">
                Sobre Nós
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
                Espaço Vida: Saúde Integrada
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Somos uma clínica dedicada ao cuidado humanizado. Nascemos com o propósito de transformar vidas através do movimento e do equilíbrio.
              </p>
              
              {/* Conceito Multidisciplinar */}
              <div className="bg-white border-l-4 border-brand-500 pl-6 py-2 mb-8 hover:bg-gray-50 transition-colors rounded-r-lg">
                <h4 className="font-bold text-gray-800 text-lg mb-2">Conceito Multidisciplinar</h4>
                <p className="text-gray-600">
                  Acreditamos que a saúde não se resume a uma única área. Por isso, integramos <strong>Fisioterapia, Pilates, Estética e Psicologia</strong> em um único lugar, permitindo um tratamento completo e personalizado para cada paciente.
                </p>
              </div>
            </div>
            
            {/* Bloco da Adriana - Vem de baixo */}
            <div 
              className={`bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm relative hover:shadow-md transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-brand-800">Dra. Adriana Villalobos</h3>
                  <p className="text-brand-600 font-medium text-lg">Fundadora • Fisioterapeuta • Resp. Técnica</p>
                  <p className="text-sm text-gray-500 font-mono mt-1">CREFITO: 123456-F</p>
                </div>

                <hr className="border-gray-200" />

                <div className="space-y-4">
                    <div className="flex gap-3 group">
                        <div className="mt-1 bg-brand-100 p-1.5 rounded-lg text-brand-600 h-fit group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300" aria-hidden="true">
                           <GraduationCap size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">Formação</p>
                          <p className="text-gray-600">Graduada em Fisioterapia pela Universidade de São Paulo (USP).</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-3 group">
                        <div className="mt-1 bg-brand-100 p-1.5 rounded-lg text-brand-600 h-fit group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300" aria-hidden="true">
                           <Award size={18} />
                        </div>
                         <div>
                          <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">Especializações</p>
                          <ul className="text-gray-600 list-disc list-inside">
                            <li>Pós-graduação em Reabilitação Ortopédica</li>
                            <li>Formação em RPG (Reeducação Postural Global)</li>
                          </ul>
                        </div>
                    </div>
                </div>

                {/* Botão para abrir o Modal */}
                <button 
                  onClick={() => setShowModal(true)}
                  className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-brand-200 bg-white text-brand-700 font-bold hover:bg-brand-50 hover:border-brand-300 transition-all duration-300 group shadow-sm"
                >
                  Ver Currículo Completo
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DE CURRÍCULO */}
      {showModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity animate-fade-in-up"
            onClick={() => setShowModal(false)}
            aria-hidden="true"
          ></div>

          {/* Container do Modal */}
          <div className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl animate-scale-in flex flex-col max-h-[90vh] overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-white sticky top-0 z-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 border border-brand-200">
                    <User size={24} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-gray-800">Dra. Adriana Villalobos</h3>
                    <p className="text-sm text-brand-600 font-medium">Fisioterapeuta - CREFITO: 123456-F</p>
                 </div>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-800 transition-all"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Conteúdo com Scroll */}
            <div className="p-8 overflow-y-auto custom-scrollbar space-y-8">
              
              {/* Seção 1: Sobre */}
              <div>
                 <h4 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
                   <BookOpen size={20} className="text-brand-500" />
                   Biografia Profissional
                 </h4>
                 <p className="text-gray-600 leading-relaxed text-justify">
                   Com mais de 15 anos de experiência clínica, a Dra. Adriana dedica sua carreira ao estudo do movimento humano e ao alívio da dor. Fundou o Espaço Vida com a visão de que cada paciente é único e merece um tratamento que considere não apenas a lesão física, mas todo o contexto biopsicossocial.
                 </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                 {/* Seção 2: Formação Acadêmica */}
                 <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
                      <GraduationCap size={20} className="text-brand-500" />
                      Formação Acadêmica
                    </h4>
                    <ul className="space-y-4">
                       <li className="relative pl-4 border-l-2 border-brand-200 pb-1">
                          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-500"></div>
                          <p className="font-bold text-gray-800 text-sm">Bacharelado em Fisioterapia</p>
                          <p className="text-gray-500 text-xs">Universidade de São Paulo (USP) • 2008</p>
                       </li>
                       <li className="relative pl-4 border-l-2 border-brand-200 pb-1">
                          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-500"></div>
                          <p className="font-bold text-gray-800 text-sm">Pós-Graduação em Ortopedia</p>
                          <p className="text-gray-500 text-xs">Santa Casa de São Paulo • 2010</p>
                       </li>
                       <li className="relative pl-4 border-l-2 border-brand-200">
                          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-500"></div>
                          <p className="font-bold text-gray-800 text-sm">Mestrado em Ciências da Reabilitação</p>
                          <p className="text-gray-500 text-xs">UNIFESP • 2013</p>
                       </li>
                    </ul>
                 </div>

                 {/* Seção 3: Certificações */}
                 <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
                      <ScrollText size={20} className="text-brand-500" />
                      Cursos e Certificações
                    </h4>
                    <ul className="space-y-3">
                       {[
                         "Formação Internacional em RPG Souchard",
                         "Instrutora de Pilates (Completo) - Physio Pilates",
                         "Dry Needling (Agulhamento a Seco)",
                         "Conceito Mulligan de Terapia Manual",
                         "Reabilitação Vestibular Avançada",
                         "Fisioterapia Pélvica Funcional"
                       ].map((item, idx) => (
                         <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                           <Star size={14} className="text-brand-400 mt-1 shrink-0" fill="currentColor" />
                           {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
               <button 
                 onClick={() => setShowModal(false)}
                 className="px-6 py-2 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20"
               >
                 Fechar
               </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};