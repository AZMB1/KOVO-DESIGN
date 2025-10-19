import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.enum([
    "new-website",
    "website-redesign",
    "ecommerce",
    "landing-page",
    "ongoing-support",
    "other",
  ], {
    errorMap: () => ({ message: "Please select a project type" }),
  }),
  budget: z.enum([
    "under-5k",
    "5k-10k",
    "10k-20k",
    "20k-50k",
    "50k-plus",
    "not-sure",
  ], {
    errorMap: () => ({ message: "Please select a budget range" }),
  }),
  timeline: z.enum([
    "urgent",
    "soon",
    "flexible",
    "exploring",
  ], {
    errorMap: () => ({ message: "Please select a timeline" }),
  }),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
