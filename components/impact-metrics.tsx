"use client"

import { useState } from "react"
import { FileText, Users, Code, Presentation } from "lucide-react"

export default function ImpactMetrics() {
  const [isVisible, setIsVisible] = useState(true)

  const metrics = [
    {
      icon: <FileText className="h-8 w-8 text-academic-blue" />,
      number: "20+",
      label: "Publications",
      description: "Peer-reviewed research papers",
    },
    {
      icon: <Users className="h-8 w-8 text-academic-blue" />,
      number: "500+",
      label: "Citations",
      description: "From researchers worldwide",
    },
    {
      icon: <Code className="h-8 w-8 text-academic-blue" />,
      number: "10+",
      label: "Open-Source Projects",
      description: "Real-world implementations",
    },
    {
      icon: <Presentation className="h-8 w-8 text-academic-blue" />,
      number: "15+",
      label: "Talks",
      description: "Among Universities, National Labs, and Conferences",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <div key={index} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
          <div className="mb-4 rounded-full bg-academic-blue/10 p-4">{metric.icon}</div>
          <h3 className="mb-2 text-3xl font-bold text-academic-blue">{metric.number}</h3>
          <p className="font-semibold text-dark-gray">{metric.label}</p>
          <p className="text-sm text-medium-gray">{metric.description}</p>
        </div>
      ))}
    </div>
  )
}
