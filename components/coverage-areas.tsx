"use client"

import { MapPin } from "lucide-react"

export function CoverageAreas() {
  const areas = [
    // Birmingham Areas
    "Birmingham City Centre", "Solihull", "Sutton Coldfield", "Erdington", "Edgbaston",
    "Moseley", "Kings Heath", "Selly Oak", "Northfield", "Harborne", "Handsworth",
    "Small Heath", "Sparkbrook", "Yardley", "Castle Bromwich", "Sheldon",
    // West Midlands
    "Wolverhampton", "Coventry", "Dudley", "Walsall", "West Bromwich", "Sandwell",
    "Smethwick", "Oldbury", "Tipton", "Halesowen", "Stourbridge", "Kingswinford",
    // Worcestershire
    "Redditch", "Bromsgrove", "Worcester", "Droitwich", "Kidderminster", "Evesham",
    "Pershore", "Malvern", "Bewdley", "Stourport-on-Severn",
    // Warwickshire
    "Warwick", "Leamington Spa", "Stratford-upon-Avon", "Kenilworth", "Rugby",
    "Nuneaton", "Bedworth", "Atherstone", "Alcester", "Henley-in-Arden",
    // Other nearby areas
    "Tamworth", "Lichfield", "Cannock", "Stafford", "Telford", "Shrewsbury",
    "Gloucester", "Cheltenham", "Tewkesbury"
  ]

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Areas We Cover
          </h2>
          <p className="text-muted-foreground">
            Providing vehicle recovery and transport services across Birmingham, the West Midlands, and surrounding areas
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
          {areas.map((area) => (
            <div key={area} className="flex items-center gap-1 text-xs bg-card border border-border rounded-full px-3 py-1.5">
              <MapPin className="w-3 h-3 text-primary" />
              <span className="text-foreground">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
