"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle } from "lucide-react"

interface EmailSignupFormProps {
  buttonText?: string
  className?: string
}

export function EmailSignupForm({ buttonText = "Get Brined", className = "" }: EmailSignupFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to Formspark using their API
      const response = await fetch("https://submit-form.com/3RKMkfBNQ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          _redirect: false, // Tell Formspark not to redirect
        }),
      })

      if (response.ok) {
        // Show success message
        setIsSubmitted(true)
        setEmail("")

        // Log success for debugging
        console.log("Form submitted successfully to Formspark")
      } else {
        const errorData = await response.json().catch(() => null)
        console.error("Formspark submission error:", errorData || response.statusText)
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`bg-green-100 text-green-800 p-4 rounded-md flex items-center ${className}`}>
        <CheckCircle className="mr-2 h-5 w-5" />
        <span>Thanks! We'll keep you updated about Queer Spears.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2 max-w-md ${className}`}>
      <Input
        type="email"
        name="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white/90 text-black"
        required
      />
      <Button type="submit" disabled={isSubmitting} className="bg-pink-600 hover:bg-pink-700 text-white font-medium">
        {isSubmitting ? "Submitting..." : buttonText}
      </Button>
    </form>
  )
}
