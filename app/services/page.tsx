import type { Metadata } from "next"
import Link from "next/link"
import { Container, Button, Card } from "@/components/ui"

export const metadata: Metadata = {
  title: "Our Services - Kovo Design",
  description:
    "Professional web design and development services including custom websites, e-commerce solutions, and ongoing maintenance and support.",
}

const services = [
  {
    title: "Custom Website Design",
    description:
      "Unique, professional designs tailored to your brand identity and business goals. No templates, no shortcuts—just custom work built for you.",
    features: [
      "Brand-aligned visual design",
      "Custom UI/UX design",
      "Responsive layouts (mobile, tablet, desktop)",
      "Interactive prototypes",
      "Unlimited design revisions (per package)",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description:
      "Modern, fast, and secure websites built with the latest technologies. Clean code, best practices, and performance optimization.",
    features: [
      "Next.js, React, TypeScript",
      "SEO optimization",
      "Fast page load times",
      "Accessibility (WCAG AA)",
      "Cross-browser compatibility",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete online stores with secure payments, inventory management, and seamless checkout experiences that drive conversions.",
    features: [
      "Payment gateway integration",
      "Product catalog management",
      "Shopping cart & checkout",
      "Order management system",
      "Email notifications",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Website Redesign",
    description:
      "Modernize your existing website with updated design, improved performance, and better user experience to stay competitive.",
    features: [
      "Design refresh",
      "Performance optimization",
      "Modern tech stack migration",
      "Content migration",
      "SEO preservation",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive conversions for your marketing campaigns.",
    features: [
      "Conversion-focused design",
      "A/B testing setup",
      "Form integration",
      "Analytics tracking",
      "Fast turnaround time",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Maintenance & Support",
    description:
      "Keep your website running smoothly with ongoing updates, security patches, and technical support.",
    features: [
      "Regular updates",
      "Security monitoring",
      "Backup management",
      "Bug fixes",
      "Priority support",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing pt-32">
        <Container className="text-center">
          <h1 className="mb-4">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Comprehensive web design and development services to help your
            business succeed online. From concept to launch and beyond.
          </p>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary text-white">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-2xl">{service.title}</h3>
                <p className="mb-4 text-text-body">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-text-body"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-interactive"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4">How We Work</h2>
            <p className="mx-auto max-w-2xl text-text-body">
              Our proven process ensures your project is delivered on time, on
              budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10 text-2xl font-bold text-accent-primary">
                  1
                </div>
              </div>
              <h3 className="mb-2 text-lg">Discovery & Planning</h3>
              <p className="text-sm text-text-body">
                We start by understanding your business, goals, target audience,
                and project requirements. We'll create a detailed project plan
                and timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10 text-2xl font-bold text-accent-primary">
                  2
                </div>
              </div>
              <h3 className="mb-2 text-lg">Design & Prototyping</h3>
              <p className="text-sm text-text-body">
                We design mockups and interactive prototypes for your review.
                You'll have opportunities to provide feedback and request
                revisions.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10 text-2xl font-bold text-accent-primary">
                  3
                </div>
              </div>
              <h3 className="mb-2 text-lg">Development & Testing</h3>
              <p className="text-sm text-text-body">
                We build your website with clean, maintainable code. We test
                thoroughly across devices and browsers to ensure everything
                works perfectly.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10 text-2xl font-bold text-accent-primary">
                  4
                </div>
              </div>
              <h3 className="mb-2 text-lg">Launch & Support</h3>
              <p className="text-sm text-text-body">
                We deploy your site to production, provide training, and offer
                ongoing support to ensure your success.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-text-body">
              We're not just another web agency. Here's what sets us apart.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="mb-2 text-xl">No Templates</h3>
              <p className="text-text-body">
                Every project is custom-built from scratch to match your unique
                brand and requirements. No cookie-cutter solutions.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-xl">Modern Technology</h3>
              <p className="text-text-body">
                We use the latest, most reliable web technologies to build fast,
                secure, and scalable websites.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-xl">Clear Communication</h3>
              <p className="text-text-body">
                Regular updates, transparent pricing, and responsive support
                throughout your project and beyond.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-xl">Performance First</h3>
              <p className="text-text-body">
                Fast loading times, optimized images, and clean code ensure your
                website performs at its best.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-xl">SEO Optimized</h3>
              <p className="text-text-body">
                Built-in SEO best practices help your website rank better in
                search engines and attract more visitors.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-xl">Accessible Design</h3>
              <p className="text-text-body">
                WCAG AA compliant designs ensure your website is usable by
                everyone, including people with disabilities.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-transparent">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-text-body">
              Let's discuss your project and how we can help you achieve your
              business goals.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="large" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="secondary" size="large" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
