import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServiceOverview } from "@/components/service-overview"
import { GalleryCarousel } from "@/components/gallery-carousel"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { WhyChooseUsPreview } from "@/components/why-choose-us-preview"
import { CoverageAreas } from "@/components/coverage-areas"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServiceOverview />
      <GalleryCarousel />
      <TestimonialsCarousel />
      <WhyChooseUsPreview />
      <CoverageAreas />
      <CallToAction />
      <Footer />
    </main>
  )
}
