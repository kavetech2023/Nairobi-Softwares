"use server"

import { Resend } from "resend"

export async function sendContactEmail(formData: FormData) {
  try {
    // Ensure the API key is available
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    if (!RESEND_API_KEY) {
      console.error("❌ Resend API key missing. Set RESEND_API_KEY in your environment.")
      return {
        success: false,
        error:
          "Email service is not configured. Please try again later or contact us directly at hello@nairobisoftwares.com.",
      }
    }

    // Extract form data with proper validation
    const firstName = formData.get("firstName")?.toString()?.trim()
    const lastName = formData.get("lastName")?.toString()?.trim()
    const email = formData.get("email")?.toString()?.trim()
    const projectType = formData.get("projectType")?.toString()?.trim()
    const message = formData.get("message")?.toString()?.trim()

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      }
    }

    // Create the Resend client
    const resend = new Resend(RESEND_API_KEY)

    // Send email
    const result = await resend.emails.send({
      from: "Nairobi Softwares <noreply@yourdomain.com>", // Replace with your verified domain
      to: ["kavetech@gmail.com"],
      subject: `New Contact Form Submission - ${projectType || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This email was sent from the Nairobi Softwares contact form.</p>
            <p>Reply directly to this email to respond to ${firstName}.</p>
          </div>
        </div>
      `,
      replyTo: email,
    })

    if (result.error) {
      console.error("Resend API error:", result.error)
      return {
        success: false,
        error: "Failed to send message. Please try again or contact us directly.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Server action error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again or contact us directly.",
    }
  }
}
