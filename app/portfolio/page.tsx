import type { Metadata } from "next"
import Link from "next/link"
import { Container, Card, Button } from "@/components/ui"

export const metadata: Metadata = {
  title: "Portfolio - Kovo Design",
  description:
    "Explore our portfolio of custom website designs and development projects. See how we've helped businesses succeed online.",
}

const projects = [
  {
    slug: "techflow",
    title: "TechFlow",
    description:
      "Modern SaaS platform for project management and team collaboration",
    category: "SaaS Platform",
    tags: ["Web Design", "Development", "SaaS"],
  },
  {
    slug: "greenleaf-market",
    title: "GreenLeaf Market",
    description:
      "E-commerce platform for organic products with custom checkout flow",
    category: "E-commerce",
    tags: ["E-commerce", "Development", "Branding"],
  },
  {
    slug: "pulse-fitness",
    title: "Pulse Fitness",
    description:
      "Fitness studio website with class booking and membership management",
    category: "Business Website",
    tags: ["Web Design", "Development", "Booking System"],
  },
  {
    slug: "devdocs",
    title: "DevDocs",
    description:
      "Developer documentation platform with interactive code examples",
    category: "Documentation Site",
    tags: ["Web Design", "Development", "Technical"],
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing pt-32">
        <Container className="text-center">
          <h1 className="mb-4">Our Work</h1>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            A showcase of custom websites we've designed and built for our
            clients. Each project is unique and tailored to specific business
            goals.
          </p>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <section className="section-spacing">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.slug} hover asChild>
                <Link href={`/portfolio/${project.slug}`}>
                  {/* Project Image Placeholder */}
                  <div className="mb-6 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
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

                  {/* Project Info */}
                  <div className="mb-2 text-sm text-accent-interactive">
                    {project.category}
                  </div>
                  <h3 className="mb-2 text-2xl">{project.title}</h3>
                  <p className="mb-4 text-text-body">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-accent-primary/10 px-3 py-1 text-xs text-text-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Case Study Link */}
                  <div className="mt-4 text-sm text-accent-interactive">
                    View Case Study →
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Note Section */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <Card className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/10">
                <svg
                  className="h-6 w-6 text-accent-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl">Note About Our Portfolio</h3>
            <p className="text-text-body">
              We're a new studio building our portfolio. The projects shown here
              are demonstration case studies designed to showcase our
              capabilities, design approach, and the type of work we deliver.
              We're currently taking on new clients and excited to create real
              success stories together.
            </p>
          </Card>
        </Container>
      </section>

      {/* Process Preview */}
      <section className="section-spacing">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Process</h2>
            <p className="mx-auto max-w-2xl text-text-body">
              Every project follows a proven approach that ensures quality
              results.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/10 text-xl font-bold text-accent-primary">
                1
              </div>
              <h3 className="mb-2 text-lg">Discovery</h3>
              <p className="text-sm text-text-body">
                Understanding your goals, audience, and requirements through
                detailed consultation.
              </p>
            </Card>

            <Card>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/10 text-xl font-bold text-accent-primary">
                2
              </div>
              <h3 className="mb-2 text-lg">Design</h3>
              <p className="text-sm text-text-body">
                Creating custom mockups and prototypes with multiple revision
                rounds.
              </p>
            </Card>

            <Card>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/10 text-xl font-bold text-accent-primary">
                3
              </div>
              <h3 className="mb-2 text-lg">Development</h3>
              <p className="text-sm text-text-body">
                Building with modern technologies, clean code, and best
                practices.
              </p>
            </Card>

            <Card>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/10 text-xl font-bold text-accent-primary">
                4
              </div>
              <h3 className="mb-2 text-lg">Launch</h3>
              <p className="text-sm text-text-body">
                Deploying your site and providing training and ongoing support.
              </p>
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
              Let's create something amazing together. Get in touch to discuss
              your project and see how we can help you succeed online.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="large" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="secondary" size="large" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
