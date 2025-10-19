import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'glass-card',
        hover && 'glass-card-hover',
        className
      )}
    >
      {children}
    </div>
  )
}
