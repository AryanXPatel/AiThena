"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"
import { IconArrowRight as ArrowRight, IconSparkles as Sparkles } from "@tabler/icons-react"

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Study", "Learn", "Excel", "Succeed"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200/50 px-4 py-2 text-sm font-medium hover:scale-105 transition-transform">
              <Sparkles className="h-4 w-4 mr-2" />
              Beta Version • Powered by Google Gemini AI
            </Badge>
          </div>

          {/* Main heading with animated text */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 mb-8">
            <span className="block">Your AI-Powered</span>
            <span className="block relative">
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 bg-clip-text text-transparent">
                {words[currentWord]}
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2 text-gray-600 font-medium">
                Companion
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-3xl text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed">
            Experience the future of learning with{" "}
            <span className="font-semibold text-purple-600">17 AI-powered tools</span> designed to revolutionize your
            academic journey. Currently in beta development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 h-auto shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group"
            >
              Join Beta Program
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-white/50 backdrop-blur-sm border-gray-300 hover:bg-white/80 hover:scale-105 transition-all duration-300 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Demo
            </Button>
          </div>

          {/* Beta status */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2" />
              <span>Beta Program Active</span>
            </div>
            <div className="flex items-center">
              <span>Early Access Available</span>
            </div>
            <div className="flex items-center">
              <span>Portfolio Project</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards preview */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-8 transform -rotate-12 opacity-20 hover:opacity-30 transition-opacity">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200/50">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-2" />
            <div className="h-2 bg-gray-200 rounded mb-1" />
            <div className="h-2 bg-gray-200 rounded w-3/4" />
          </div>
        </div>
        <div className="absolute top-1/3 right-8 transform rotate-12 opacity-20 hover:opacity-30 transition-opacity">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200/50">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-2" />
            <div className="h-2 bg-gray-200 rounded mb-1" />
            <div className="h-2 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      </div>
    </section>
  )
}
