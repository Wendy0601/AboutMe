"use client"

import Image from "next/image"
import { useState } from "react"
import { ZoomIn } from "lucide-react"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-lg border-2 ${
              index === activeIndex ? "border-electric-blue shadow-glow" : "border-gray-700"
            } transition-all duration-300 hover:border-electric-blue hover:shadow-glow`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="relative aspect-square">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ZoomIn className="h-8 w-8 text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
