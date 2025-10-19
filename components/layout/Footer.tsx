import Link from 'next/link'

const footerNavigation = {
  services: [
    { name: 'Web Design', href: '/services' },
    { name: 'Web Development', href: '/services' },
    { name: 'E-commerce', href: '/services' },
    { name: 'Maintenance', href: '/services' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-secondary/50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-heading">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-body transition-colors hover:text-text-heading"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-heading">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-body transition-colors hover:text-text-heading"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-heading">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-body transition-colors hover:text-text-heading"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-heading">
              KOVO Design
            </h3>
            <p className="text-sm text-text-body">
              Professional web design and development studio.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-text-muted">
            &copy; {new Date().getFullYear()} KOVO Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
