'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui'
import { MobileMenu } from './MobileMenu'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 glass-card border-b border-white/10">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                KOVO
              </span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-heading"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-body transition-colors hover:text-text-heading"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button size="small" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} navigation={navigation} />
    </>
  )
}
