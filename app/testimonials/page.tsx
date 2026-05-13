import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { testimonials } from "@/lib/testimonials"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Customer <span className="text-primary">Reviews</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Read what our customers across Birmingham and the West Midlands have to say about our vehicle recovery and transport services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-card border-border">
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
        </div>
      </section>

      <Footer />
    </main>
  )
}
