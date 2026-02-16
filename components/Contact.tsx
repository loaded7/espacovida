import React from 'react';
import { MapPin, Phone, Clock, Instagram, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { WhatsAppButton } from './WhatsAppButton';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Fale Conosco</h3>
              <p className="text-gray-400">Entre em contato e agende sua visita.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-brand-600 transition-colors shrink-0" aria-hidden="true">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Endereço</p>
                  <p className="text-sm">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-brand-600 transition-colors shrink-0" aria-hidden="true">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Telefone / WhatsApp</p>
                  <a 
                    href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} 
                    className="text-sm hover:text-white transition-colors focus:outline-none focus:text-white focus:underline"
                    aria-label={`Ligar para ${CONTACT_INFO.phone}`}
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-brand-600 transition-colors shrink-0" aria-hidden="true">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Horário de Atendimento</p>
                  <p className="text-sm">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
               <WhatsAppButton text="Conversar no WhatsApp" />
            </div>
          </div>

          {/* Social Icons Stylized */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Redes Sociais</h3>
              <p className="text-gray-400">Acompanhe nossas novidades e conteúdos exclusivos.</p>
            </div>
            
            <div className="flex gap-5">
              {/* Instagram - Gradiente da Marca */}
              <a 
                href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(225,48,108,0.3)] overflow-hidden ring-1 ring-gray-700 hover:ring-0 focus:outline-none focus:ring-2 focus:ring-pink-500" 
                aria-label="Siga-nos no Instagram"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Instagram size={28} className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>

              {/* YouTube - Vermelho Brand (Logo Oficial) */}
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,0,0,0.4)] overflow-hidden ring-1 ring-gray-700 hover:ring-0 focus:outline-none focus:ring-2 focus:ring-red-500" 
                aria-label="Inscreva-se no YouTube"
              >
                <div className="absolute inset-0 bg-[#FF0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="relative z-10 w-7 h-7 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-sm"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Email - Cor da Clínica */}
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="group relative w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(84,131,129,0.3)] overflow-hidden ring-1 ring-gray-700 hover:ring-0 focus:outline-none focus:ring-2 focus:ring-brand-500" 
                aria-label="Envie um e-mail"
              >
                <div className="absolute inset-0 bg-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Mail size={28} className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-brand-900 transition-colors">
              <p className="text-sm text-gray-400 italic">
                "Saúde é o nosso maior bem. Invista em você no Espaço Vida."
              </p>
            </div>
          </div>

          {/* Map - Fluid Responsiveness */}
          <div className="relative w-full h-[350px] md:h-[400px] lg:h-auto lg:min-h-full bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 md:col-span-2 lg:col-span-1 shadow-lg group">
            {/* Loading Skeleton / Placeholder */}
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center -z-10">
               <MapPin className="text-gray-700 animate-pulse" size={48} />
            </div>

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzAwLjAiUyA0NsKwMzYnMDAuMCJX!5e0!3m2!1sen!2sbr!4v1600000000000!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização da Clínica Espaço Vida"
              className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            ></iframe>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Espaço Vida. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <button className="hover:text-white cursor-pointer transition-colors focus:outline-none focus:underline focus:text-white">Política de Privacidade</button>
            <button className="hover:text-white cursor-pointer transition-colors focus:outline-none focus:underline focus:text-white">Termos de Uso</button>
          </div>
        </div>
      </div>
    </footer>
  );
};