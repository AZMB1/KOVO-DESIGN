'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { Button, Input, Textarea, Select } from '@/components/ui'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Name *"
          placeholder="John Doe"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label="Email *"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <Input
        label="Company"
        placeholder="Your Company Ltd."
        {...register('company')}
        error={errors.company?.message}
      />

      <Select
        label="Project Type *"
        {...register('projectType')}
        error={errors.projectType?.message}
      >
        <option value="">Select a project type</option>
        <option value="new-website">New Website</option>
        <option value="website-redesign">Website Redesign</option>
        <option value="ecommerce">E-commerce Site</option>
        <option value="landing-page">Landing Page</option>
        <option value="ongoing-support">Ongoing Support</option>
        <option value="other">Other</option>
      </Select>

      <div className="grid gap-6 md:grid-cols-2">
        <Select
          label="Budget *"
          {...register('budget')}
          error={errors.budget?.message}
        >
          <option value="">Select your budget</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-20k">$10,000 - $20,000</option>
          <option value="20k-50k">$20,000 - $50,000</option>
          <option value="50k-plus">$50,000+</option>
          <option value="not-sure">Not sure yet</option>
        </Select>

        <Select
          label="Timeline *"
          {...register('timeline')}
          error={errors.timeline?.message}
        >
          <option value="">Select your timeline</option>
          <option value="urgent">Urgent (1-2 weeks)</option>
          <option value="soon">Soon (1 month)</option>
          <option value="flexible">Flexible (2-3 months)</option>
          <option value="exploring">Just exploring</option>
        </Select>
      </div>

      <Textarea
        label="Message *"
        placeholder="Tell us about your project..."
        rows={6}
        {...register('message')}
        error={errors.message?.message}
      />

      {submitStatus === 'success' && (
        <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-green-500">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-red-500">
          Oops! Something went wrong. Please try again or email us directly.
        </div>
      )}

      <Button type="submit" size="large" loading={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
