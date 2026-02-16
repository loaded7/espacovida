import React, { useEffect, useRef, useState } from 'react';
import { SERVICES_DATA } from '../constants';
import { Check, ArrowRight, X, Activity, Zap, Move, HeartPulse, Sparkles, Sun, Flower2, Thermometer, Snowflake, Waves, Brain, UserCheck, Heart, Lightbulb, CheckCircle2, Quote } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeService]);

  const openModal = (title: string) => setActiveService(title);
  const closeModal = () => setActiveService(null);

  // --- CONTEÚDO DOS MODAIS (Design Moderno & Animado) ---
  const renderModalContent = () => {
    switch (activeService) {
      case 'Fisioterapia':
        return (
          <div className="animate-scale-in">
            {/* Hero Section do Modal */}
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-8 group">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" 
                alt="Fisioterapia" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent flex items-end p-8">
                <div className="animate-fade-in-up delay-200">
                  <span className="bg-brand-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">Reabilitação</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Fisioterapia Integrada</h3>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6 animate-fade-in-up delay-300">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Não tratamos apenas a dor, tratamos a causa. Nossa metodologia une terapia manual, tecnologia de ponta e cinesioterapia para devolver sua qualidade de vida e liberdade de movimento.
                </p>
                
                {/* Bento Grid para Especialidades */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-brand-200 transition-colors group">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-brand-600 shadow-sm mb-3 group-hover:scale-110 transition-transform">
                      <Move size={20} />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">Cinesioterapia</h4>
                    <p className="text-sm text-gray-500">Exercícios terapêuticos guiados para fortalecimento.</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-brand-200 transition-colors group">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-blue-500 shadow-sm mb-3 group-hover:scale-110 transition-transform">
                      <Zap size={20} />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">Eletroterapia</h4>
                    <p className="text-sm text-gray-500">Tecnologia para analgesia e regeneração.</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-brand-200 transition-colors sm:col-span-2 group">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-green-600 shadow-sm mb-3 group-hover:scale-110 transition-transform">
                      <HeartPulse size={20} />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">Terapia Manual & Osteopatia</h4>
                    <p className="text-sm text-gray-500">Mãos que curam através de mobilizações precisas e liberação miofascial.</p>
                  </div>
                </div>
              </div>

              {/* Sidebar do Modal */}
              <div className="bg-brand-50/50 p-6 rounded-3xl h-fit border border-brand-100 animate-slide-in-right delay-400">
                <h4 className="font-bold text-brand-800 mb-4">Indicações</h4>
                <ul className="space-y-3 mb-8">
                  {['Dores na coluna', 'Pós-operatório', 'Lesões esportivas', 'Hérnia de disco'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton text="Agendar Avaliação" className="w-full justify-center !text-sm" />
              </div>
            </div>
          </div>
        );

      case 'Pilates':
        return (
          <div className="animate-scale-in">
            <div className="flex flex-col md:flex-row gap-8 items-stretch mb-8">
              <div className="md:w-2/3 relative rounded-3xl overflow-hidden min-h-[300px] group">
                <img 
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1000&q=80" 
                  alt="Pilates" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white animate-fade-in-up delay-200">
                  <h3 className="text-3xl font-bold">Pilates Clínico</h3>
                  <p className="opacity-90">Controle, precisão e fluidez.</p>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-brand-900 text-white p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
                <Quote className="absolute top-4 right-4 text-brand-800 w-24 h-24 rotate-180 opacity-20 group-hover:opacity-30 transition-opacity" />
                <p className="text-lg italic font-light relative z-10 leading-relaxed mb-4 animate-fade-in-up delay-300">
                  "Com 10 sessões você perceberá a diferença, com 20 sessões os outros irão perceber, e com 30 sessões você terá um novo corpo."
                </p>
                <p className="text-brand-300 font-bold text-sm animate-fade-in-up delay-400">— Joseph Pilates</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up delay-300">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Activity className="text-brand-500" /> Benefícios Comprovados
                </h4>
                <div className="space-y-3">
                  {[
                    "Correção Postural e Alívio de Dores",
                    "Definição Muscular (Foco no Core)",
                    "Aumento da Flexibilidade",
                    "Prevenção de Lesões"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center hover:bg-gray-100 transition-colors">
                <p className="text-gray-600 mb-6">
                  Turmas reduzidas (máx. 2 alunos) ou personal. Foco total nas suas necessidades e objetivos.
                </p>
                <WhatsAppButton text="Marcar Aula Experimental" className="w-full justify-center" />
              </div>
            </div>
          </div>
        );

      case 'Tratamentos Estéticos':
        return (
          <div className="animate-scale-in space-y-8">
            <div className="text-center max-w-2xl mx-auto animate-fade-in-up delay-100">
              <span className="text-pink-500 font-bold tracking-widest uppercase text-xs mb-2 block">Alta Tecnologia</span>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Estética Avançada</h3>
              <p className="text-gray-600">
                Protocolos exclusivos que unem dermatofuncional e equipamentos de última geração para resultados reais.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up delay-200">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-pink-200 transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full">
                <div className="w-14 h-14 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-pink-500 group-hover:text-white">
                  <Thermometer size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Radiofrequência</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Calor profundo que estimula colágeno novo. Ideal para flacidez tissular facial e corporal.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                   <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>Combate a flacidez</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>Melhora o contorno</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>Suaviza rugas finas</li>
                   </ul>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 group hover:-translate-y-2 delay-100 flex flex-col h-full">
                <div className="w-14 h-14 bg-cyan-50 text-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-cyan-500 group-hover:text-white">
                  <Snowflake size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Criolipólise</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  O "padrão ouro" para gordura localizada. Congelamento controlado das células adiposas.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                   <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>Redução de medidas</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>Tratamento não invasivo</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>Resultados progressivos</li>
                   </ul>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group hover:-translate-y-2 delay-200 flex flex-col h-full">
                <div className="w-14 h-14 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-purple-500 group-hover:text-white">
                  <Waves size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Ultrassom Micro</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Lifting não cirúrgico. Atinge camadas profundas para sustentação muscular e da pele.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                   <ul className="text-sm text-gray-500 space-y-2">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>Efeito lifting imediato</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>Definição mandibular</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>Arquitetura facial</li>
                   </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center animate-fade-in-up delay-300 pt-4">
               <WhatsAppButton text="Agendar Avaliação Gratuita" className="!bg-pink-600 hover:!bg-pink-700 !shadow-pink-500/20" />
            </div>
          </div>
        );

      case 'Psicologia':
        return (
          <div className="animate-scale-in">
            <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-6 group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 animate-pulse"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                 <div className="md:w-1/2 animate-slide-in-left delay-100">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white shadow-sm text-indigo-600 text-sm font-bold rounded-full mb-6">
                      <Brain size={16} /> Saúde Mental
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Um espaço seguro de escuta</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Acreditamos que o autoconhecimento é a chave para uma vida leve. Oferecemos terapia baseada em evidências, em um ambiente acolhedor e totalmente sigiloso.
                    </p>
                    <div className="flex flex-wrap gap-2">
                       <span className="px-3 py-1 bg-white rounded-lg text-sm text-gray-600 shadow-sm border border-gray-100 hover:bg-indigo-50 transition-colors cursor-default">Ansiedade</span>
                       <span className="px-3 py-1 bg-white rounded-lg text-sm text-gray-600 shadow-sm border border-gray-100 hover:bg-indigo-50 transition-colors cursor-default">Depressão</span>
                       <span className="px-3 py-1 bg-white rounded-lg text-sm text-gray-600 shadow-sm border border-gray-100 hover:bg-indigo-50 transition-colors cursor-default">Burnout</span>
                       <span className="px-3 py-1 bg-white rounded-lg text-sm text-gray-600 shadow-sm border border-gray-100 hover:bg-indigo-50 transition-colors cursor-default">Relacionamentos</span>
                    </div>
                 </div>
                 <div className="md:w-1/2 w-full animate-slide-in-right delay-200">
                    <img 
                      src="https://images.unsplash.com/photo-1520206183501-b80df610434f?auto=format&fit=crop&w=800&q=80" 
                      alt="Consultório" 
                      className="rounded-2xl shadow-xl w-full rotate-2 group-hover:rotate-0 transition-transform duration-700"
                      loading="lazy"
                    />
                 </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 animate-fade-in-up delay-300">
              <WhatsAppButton text="Agendar Sessão" variant="primary" className="!bg-indigo-600 hover:!bg-indigo-700 !shadow-indigo-500/20" />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 bg-gray-50 relative overflow-hidden" 
      aria-labelledby="services-heading"
    >
      {/* Background decoration - Pulse sutil */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-brand-100/50 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-[10%] right-[5%] w-64 h-64 bg-brand-100/50 rounded-full blur-3xl animate-blob delay-700"></div>
      </div>

      <div className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">O que oferecemos</span>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Especialidades que transformam
          </h2>
          <p className="text-gray-600 text-lg">
            Combinamos tecnologia, conhecimento e cuidado humano. Clique em "Saiba mais" para ver os detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={index} 
              // Adicionando um delay escalonado baseado no índice para efeito cascata
              className={`group bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-brand-200 flex flex-col relative overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden="true"></div>

              <div className="mb-6 relative inline-block">
                 {/* Efeito de Glow/Blur atrás do ícone ao passar o mouse */}
                 <div className="absolute inset-0 bg-brand-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 transform scale-50 group-hover:scale-125 group-hover:rotate-12"></div>
                 
                 <div className="relative w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-xl group-hover:shadow-brand-500/20 z-10">
                  <service.icon 
                    size={32} 
                    className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" 
                    aria-hidden="true" 
                  />
                 </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8 flex-1">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors" aria-hidden="true">
                      <Check size={12} className="text-brand-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-3">
                <button 
                  onClick={() => openModal(service.title)}
                  className="w-full relative group/btn overflow-hidden rounded-xl border border-brand-200 bg-white px-6 py-3.5 shadow-sm transition-all duration-300 hover:border-transparent hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  aria-label={`Abrir detalhes sobre ${service.title}`}
                >
                  <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-brand-500 to-brand-600 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/btn:scale-x-100"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm font-bold text-brand-700 transition-colors duration-300 group-hover/btn:text-white">
                    {service.title === 'Tratamentos Estéticos' ? 'Conheça as Tecnologias' : 'Saiba mais'}
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </button>

                <WhatsAppButton 
                  text="Agendar" 
                  variant="outline" 
                  className="w-full justify-center text-sm py-2.5 !border-gray-200 hover:!border-brand-600 hover:!bg-brand-600 hover:!text-white transition-all duration-300 transform group-hover:scale-105"
                  message={`Olá! Tenho interesse em agendar uma sessão de ${service.title}.`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPONENTE MODAL GLOBAL - COM ANIMAÇÃO DE ESCALA */}
      {activeService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
          {/* Backdrop Escuro com Blur Intenso e Fade In */}
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity animate-fade-in-up duration-300" 
            onClick={closeModal}
            aria-hidden="true"
          ></div>

          {/* Janela do Modal com Scale In */}
          <div className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl animate-scale-in flex flex-col max-h-[90vh] overflow-hidden">
            
            {/* Header Sticky Moderno */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-50 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-8 bg-brand-500 rounded-full animate-pulse"></div>
                 <h2 className="text-2xl font-bold text-gray-800">{activeService}</h2>
               </div>
               <button 
                onClick={closeModal}
                className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-800 transition-all transform hover:rotate-90 hover:scale-110"
                aria-label="Fechar"
               >
                 <X size={24} />
               </button>
            </div>

            {/* Corpo do Modal com Scroll Customizado */}
            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
               {renderModalContent()}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};