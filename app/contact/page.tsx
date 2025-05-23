"use client"

import type React from "react"

import { useState } from "react"
import { BookOpen, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // This would typically connect to a form submission service
    // For demo purposes, we'll just simulate a successful submission
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Thank you for your message! I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1000)
  }

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-3xl font-semibold text-academic-blue md:text-4xl">Contact</h1>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_2fr]">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded border border-gray-200 bg-white p-6">
              <h2 className="mb-6 text-xl font-semibold text-dark-gray">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-academic-blue" />
                  <div>
                    <p className="text-sm text-medium-gray">Email</p>
                    <a
                      href="mailto:liwenting0601@gmail.com"
                      className="text-dark-gray hover:text-academic-blue hover:underline"
                    >
                      liwenting0601@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-academic-blue" />
                  <div>
                    <p className="text-sm text-medium-gray">Office</p>
                    <p className="text-dark-gray">
                      Los Alamos National Laboratory
                      <br />
                      Los Alamos, NM 87545
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <BookOpen className="mr-3 h-5 w-5 text-academic-blue" />
                  <div>
                    <p className="text-sm text-medium-gray">Google Scholar</p>
                    <a
                      href="https://scholar.google.com/citations?user=acgZVaoAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-gray hover:text-academic-blue hover:underline"
                    >
                      View Publications & Citations
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Github className="mr-3 h-5 w-5 text-academic-blue" />
                  <div>
                    <p className="text-sm text-medium-gray">GitHub</p>
                    <a
                      href="https://github.com/wendy0601"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-gray hover:text-academic-blue hover:underline"
                    >
                      github.com/wendy0601
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Linkedin className="mr-3 h-5 w-5 text-academic-blue" />
                  <div>
                    <p className="text-sm text-medium-gray">LinkedIn</p>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-gray hover:text-academic-blue hover:underline"
                    >
                      linkedin.com/in/wenting-li
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-dark-gray">Research Collaboration</h2>
              <p className="text-dark-gray">
                I'm always open to discussing potential research collaborations in AI, machine learning, and
                cyber-physical systems. Feel free to reach out with your ideas!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded border border-gray-200 bg-white p-6">
            <h2 className="mb-6 text-xl font-semibold text-dark-gray">Send a Message</h2>

            {formStatus.type && (
              <div
                className={`mb-6 rounded-md p-4 ${
                  formStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-dark-gray">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus-visible:ring-academic-blue"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-dark-gray">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus-visible:ring-academic-blue"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-dark-gray">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus-visible:ring-academic-blue"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-dark-gray">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-gray-300 focus-visible:ring-academic-blue"
                />
              </div>

              <Button type="submit" className="w-full bg-academic-blue text-white hover:bg-academic-blue/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
