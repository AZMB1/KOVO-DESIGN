// Common types used across the application

export interface NavItem {
  label: string
  href: string
  isButton?: boolean
}

export interface PortfolioProject {
  slug: string
  title: string
  description: string
  category?: string
  tags?: string[]
  techStack: string[]
  image: string
  year?: string
  client?: string
  link?: string
  challenge?: string
  solution?: string
  results?: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

export interface Service {
  id: string
  title: string
  description: string
  icon?: string
}

export interface PricingTier {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

export interface FAQItem {
  question: string
  answer: string
}
