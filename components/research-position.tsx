import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { getImagePath } from "@/lib/image-path"

interface ResearchPositionProps {
  title: string
  project: string
  location: string
  period: string
  achievements: string[]
  imageIndex?: number
  imageSrc?: string
}

export default function ResearchPosition({
  title,
  project,
  location,
  period,
  achievements,
  imageIndex = 0,
  imageSrc,
}: ResearchPositionProps) {
  // Function to process text and highlight bold sections
  const formatText = (text: string) => {
    if (!text.includes("\\textbf{")) return text

    const parts = []
    let currentIndex = 0
    let startBold = text.indexOf("\\textbf{", currentIndex)

    while (startBold !== -1) {
      // Add text before bold
      if (startBold > currentIndex) {
        parts.push(<span key={`text-${currentIndex}`}>{text.substring(currentIndex, startBold)}</span>)
      }

      // Find end of bold section
      const endBold = text.indexOf("}", startBold)
      if (endBold === -1) break

      // Extract and add bold text
      const boldText = text.substring(startBold + 7, endBold) // +7 to skip \textbf{
      parts.push(
        <span key={`bold-${startBold}`} className="font-semibold text-electric-blue">
          {boldText}
        </span>,
      )

      currentIndex = endBold + 1
      startBold = text.indexOf("\\textbf{", currentIndex)
    }

    // Add remaining text
    if (currentIndex < text.length) {
      parts.push(<span key={`text-end`}>{text.substring(currentIndex)}</span>)
    }

    return <>{parts}</>
  }

  // Clean text by removing LaTeX formatting
  const cleanText = (text: string) => {
    return text.replace(/\\textbf\{([^}]+)\}/g, "$1")
  }

  // Demo images based on research area
  const demoImages = [
    "/placeholder.svg?height=150&width=250",
    "/placeholder.svg?height=150&width=250&text=Neural+Networks",
    "/placeholder.svg?height=150&width=250&text=Power+Grid",
    "/placeholder.svg?height=150&width=250&text=Verification",
    "/placeholder.svg?height=150&width=250&text=Graph+Neural+Networks",
    "/placeholder.svg?height=150&width=250&text=Physics-Informed+ML",
  ]

  // Use provided image source or fall back to demo images
  const imageSource = imageSrc || demoImages[imageIndex % demoImages.length] || "/placeholder.svg"

  return (
    <div className="rounded-lg border border-gray-800 bg-midnight-blue/50 p-6 shadow-glow transition-all hover:shadow-glow-intense">
      <div className="mb-4 flex flex-col md:flex-row md:gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-1 text-lg text-electric-blue">{formatText(project)}</p>

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
            <div className="flex items-center">
              <MapPin className="mr-1 h-4 w-4" />
              {location}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {period}
            </div>
          </div>
        </div>

        <div className="mt-3 md:mt-0 md:w-1/3">
          <div className="overflow-hidden rounded border border-gray-700">
            <Image
              src={getImagePath(imageSource) || "/placeholder.svg"}
              alt={`Visualization for ${cleanText(project)}`}
              width={250}
              height={150}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      <ul className="space-y-2 text-gray-300">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex">
            <span className="mr-2">•</span>
            <span>{formatText(achievement)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
