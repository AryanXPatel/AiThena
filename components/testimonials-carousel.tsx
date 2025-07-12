"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    university: "MIT",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "AIthena's Code Master transformed my programming journey. The AI explanations are so clear, and the debugging help saved me countless hours. My grades improved from B+ to A in just one semester!",
    tool: "Code Master",
    improvement: "Grade: B+ → A",
  },
  {
    name: "Marcus Johnson",
    role: "Pre-Med Student",
    university: "Harvard University",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The Document Intelligence Hub is a game-changer. It processes my 500-page textbooks and creates perfect study guides. I've cut my study time in half while understanding concepts better than ever.",
    tool: "Document Intelligence",
    improvement: "Study Time: -50%",
  },
  {
    name: "Elena Rodriguez",
    role: "High School Senior",
    university: "College Prep",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The Essay Writing Assistant helped me craft compelling college application essays. The AI feedback on structure and style was invaluable. I got accepted to my dream school!",
    tool: "Essay Assistant",
    improvement: "Dream School: ✓",
  },
  {
    name: "David Kim",
    role: "MBA Student",
    university: "Stanford GSB",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Financial Literacy Tutor made complex economic models accessible. The interactive simulations helped me excel in my finance courses and land a top consulting internship.",
    tool: "Financial Tutor",
    improvement: "Internship: Secured",
  },
  {
    name: "Priya Patel",
    role: "Language Enthusiast",
    university: "Self-Directed Learning",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Learning Mandarin with the Language Companion feels natural. The pronunciation feedback and cultural context helped me achieve conversational fluency in 6 months.",
    tool: "Language Companion",
    improvement: "Fluency: 6 months",
  },
  {
    name: "Alex Thompson",
    role: "History Major",
    university: "Oxford University",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The History Timeline Explorer brings the past to life. Complex historical relationships become clear through AI-powered visualizations. My thesis research became so much more efficient.",
    tool: "Timeline Explorer",
    improvement: "Research: 3x faster",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-transparent to-pink-100/20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success Stories from
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Real Students
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how students worldwide are achieving academic excellence with AIthena's AI-powered study tools.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <Card className="relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Quote icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Quote className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                    "{currentTestimonial.content}"
                  </blockquote>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center">
                      <Avatar className="h-14 w-14 mr-4 ring-4 ring-purple-100">
                        <AvatarImage
                          src={currentTestimonial.avatar || "/placeholder.svg"}
                          alt={currentTestimonial.name}
                        />
                        <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
                          {currentTestimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">{currentTestimonial.name}</div>
                        <div className="text-gray-600">{currentTestimonial.role}</div>
                        <div className="text-sm text-gray-500">{currentTestimonial.university}</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200/50">
                        {currentTestimonial.tool}
                      </Badge>
                      <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">
                        {currentTestimonial.improvement}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevTestimonial}
              className="bg-white/80 backdrop-blur-sm hover:bg-white border-gray-200 hover:border-purple-300 hover:text-purple-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextTestimonial}
              className="bg-white/80 backdrop-blur-sm hover:bg-white border-gray-200 hover:border-purple-300 hover:text-purple-600"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
