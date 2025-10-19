import { forwardRef, TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextareaElement> {
  label?: string
  error?: string
}

const Textarea = forwardRef<HTMLTextareaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-text-heading">
            {label}
          </label>
        )}
        <textarea
          className={cn(
            'w-full rounded-lg border border-white/10 bg-bg-surface px-4 py-3 text-text-heading placeholder:text-text-muted focus:border-accent-interactive focus:outline-none focus:ring-1 focus:ring-accent-interactive',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
