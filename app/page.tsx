import Link from "next/link"
import { Button, Container, Card } from "@/components/ui"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/10 via-transparent to-transparent" />
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent-primary/20 blur-[120px]" />
        </div>

        <Container className="text-center">
          <h1 className="mb-6 text-gradient">
            We Design & Build
            <br />
            Websites That Convert
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text-body md:text-xl">
            Professional web design and development studio specializing in
            custom websites for startups and growing businesses.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="large" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button variant="secondary" size="large" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Highlight */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4">What We Do</h2>
            <p className="mx-auto max-w-2xl text-text-body">
              We specialize in creating custom websites that help businesses
              grow and succeed online.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <Card hover>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary">
                <svg
                  className="h-6 w-6 text-white"
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
              </div>
              <h3 className="mb-2 text-xl">Custom Website Design</h3>
              <p className="text-text-body">
                Unique designs tailored to your brand and business goals, built
                from scratch with no templates.
              </p>
            </Card>

            {/* Service 2 */}
            <Card hover>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary">
                <svg
                  className="h-6 w-6 text-white"
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
              </div>
              <h3 className="mb-2 text-xl">Web Development</h3>
              <p className="text-text-body">
                Modern, fast, and secure websites built with the latest
                technologies and best practices.
              </p>
            </Card>

            {/* Service 3 */}
            <Card hover>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary">
                <svg
                  className="h-6 w-6 text-white"
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
              </div>
              <h3 className="mb-2 text-xl">E-commerce Solutions</h3>
              <p className="text-text-body">
                Complete online stores with secure payments, inventory
                management, and seamless checkout.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-spacing">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Process</h2>
            <p className="mx-auto max-w-2xl text-text-body">
              A proven approach that delivers results, every time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10 text-2xl font-bold text-accent-primary">
                  1
                </div>
              </div>
              <h3 className="mb-2 text-lg">Discovery</h3>
              <p className="text-sm text-text-body">
                We learn about your business, goals, and target audience.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10 text-2xl font-bold text-accent-primary">
                  2
                </div>
              </div>
              <h3 className="mb-2 text-lg">Design</h3>
              <p className="text-sm text-text-body">
                We create mockups and prototypes for your review and feedback.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10 text-2xl font-bold text-accent-primary">
                  3
                </div>
              </div>
              <h3 className="mb-2 text-lg">Development</h3>
              <p className="text-sm text-text-body">
                We build your website with clean code and best practices.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary/10 text-2xl font-bold text-accent-primary">
                  4
                </div>
              </div>
              <h3 className="mb-2 text-lg">Launch</h3>
              <p className="text-sm text-text-body">
                We deploy your site and provide training and ongoing support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio Teaser */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4">Recent Projects</h2>
            <p className="mx-auto max-w-2xl text-text-body">
              A showcase of our latest work and client success stories.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1 */}
            <Card hover asChild>
              <Link href="/portfolio/techflow">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
                  {/* Placeholder for project image */}
                  <div className="flex h-full items-center justify-center text-text-muted">
                    <svg
                      className="h-16 w-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl">TechFlow</h3>
                <p className="mb-4 text-text-body">
                  Modern SaaS platform for project management and team
                  collaboration.
                </p>
                <span className="text-sm text-accent-interactive">
                  View Case Study →
                </span>
              </Link>
            </Card>

            {/* Project 2 */}
            <Card hover asChild>
              <Link href="/portfolio/greenleaf-market">
                <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
                  {/* Placeholder for project image */}
                  <div className="flex h-full items-center justify-center text-text-muted">
                    <svg
                      className="h-16 w-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-xl">GreenLeaf Market</h3>
                <p className="mb-4 text-text-body">
                  E-commerce platform for organic products with custom checkout
                  flow.
                </p>
                <span className="text-sm text-accent-interactive">
                  View Case Study →
                </span>
              </Link>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="section-spacing">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-text-body">
              We measure our success by the success of our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <Card>
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-accent-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="mb-4 text-text-body">
                Working with Kovo Design was an absolute pleasure. They
                delivered a beautiful, functional website that exceeded our
                expectations.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent-primary/20" />
                <div>
                  <p className="font-medium text-text-heading">Sarah Johnson</p>
                  <p className="text-sm text-text-muted">CEO, TechFlow</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card>
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-accent-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="mb-4 text-text-body">
                Our new website has transformed how customers interact with our
                brand. Sales are up, and we couldn't be happier.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent-primary/20" />
                <div>
                  <p className="font-medium text-text-heading">Michael Chen</p>
                  <p className="text-sm text-text-muted">
                    Founder, GreenLeaf Market
                  </p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card>
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-accent-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="mb-4 text-text-body">
                Professional, responsive, and delivered exactly what we needed
                on time and within budget. Highly recommend!
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent-primary/20" />
                <div>
                  <p className="font-medium text-text-heading">
                    Jessica Martinez
                  </p>
                  <p className="text-sm text-text-muted">Owner, Pulse Fitness</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-transparent">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Ready to Start Your Project?</h2>
            <p className="mb-8 text-lg text-text-body">
              Let's discuss how we can help you achieve your business goals with
              a custom website designed just for you.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="large" asChild>
                <Link href="/contact">Get in Touch</Link>
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
