import type { PortfolioProject } from "@/types"

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "techflow",
    title: "TechFlow",
    description: "A modern SaaS platform for project management and team collaboration",
    category: "SaaS Platform",
    tags: ["Web Design", "Development", "SaaS"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    image: "/images/projects/techflow.jpg",
    year: "2024",
    client: "TechFlow Inc.",
    link: "https://techflow-demo.com",
    challenge: "TechFlow needed a comprehensive project management platform that could compete with established players while offering a superior user experience.",
    solution: "We designed and built a modern SaaS platform with an intuitive interface, real-time collaboration features, and seamless integrations.",
    results: [
      "40% increase in user engagement",
      "25% reduction in task completion time",
      "95% user satisfaction rating"
    ],
    testimonial: {
      quote: "Working with Kovo Design was an absolute pleasure. They delivered a beautiful, functional website that exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechFlow"
    }
  },
  {
    slug: "greenleaf-market",
    title: "GreenLeaf Market",
    description: "E-commerce platform for organic products with custom checkout flow",
    category: "E-commerce",
    tags: ["E-commerce", "Development", "Branding"],
    techStack: ["Next.js", "Stripe", "Tailwind CSS", "Sanity CMS"],
    image: "/images/projects/greenleaf.jpg",
    year: "2024",
    client: "GreenLeaf Market",
    link: "https://greenleaf-demo.com",
    challenge: "GreenLeaf Market wanted to create an online presence that reflected their commitment to organic, sustainable products.",
    solution: "We built a beautiful e-commerce platform with integrated payment processing, inventory management, and content management system.",
    results: [
      "200% increase in online sales",
      "50% cart abandonment reduction",
      "10,000+ products sold in first year"
    ],
    testimonial: {
      quote: "Our new website has transformed how customers interact with our brand. Sales are up, and we couldn't be happier.",
      author: "Michael Chen",
      role: "Founder, GreenLeaf Market"
    }
  },
  {
    slug: "pulse-fitness",
    title: "Pulse Fitness",
    description: "Fitness studio website with class booking and membership management",
    category: "Business Website",
    tags: ["Web Design", "Development", "Booking System"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "/images/projects/pulse.jpg",
    year: "2024",
    client: "Pulse Fitness Studio",
    link: "https://pulse-demo.com",
    challenge: "Pulse Fitness needed a modern website that would attract new members and make class booking seamless.",
    solution: "We designed a vibrant, energetic website with integrated class booking, membership management, and payment processing.",
    results: [
      "60% increase in new memberships",
      "80% of bookings now online",
      "95% customer satisfaction"
    ],
    testimonial: {
      quote: "Professional, responsive, and delivered exactly what we needed on time and within budget. Highly recommend!",
      author: "Jessica Martinez",
      role: "Owner, Pulse Fitness"
    }
  },
  {
    slug: "devdocs",
    title: "DevDocs",
    description: "Developer documentation platform with interactive code examples",
    category: "Documentation Site",
    tags: ["Web Design", "Development", "Technical"],
    techStack: ["Next.js", "MDX", "Tailwind CSS", "Algolia"],
    image: "/images/projects/devdocs.jpg",
    year: "2024",
    client: "DevDocs Platform",
    link: "https://devdocs-demo.com",
    challenge: "DevDocs needed a documentation platform that was easy to navigate and provided an excellent developer experience.",
    solution: "We built a comprehensive documentation platform with powerful search, interactive code examples, and beautiful design.",
    results: [
      "50% faster documentation navigation",
      "90% search accuracy",
      "15,000+ developers using platform"
    ],
    testimonial: {
      quote: "The best documentation platform we've ever used. Clean, fast, and exactly what developers need.",
      author: "Alex Kumar",
      role: "CTO, DevDocs"
    }
  }
]

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map((project) => project.slug)
}
