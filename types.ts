import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  items: string[];
  icon: LucideIcon;
  description: string;
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}