import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Shield, Award, ArrowRight } from "lucide-react"

export function WhyChooseUsPreview() {
  const highlights = [
    {
      icon: Clock,
      title: "Rapid Response",
      description: "30-60 minute typical response across the West Midlands",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete peace of mind with comprehensive coverage",
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Professional operators handling every vehicle with care",
    },
  ]

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Hadleys Recovery?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of customers across the West Midlands
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/why-choose-us">
              See All Reasons
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
