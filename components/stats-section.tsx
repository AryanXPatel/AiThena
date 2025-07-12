"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, Globe, Zap, Users, BookOpen, Award, Target } from "lucide-react"

const stats = [
  {
    icon: BookOpen,
    value: "17",
    label: "AI Tools",
    description: "Comprehensive study suite",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Zap,
    value: "<1s",
    label: "Response Time",
    description: "Lightning-fast AI help",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Languages",
    description: "Global accessibility",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Target,
    value: "24/7",
    label: "Availability",
    description: "Always here to help",
    color: "from-cyan-500 to-cyan-600",
  },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="py-20 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Future of Learning
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore how AIthena's AI-powered study tools are set to revolutionize the academic journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center relative z-10">
                  <div className="relative mb-4">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-r ${stat.color} p-3 sm:p-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-gray-500 leading-tight">{stat.description}</div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
