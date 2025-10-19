'use client'

import Link from 'next/link'
import { Button } from '@/components/ui'

interface MobileMenuProps {
  open: boolean
  setOpen: (open: boolean) => void
  navigation: { name: string; href: string }[]
}

export function MobileMenu({ open, setOpen, navigation }: MobileMenuProps) {
  if (!open) return null

  return (
    <div className="lg:hidden">
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg-primary px-6 py-6 sm:max-w-sm glass-card border-l border-white/10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5" onClick={() => setOpen(false)}>
            <span className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              KOVO
            </span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-text-heading"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close menu</span>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-white/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text-heading hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Button className="w-full" asChild>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
