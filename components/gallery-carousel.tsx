"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, ImageIcon } from "lucide-react"

// Sample gallery images - in production these would come from a database/storage
const galleryImages = [
  {
    id: 1,
    src: "/gallery/job-1.jpg",
    alt: "Vehicle recovery in Birmingham",
    caption: "Late night recovery in Birmingham city centre",
  },
  {
    id: 2,
    src: "/gallery/job-2.jpg",
    alt: "Car transport to garage",
    caption: "Classic car transport to specialist garage",
  },
  {
    id: 3,
    src: "/gallery/job-3.jpg",
    alt: "Breakdown recovery on motorway",
    caption: "M42 breakdown recovery",
  },
  {
    id: 4,
    src: "/gallery/job-4.jpg",
    alt: "Accident recovery service",
    caption: "Accident recovery in Solihull",
  },
  {
    id: 5,
    src: "/gallery/job-5.jpg",
    alt: "Motorcycle transport",
    caption: "Motorcycle collection from dealer",
  },
]

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= galleryImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? galleryImages.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Jobs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of our recent vehicle recovery and transport jobs across the West Midlands
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary">
            {imageErrors[galleryImages[currentIndex].id] ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary">
                <ImageIcon className="w-16 h-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-sm">{galleryImages[currentIndex].caption}</p>
              </div>
            ) : (
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-cover"
                onError={() => handleImageError(galleryImages[currentIndex].id)}
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">{galleryImages[currentIndex].caption}</p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-primary" : "bg-border"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
