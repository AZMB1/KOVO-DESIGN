import type { Metadata } from 'next'
import { Container } from '@/components/ui'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Kovo Design',
  description:
    'Get in touch with our team to discuss your web design and development project. We are here to help bring your vision to life.',
}

export default function ContactPage() {
  return (
    <>
      <section className="section-spacing">
        <Container className="text-center">
          <h1 className="mb-4">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-lg text-text-body">
            Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </Container>
      </section>

      <section className="section-spacing bg-bg-secondary/50">
        <Container>
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="section-spacing">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8">Other Ways to Reach Us</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="glass-card p-6">
                <h3 className="mb-2">Email</h3>
                <a
                  href="mailto:hello@kovo-design.io"
                  className="text-accent-interactive hover:underline"
                >
                  hello@kovo-design.io
                </a>
              </div>
              <div className="glass-card p-6">
                <h3 className="mb-2">Response Time</h3>
                <p className="text-text-body">Within 24 hours</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
