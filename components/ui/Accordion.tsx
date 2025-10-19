'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItemProps[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="glass-card overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-start justify-between p-6 text-left transition-colors hover:bg-white/5"
          >
            <span className="pr-8 font-medium text-text-heading">
              {item.question}
            </span>
            <span
              className={cn(
                'flex-shrink-0 text-xl text-accent-interactive transition-transform duration-medium',
                openIndex === index && 'rotate-180'
              )}
            >
              ↓
            </span>
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-medium',
              openIndex === index ? 'max-h-96' : 'max-h-0'
            )}
          >
            <div className="px-6 pb-6 pt-0 text-text-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
