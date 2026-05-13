"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageIcon, Upload, X, Plus } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
}

// Initial sample images
const initialImages: GalleryImage[] = [
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

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>(initialImages)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [newCaption, setNewCaption] = useState("")
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleUpload = () => {
    if (previewUrl && newCaption) {
      const newImage: GalleryImage = {
        id: Date.now(),
        src: previewUrl,
        alt: newCaption,
        caption: newCaption,
      }
      setImages((prev) => [newImage, ...prev])
      setPreviewUrl(null)
      setNewCaption("")
      setShowUploadForm(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Browse through photos of our recent vehicle recovery and transport jobs across Birmingham and the West Midlands
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Button onClick={() => setShowUploadForm(!showUploadForm)}>
              <Plus className="w-4 h-4 mr-2" />
              Upload New Image
            </Button>
          </div>

          {showUploadForm && (
            <Card className="max-w-md mx-auto mb-12 bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="image">Select Image</Label>
                    <Input
                      ref={fileInputRef}
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="cursor-pointer"
                    />
                  </div>

                  {previewUrl && (
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary">
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="caption">Caption</Label>
                    <Input
                      id="caption"
                      value={newCaption}
                      onChange={(e) => setNewCaption(e.target.value)}
                      placeholder="e.g. Breakdown recovery in Solihull"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleUpload} disabled={!previewUrl || !newCaption} className="flex-1">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                    <Button variant="outline" onClick={() => setShowUploadForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all bg-card border-border"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-video bg-secondary">
                  {imageErrors[image.id] ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-muted-foreground mb-2" />
                      <p className="text-xs text-muted-foreground">Image placeholder</p>
                    </div>
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(image.id)}
                    />
                  )}
                </div>
                <CardContent className="p-4">
                  <p className="text-foreground font-medium">{image.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-card hover:bg-secondary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary">
              {imageErrors[selectedImage.id] ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Image placeholder</p>
                </div>
              ) : (
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  onError={() => handleImageError(selectedImage.id)}
                />
              )}
            </div>
            <p className="text-center text-foreground font-medium mt-4">{selectedImage.caption}</p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
