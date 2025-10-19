import type { Metadata } from "next"
import Link from "next/link"
import { Container, Button, Card } from "@/components/ui"

export const metadata: Metadata = {
  title: "Pricing - Kovo Design",
  description:
    "Transparent pricing for custom website design and development. Choose from Essentials, Professional, or Premium packages tailored to your business needs.",
}

const pricingTiers = [
  {
    name: "Essentials",
    price: "$3,500",
    description: "Perfect for startups and small businesses",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO optimization",
      "2 rounds of revisions",
      "2-3 week delivery",
      "30 days post-launch support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$8,500",
    description: "Most popular for growing businesses",
    features: [
      "Up to 10 pages",
      "Custom design system",
      "Content Management System (optional)",
      "Advanced SEO & analytics",
      "3 rounds of revisions",
      "4-6 week delivery",
      "60 days post-launch support",
      "Performance optimization",
      "Accessibility compliance (WCAG AA)",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium",
    price: "$20,000",
    description: "For established companies with complex needs",
    features: [
      "Unlimited pages",
      "Advanced custom features",
      "Full CMS with training",
      "Brand strategy & consultation",
      "Unlimited revisions",
      "Custom timeline",
      "90 days post-launch support",
      "Priority support",
      "Ongoing maintenance options",
      "Multi-language support (optional)",
      "E-commerce functionality (optional)",
    ],
    cta: "Get Started",
    popular: false,
  },
]

const addOns = [
  {
    name: "Logo Design",
    price: "From $1,500",
    description:
      "Custom logo design with multiple concepts and revisions. Includes brand guidelines.",
  },
  {
    name: "Copywriting",
    price: "From $500/page",
    description:
      "Professional copywriting services to communicate your message effectively.",
  },
  {
    name: "Monthly Maintenance",
    price: "$300/month",
    description:
      "Regular updates, security patches, backups, and priority support.",
  },
  {
    name: "Additional Revisions",
    price: "$500/round",
    description:
      "Need more revisions beyond your package? Add additional revision rounds.",
  },
  {
    name: "Rush Delivery",
    price: "+50% fee",
    description:
      "Need it faster? We can prioritize your project with rush delivery.",
  },
  {
    name: "Content Migration",
    price: "From $1,000",
    description:
      "Migrate content from your old website to your new site, including images and text.",
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing pt-32">
        <Container className="text-center">
          <h1 className="mb-4">Transparent Pricing</h1>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Choose the package that fits your needs. All prices are starting
            points—we'll provide a detailed quote based on your specific
            requirements.
          </p>
        </Container>
      </section>

      {/* Pricing Tiers */}
      <section className="section-spacing">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={
                  tier.popular ? "border-2 border-accent-primary" : undefined
                }
              >
                {tier.popular && (
                  <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-2 text-2xl">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-text-heading">
                    {tier.price}
                  </span>
                  <span className="text-text-muted"> starting from</span>
                </div>
                <p className="mb-6 text-text-body">{tier.description}</p>
                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-interactive"
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
                      <span className="text-text-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? "primary" : "secondary"}
                  className="w-full"
                  asChild
                >
                  <Link href="/contact">{tier.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Add-Ons Section */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4">Add-Ons & Extras</h2>
            <p className="mx-auto max-w-2xl text-text-body">
              Enhance your package with additional services tailored to your
              needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addOn, index) => (
              <Card key={index} hover>
                <h3 className="mb-2 text-xl">{addOn.name}</h3>
                <div className="mb-3 text-2xl font-bold text-accent-primary">
                  {addOn.price}
                </div>
                <p className="text-sm text-text-body">{addOn.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Mini Section */}
      <section className="section-spacing">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4">Common Questions</h2>
            <p className="mx-auto max-w-2xl text-text-body">
              Quick answers to questions you might have about pricing.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <Card>
              <h3 className="mb-2 text-lg">
                What's included in the starting price?
              </h3>
              <p className="text-text-body">
                The starting price includes the core features listed in each
                package. The final price will depend on your specific
                requirements, such as custom functionality, number of pages, and
                complexity of design.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-lg">Do you offer payment plans?</h3>
              <p className="text-text-body">
                Yes! We offer flexible payment plans. Typically, we split
                payments into milestones: 50% upfront to start the project, 25%
                at design approval, and 25% at launch.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-lg">
                What if I need something not listed?
              </h3>
              <p className="text-text-body">
                No problem! Every project is unique. If you need custom
                functionality or services not listed here, we'll work with you
                to create a custom quote that fits your needs.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-lg">Are there any hidden fees?</h3>
              <p className="text-text-body">
                Absolutely not. We believe in transparent pricing. The only
                additional costs would be third-party services like domain
                registration, hosting, or specific plugins/tools you choose to
                use. We'll discuss all costs upfront.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-lg">What happens after the project?</h3>
              <p className="text-text-body">
                All packages include post-launch support (30-90 days depending
                on the package) to fix any bugs and answer questions. After
                that, you can opt for our monthly maintenance plan or handle
                updates yourself.
              </p>
            </Card>

            <Card>
              <h3 className="mb-2 text-lg">
                Can I upgrade my package later?
              </h3>
              <p className="text-text-body">
                Yes! You can start with a smaller package and add features or
                pages later. We'll work with you to expand your site as your
                business grows.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" asChild>
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-transparent">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-text-body">
              Let's discuss your project and provide a detailed quote tailored
              to your specific needs.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="large" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button variant="secondary" size="large" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
