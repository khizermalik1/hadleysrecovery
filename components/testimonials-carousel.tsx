"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react"
import { testimonials } from "@/lib/testimonials"

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - visibleCount)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [maxIndex])

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount)

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real customers across the West Midlands
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 justify-center">
            {visibleTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="flex-1 max-w-sm bg-card border-border"
              >
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground mb-4 leading-relaxed">
                    {`"${testimonial.text}"`}
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.area}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / visibleCount) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleCount)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / visibleCount) === index
                  ? "bg-primary"
                  : "bg-border"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/testimonials">
              View All Reviews
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
