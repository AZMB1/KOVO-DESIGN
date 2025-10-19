import Link from 'next/link'
import type { Metadata } from 'next'
import { Button, Container, Accordion } from '@/components/ui'

export const metadata: Metadata = {
  title: 'FAQ - Kovo Design',
  description:
    'Frequently asked questions about our web design and development services, process, pricing, and support.',
}

export default function FAQPage() {
  const generalQuestions = [
    {
      question: 'What types of websites do you build?',
      answer:
        "We specialize in custom websites for businesses, including corporate sites, e-commerce stores, landing pages, and SaaS platforms. We don't use templates—every site is designed and built from scratch to match your unique needs and brand identity.",
    },
    {
      question: 'How long does a typical project take?',
      answer:
        "Timelines vary by scope: Essentials Package (2-3 weeks), Professional Package (4-6 weeks), Premium Package (6-12 weeks). We'll provide a detailed timeline during the discovery phase based on your specific requirements.",
    },
    {
      question: 'Do you work with clients remotely?',
      answer:
        'Yes, we work with clients worldwide. All communication happens via email, video calls, and project management tools. Our remote workflow is streamlined and proven, ensuring clear communication regardless of location.',
    },
    {
      question: 'What industries do you serve?',
      answer:
        'We work with businesses across all industries. Our process is adaptable to any sector—from tech startups to retail, professional services to e-commerce. What matters most is your commitment to quality and growth.',
    },
  ]

  const processQuestions = [
    {
      question: 'What information do you need to get started?',
      answer:
        "We'll need: your business goals, target audience, desired features and pages, brand assets (logo, colors, fonts if available), content (text, images, or we can help create it), and examples of sites you like. Don't worry if you don't have everything—we'll guide you through the process.",
    },
    {
      question: 'How many revisions are included?',
      answer:
        'It depends on your package: Essentials includes 2 rounds, Professional includes 3 rounds, and Premium includes unlimited revisions. Additional revision rounds can be purchased if needed at $500 per round.',
    },
    {
      question: 'What happens after the website launches?',
      answer:
        'We provide post-launch support (duration varies by package: Essentials has none included, Professional has 30 days, Premium has 90 days). We also offer monthly maintenance plans for ongoing updates, security, and support.',
    },
    {
      question: 'Can I update the website myself?',
      answer:
        "If you choose a package with CMS integration, yes. We'll provide training on how to manage content, add pages, and make updates. Otherwise, we can handle updates for you through our maintenance plans.",
    },
  ]

  const pricingQuestions = [
    {
      question: 'How much does a website cost?',
      answer:
        'Our packages start at $3,500 for the Essentials package. Professional starts at $8,500, and Premium starts at $20,000. Visit our pricing page for detailed breakdowns of what\'s included in each package.',
    },
    {
      question: 'Do you offer payment plans?',
      answer:
        'Yes, we typically split payments into milestones: 50% upfront to begin the project, 25% at design approval, and 25% at launch. This helps spread the investment over the project timeline.',
    },
    {
      question: "What's included in the price?",
      answer:
        'Each package includes design, development, revisions, and support. The specific deliverables vary by package level. See the pricing page for detailed feature lists. All packages include responsive design, SEO basics, and professional quality code.',
    },
    {
      question: 'Are there any hidden fees?',
      answer:
        "No. The only additional costs would be third-party services (domain registration, hosting, premium plugins, stock photos) if needed—and we'll always discuss these upfront. Our pricing is transparent with no surprises.",
    },
  ]

  const technicalQuestions = [
    {
      question: 'What technologies do you use?',
      answer:
        'We use modern, industry-standard technologies like Next.js, React, TypeScript, and Tailwind CSS. The exact stack depends on your project needs. We choose technologies based on performance, maintainability, and your specific requirements.',
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer:
        'Absolutely. Every site we build is fully responsive and optimized for mobile, tablet, and desktop. We use a mobile-first approach, ensuring your site looks and works great on all devices and screen sizes.',
    },
    {
      question: 'Do you provide hosting?',
      answer:
        "We typically deploy sites to Vercel (included in our packages), which provides excellent performance, security, and reliability. However, we can work with your preferred hosting provider if you have specific requirements.",
    },
    {
      question: 'Is SEO included?',
      answer:
        'Yes. All packages include basic SEO optimization: meta tags, semantic HTML, performance optimization, and mobile-friendliness. Advanced SEO services (content strategy, keyword research, ongoing optimization) are available as add-ons.',
    },
    {
      question: 'Will I own the website?',
      answer:
        'Yes. Once the project is complete and paid in full, you own all the code and design assets. We transfer everything to you, and you have complete control over your website.',
    },
  ]

  const supportQuestions = [
    {
      question: 'What if something breaks after launch?',
      answer:
        "All packages include post-launch support (duration varies). We'll fix any bugs or issues that arise during this period at no additional cost. After that period, we offer maintenance plans for ongoing support.",
    },
    {
      question: 'Can you help with updates after launch?',
      answer:
        'Yes. We offer monthly maintenance retainers starting at $300/month for ongoing updates, content changes, and technical support. This is perfect for businesses that need regular assistance.',
    },
    {
      question: 'Do you offer training?',
      answer:
        "If your site includes a CMS, we provide comprehensive training on how to manage content, add pages, and make updates. We'll ensure you're comfortable managing your site before handoff.",
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="section-spacing">
        <Container className="text-center">
          <h1 className="mb-4">Frequently Asked Questions</h1>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Find answers to common questions about our services, process, and
            pricing.
          </p>
        </Container>
      </section>

      {/* General Questions */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <h2 className="mb-8">General Questions</h2>
          <Accordion items={generalQuestions} />
        </Container>
      </section>

      {/* Process & Workflow */}
      <section className="section-spacing">
        <Container>
          <h2 className="mb-8">Process & Workflow</h2>
          <Accordion items={processQuestions} />
        </Container>
      </section>

      {/* Pricing & Payment */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <h2 className="mb-8">Pricing & Payment</h2>
          <Accordion items={pricingQuestions} />
        </Container>
      </section>

      {/* Technical Questions */}
      <section className="section-spacing">
        <Container>
          <h2 className="mb-8">Technical Questions</h2>
          <Accordion items={technicalQuestions} />
        </Container>
      </section>

      {/* Support & Maintenance */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <h2 className="mb-8">Support & Maintenance</h2>
          <Accordion items={supportQuestions} />
        </Container>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <Container className="text-center">
          <h2 className="mb-4">Still have questions?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-text-body">
            We're here to help. Get in touch and we'll answer any questions you
            have about your project.
          </p>
          <Button size="large" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </Container>
      </section>
    </>
  )
}
