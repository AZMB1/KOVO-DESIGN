import Link from 'next/link'
import { Button, Container } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center">
      <Container className="text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <div className="relative mb-8 inline-flex h-32 w-32 items-center justify-center">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary opacity-20 blur-2xl" />
              <span className="relative text-8xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                404
              </span>
            </div>
          </div>

          <h1 className="mb-4">Page Not Found</h1>
          <p className="mb-8 text-lg text-text-body">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="large" asChild>
              <Link href="/">Go Home</Link>
            </Button>
            <Button size="large" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="mt-12">
            <p className="mb-4 text-sm text-text-muted">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="text-sm text-accent-interactive hover:underline">
                Services
              </Link>
              <Link href="/portfolio" className="text-sm text-accent-interactive hover:underline">
                Portfolio
              </Link>
              <Link href="/pricing" className="text-sm text-accent-interactive hover:underline">
                Pricing
              </Link>
              <Link href="/faq" className="text-sm text-accent-interactive hover:underline">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
