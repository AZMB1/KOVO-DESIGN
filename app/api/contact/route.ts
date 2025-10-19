import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z.string().min(20, "Message must be at least 20 characters"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate request body
    const validatedData = contactSchema.parse(body)

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 503 }
      )
    }

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email via Resend
    const emailResponse = await resend.emails.send({
      from: "Kovo Design Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "hello@kovo-design.io",
      replyTo: validatedData.email,
      subject: `New Contact Form Submission - ${validatedData.projectType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ""}
        <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
        <p><strong>Budget:</strong> ${validatedData.budget}</p>
        <p><strong>Timeline:</strong> ${validatedData.timeline}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      )
    }

    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
