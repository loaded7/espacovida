import { Activity, Brain, User, Sparkles } from 'lucide-react';
import { ServiceItem, NavItem, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Locação', href: '#rental' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: 'Fisioterapia',
    description: 'Tratamento especializado para alívio da dor e recuperação funcional.',
    icon: Activity,
    items: [
      'Fisioterapia reabilitativa',
      'Fisioterapia pélvica',
      'RPG (Reeducação Postural)',
      'Fisioterapia neurológica'
    ]
  },
  {
    title: 'Pilates',
    description: 'Método completo para corpo e mente, com foco em saúde.',
    icon: User,
    items: [
      'Pilates clínico',
      'Reabilitação',
      'Condicionamento físico'
    ]
  },
  {
    title: 'Tratamentos Estéticos',
    description: 'Cuidados corporais e faciais com alta tecnologia.',
    icon: Sparkles,
    items: [
      'Radiofrequência',
      'Ondas de choque',
      'Protocolos personalizados'
    ]
  },
  {
    title: 'Psicologia',
    description: 'Espaço seguro de escuta, acolhimento e autoconhecimento.',
    icon: Brain,
    items: [
      'Atendimento psicológico',
      'Terapia individual'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Costa",
    text: "O Espaço Vida transformou minha recuperação. A Dra. Adriana é extremamente atenciosa e competente."
  },
  {
    name: "Carlos Eduardo",
    text: "Faço Pilates clínico há 6 meses e minhas dores na coluna sumiram. A estrutura é impecável."
  },
  {
    name: "Fernanda Lima",
    text: "Fiz tratamentos estéticos e amei os resultados. Profissionais muito qualificados e ambiente acolhedor."
  }
];

export const FAQ_ITEMS = [
  {
    question: "A clínica aceita convênios médicos?",
    answer: "Trabalhamos com o sistema de reembolso assistido. Emitimos toda a documentação necessária para que você solicite o reembolso junto ao seu plano de saúde de forma simples e rápida."
  },
  {
    question: "Qual a duração das sessões?",
    answer: "As sessões de Fisioterapia e Psicologia têm duração média de 50 a 60 minutos. Já as aulas de Pilates têm duração de 1 hora. Prezamos pelo atendimento sem pressa e de qualidade."
  },
  {
    question: "Preciso de encaminhamento médico para iniciar a fisioterapia?",
    answer: "Embora o encaminhamento médico seja importante para o diagnóstico, nossos fisioterapeutas têm autonomia para realizar a avaliação funcional e traçar o plano de tratamento. Em casos específicos, podemos solicitar exames complementares."
  },
  {
    question: "A clínica possui estacionamento?",
    answer: "Sim! Possuímos estacionamento conveniado no local com manobrista para maior conforto e segurança dos nossos pacientes."
  },
  {
    question: "Como funcionam os pacotes de tratamento?",
    answer: "Oferecemos condições especiais para pacotes de sessões (mensais ou trimestrais), tanto para Pilates quanto para tratamentos estéticos e fisioterapia contínua. Entre em contato para consultar valores."
  }
];

export const CONTACT_INFO = {
  // Dados placeholders para serem substituídos pelos reais
  phone: "(11) 99999-9999", 
  whatsapp: "5511999999999", // Apenas números
  address: "Rua da Clínica, 123 - Bairro, Cidade - SP",
  instagram: "@espacovida",
  email: "contato@espacovida.com.br",
  hours: "Segunda a Sexta: 08h às 19h"
};