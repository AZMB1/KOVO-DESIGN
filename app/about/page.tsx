import type { Metadata } from "next"
import Link from "next/link"
import { Container, Button, Card } from "@/components/ui"

export const metadata: Metadata = {
  title: "About Us - Kovo Design",
  description:
    "Learn about Kovo Design, our mission, values, and approach to creating custom websites that help businesses grow online.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing pt-32">
        <Container className="text-center">
          <h1 className="mb-4">About Kovo Design</h1>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            We're a design studio that creates custom websites for businesses
            that want to stand out online and grow.
          </p>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="section-spacing">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-4">Our Mission</h2>
              <p className="mb-4 text-text-body">
                We believe that every business deserves a website that truly
                represents their brand and helps them achieve their goals. Our
                mission is to create custom websites that combine beautiful
                design with powerful functionality.
              </p>
              <p className="mb-4 text-text-body">
                We don't use templates. We don't cut corners. We take the time
                to understand your business, your audience, and your objectives,
                then craft a solution that's built specifically for you.
              </p>
              <p className="text-text-body">
                Whether you're a startup looking to make a strong first
                impression or an established business ready to modernize your
                online presence, we're here to help you succeed.
              </p>
            </div>

            <div className="flex items-center">
              <Card>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 text-4xl font-bold text-accent-primary">
                      100%
                    </div>
                    <p className="text-text-body">
                      Custom designs, no templates
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 text-4xl font-bold text-accent-primary">
                      Modern
                    </div>
                    <p className="text-text-body">
                      Built with the latest technologies
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 text-4xl font-bold text-accent-primary">
                      Fast
                    </div>
                    <p className="text-text-body">
                      Optimized for performance and SEO
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Values</h2>
            <p className="mx-auto max-w-2xl text-text-body">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl">Quality First</h3>
              <p className="text-text-body">
                We never compromise on quality. Every project receives the same
                attention to detail and commitment to excellence.
              </p>
            </Card>

            <Card>
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl">Transparency</h3>
              <p className="text-text-body">
                Clear communication, honest pricing, and no hidden fees. We
                believe in building trust through transparency.
              </p>
            </Card>

            <Card>
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl">Innovation</h3>
              <p className="text-text-body">
                We stay current with the latest web technologies and design
                trends to deliver modern, future-proof solutions.
              </p>
            </Card>

            <Card>
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl">Client Success</h3>
              <p className="text-text-body">
                Your success is our success. We measure our work by the results
                it delivers for your business.
              </p>
            </Card>

            <Card>
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl">Reliability</h3>
              <p className="text-text-body">
                We deliver on time and within budget. You can count on us to
                follow through on our commitments.
              </p>
            </Card>

            <Card>
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl">Continuous Learning</h3>
              <p className="text-text-body">
                We're always learning and improving our skills to provide better
                solutions for our clients.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="section-spacing">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Approach</h2>
            <p className="mx-auto max-w-2xl text-text-body">
              How we turn your vision into a reality.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <h3 className="mb-4 text-2xl">We Listen First</h3>
                <p className="mb-4 text-text-body">
                  Before we design a single pixel or write a line of code, we
                  take the time to understand your business, your goals, and
                  your audience. We ask questions, we listen, and we learn.
                </p>
                <p className="text-text-body">
                  This discovery phase ensures that every decision we make is
                  informed by what matters most to your business.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <Card className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
                  <div className="flex h-48 items-center justify-center">
                    <svg
                      className="h-24 w-24 text-accent-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                </Card>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <Card className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
                  <div className="flex h-48 items-center justify-center">
                    <svg
                      className="h-24 w-24 text-accent-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                </Card>
              </div>
              <div>
                <h3 className="mb-4 text-2xl">We Design With Purpose</h3>
                <p className="mb-4 text-text-body">
                  Every design choice has a reason. We don't just make things
                  look good—we design with your users and business objectives in
                  mind.
                </p>
                <p className="text-text-body">
                  Our designs are intentional, focused, and built to drive
                  results. Form and function working together in harmony.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <h3 className="mb-4 text-2xl">We Build For the Future</h3>
                <p className="mb-4 text-text-body">
                  We use modern, maintainable code and technologies that will
                  stand the test of time. Your website should be an asset that
                  grows with your business, not something that needs to be
                  rebuilt every few years.
                </p>
                <p className="text-text-body">
                  We build with scalability, performance, and security in mind
                  from day one.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <Card className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
                  <div className="flex h-48 items-center justify-center">
                    <svg
                      className="h-24 w-24 text-accent-primary"
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
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-transparent">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Let's Work Together</h2>
            <p className="mb-8 text-lg text-text-body">
              Ready to create something great? We'd love to hear about your
              project and discuss how we can help.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="large" asChild>
                <Link href="/contact">Get in Touch</Link>
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
