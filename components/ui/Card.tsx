import { ReactNode, forwardRef, HTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  hover?: boolean
  asChild?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hover = false, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        ref={ref}
        className={cn(
          'glass-card',
          hover && 'glass-card-hover',
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Card.displayName = 'Card'
