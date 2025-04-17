"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle } from "lucide-react"

interface EmailSignupFormProps {
  buttonText?: string
  className?: string
}

export function EmailSignupFormAlternative({ buttonText = "Get Brined", className = "" }: EmailSignupFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  // This is a backup approach using a hidden iframe for submission
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    // Set up message listener for iframe response
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "form-submit-success") {
        setIsSubmitted(true)
        setEmail("")
        setIsSubmitting(false)
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
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

    // Use the primary method first (fetch)
    fetch("https://submit-form.com/3RKMkfBNQ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        _redirect: false,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true)
          setEmail("")
        } else {
          // If the fetch method fails, fall back to traditional form submission
          if (formRef.current) {
            formRef.current.submit()
            // We'll handle the success in the iframe message listener
          }
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error)
        // Fall back to traditional form submission
        if (formRef.current) {
          formRef.current.submit()
        }
      })
      .finally(() => {
        // If we're using the fallback, we'll keep isSubmitting true
        // until we get the message from the iframe
        if (isSubmitted) {
          setIsSubmitting(false)
        }
      })
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
    <>
      {/* Hidden iframe for form target */}
      <iframe
        ref={iframeRef}
        name="hidden-form-target"
        style={{ display: "none" }}
        onLoad={() => setIframeLoaded(true)}
      ></iframe>

      {/* Visible form */}
      <form
        ref={formRef}
        method="POST"
        action="https://submit-form.com/3RKMkfBNQ"
        target="hidden-form-target"
        onSubmit={handleSubmit}
        className={`flex flex-col sm:flex-row gap-2 max-w-md ${className}`}
      >
        <input type="hidden" name="_redirect" value="false" />
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
    </>
  )
}
