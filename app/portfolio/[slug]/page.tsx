import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Button, Container, Card } from '@/components/ui'
import { portfolioProjects, getProjectBySlug } from '@/lib/data/portfolio'

interface PortfolioProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: PortfolioProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found - Kovo Design',
    }
  }

  return {
    title: `${project.title} - Portfolio - Kovo Design`,
    description: project.description,
  }
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Get project-specific content based on slug
  const projectContent = getProjectContent(slug)

  return (
    <>
      {/* Hero */}
      <section className="section-spacing">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm text-text-muted">
              <Link href="/portfolio" className="hover:text-text-heading">
                Portfolio
              </Link>
              <span>/</span>
              <span>{project.title}</span>
            </div>
            <h1 className="mb-4">{project.title}</h1>
            <p className="mb-6 text-lg text-text-body">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div>
                <span className="text-text-muted">Client: </span>
                <span className="text-text-heading">{project.client}</span>
              </div>
              <div>
                <span className="text-text-muted">Type: </span>
                <span className="text-text-heading">{project.category}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
            <div className="flex h-full items-center justify-center text-9xl font-bold text-white/10">
              {project.title.charAt(0)}
            </div>
          </div>
        </Container>
      </section>

      {/* Project Overview */}
      <section className="section-spacing">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6">Project Overview</h2>
            <div className="space-y-4 text-text-body">
              <p>{projectContent.overview}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge & Solution */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <h3 className="mb-4">Challenge</h3>
              <p className="text-text-body">{projectContent.challenge}</p>
            </Card>
            <Card>
              <h3 className="mb-4">Solution</h3>
              <p className="text-text-body">{projectContent.solution}</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Key Features */}
      <section className="section-spacing">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8">Key Features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {projectContent.features.map((feature, index) => (
                <Card key={index}>
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm text-text-body">{feature}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-bg-surface px-6 py-3 text-sm font-medium text-text-heading"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Outcome */}
      <section className="section-spacing">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Outcome</h2>
            <p className="text-lg text-text-body">{projectContent.outcome}</p>
          </div>
        </Container>
      </section>

      {/* More Projects CTA */}
      <section className="section-spacing bg-bg-secondary/50">
        <Container className="text-center">
          <h2 className="mb-4">View More Projects</h2>
          <p className="mx-auto mb-8 max-w-2xl text-text-body">
            Explore our other work to see how we help businesses succeed online.
          </p>
          <Button variant="secondary" asChild>
            <Link href="/portfolio">Back to Portfolio</Link>
          </Button>
        </Container>
      </section>
    </>
  )
}

// Helper function to get project-specific content
function getProjectContent(slug: string) {
  const content: Record<
    string,
    {
      overview: string
      challenge: string
      solution: string
      features: string[]
      outcome: string
    }
  > = {
    techflow: {
      overview:
        'TechFlow needed a modern platform to help teams manage projects more efficiently. We designed and built a SaaS application that combines powerful features with an intuitive interface.',
      challenge:
        'The client needed a solution that could scale with their growing user base while maintaining performance. The platform had to handle complex project hierarchies and real-time collaboration.',
      solution:
        'We built a modern web application using Next.js and TypeScript, with a PostgreSQL database for reliable data management. The interface was designed to be intuitive while supporting advanced features.',
      features: [
        'Real-time project collaboration',
        'Advanced task management',
        'Team analytics and reporting',
        'Role-based permissions',
        'Integration with popular tools',
        'Mobile-responsive interface',
      ],
      outcome:
        'Successfully launched a scalable platform that serves thousands of users. The clean design and performant codebase provide a solid foundation for future growth.',
    },
    'greenleaf-market': {
      overview:
        'GreenLeaf Market wanted to launch an e-commerce store focused on sustainable and eco-friendly products. We created a beautiful online shopping experience that reflects their brand values.',
      challenge:
        'The client needed a fully functional e-commerce platform with payment processing, inventory management, and an admin dashboard—all while maintaining a strong focus on sustainability messaging.',
      solution:
        'We integrated Shopify for robust e-commerce functionality while building a custom Next.js frontend that gave them complete design control and excellent performance.',
      features: [
        'Custom product catalog design',
        'Secure payment processing',
        'Inventory management system',
        'Customer account management',
        'Product filtering and search',
        'Mobile-optimized checkout',
      ],
      outcome:
        'Delivered a complete e-commerce solution that successfully launched their online store. The custom design helps them stand out in the sustainable products market.',
    },
    'pulse-fitness': {
      overview:
        'Pulse Fitness, a boutique fitness coaching service, needed a landing page that could convert visitors into clients. We created a high-impact page that showcases their services and drives sign-ups.',
      challenge:
        'The page needed to load fast, look stunning on all devices, and effectively communicate the value proposition to convert visitors into paying clients.',
      solution:
        'We built a single-page application with smooth animations, compelling copy, and clear calls-to-action. Framer Motion was used to create engaging scroll effects without impacting performance.',
      features: [
        'Animated hero section',
        'Service highlights',
        'Pricing comparison',
        'Client testimonials',
        'Lead capture form',
        'Fast page load times',
      ],
      outcome:
        'Launched a high-converting landing page that effectively communicates the brand\'s value. The clean design and smooth animations create a professional, trustworthy impression.',
    },
    devdocs: {
      overview:
        'DevTools Inc. needed a documentation site for their developer tools that was easy to navigate and pleasant to read. We created a modern docs site with excellent search and navigation.',
      challenge:
        'Technical documentation needs to be comprehensive yet easy to navigate. The site had to support code snippets, API references, and multiple documentation versions.',
      solution:
        'We built a custom documentation site using Next.js and MDX, allowing for easy content updates while maintaining full design control. We added powerful search and intuitive navigation.',
      features: [
        'MDX-powered content',
        'Powerful search functionality',
        'Syntax-highlighted code blocks',
        'Responsive sidebar navigation',
        'Dark/light mode toggle',
        'API reference sections',
      ],
      outcome:
        'Delivered a comprehensive documentation site that makes it easy for developers to find what they need. The clean design and excellent UX support the product\'s technical excellence.',
    },
  }

  return (
    content[slug] || {
      overview: 'Project details coming soon.',
      challenge: 'Challenge details to be added.',
      solution: 'Solution details to be added.',
      features: ['Feature documentation in progress'],
      outcome: 'Outcome details to be added.',
    }
  )
}
