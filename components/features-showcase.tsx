"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  FileText,
  Brain,
  Calendar,
  CreditCard,
  Search,
  Code,
  Database,
  Youtube,
  BookOpen,
  Languages,
  PenTool,
  Clock,
  DollarSign,
  Users,
  GitBranch,
  Swords,
  ArrowRight,
  Sparkles,
} from "lucide-react"

const categories = [
  { id: "all", name: "All Tools", count: 17 },
  { id: "core", name: "Core Learning", count: 4 },
  { id: "programming", name: "Programming", count: 2 },
  { id: "content", name: "Content Analysis", count: 3 },
  { id: "specialized", name: "Specialized", count: 8 },
]

const features = [
  {
    icon: MessageSquare,
    title: "AI Study Assistant",
    description: "Conversational AI tutor providing instant help with step-by-step solutions across all subjects.",
    category: "core",
    gradient: "from-purple-500 to-purple-600",
    popular: true,
  },
  {
    icon: FileText,
    title: "Document Intelligence Hub",
    description: "Advanced document analysis with automatic note generation and key concept extraction.",
    category: "content",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "Smart Quiz Generator",
    description: "AI-generated assessments with multiple question types and intelligent feedback systems.",
    category: "core",
    gradient: "from-green-500 to-green-600",
    popular: true,
  },
  {
    icon: Calendar,
    title: "Study Planner & Scheduler",
    description: "Intelligent scheduling with adaptive planning based on your learning progress and goals.",
    category: "core",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: CreditCard,
    title: "Flashcard Studio",
    description: "Spaced repetition flashcards with multimedia support and collaborative sharing features.",
    category: "core",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: Search,
    title: "Research Assistant",
    description: "Comprehensive research tool with source verification and automatic citation generation.",
    category: "content",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Code,
    title: "Code Master",
    description: "Interactive coding tutor with real-time debugging and multi-language support.",
    category: "programming",
    gradient: "from-slate-500 to-slate-600",
    popular: true,
  },
  {
    icon: Database,
    title: "DSA Guru",
    description: "Data structures and algorithms tutor with visual explanations and interview preparation.",
    category: "programming",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Youtube,
    title: "YouTube Knowledge Extractor",
    description: "Transform educational videos into structured notes with AI-powered summarization.",
    category: "content",
    gradient: "from-red-500 to-red-600",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Builder",
    description: "Intelligent knowledge synthesis across multiple sources with semantic connections.",
    category: "specialized",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Languages,
    title: "Language Learning Companion",
    description: "Conversational AI for language practice with pronunciation feedback and cultural context.",
    category: "specialized",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    icon: PenTool,
    title: "Essay Writing Assistant",
    description: "Advanced writing coach with grammar checking and argument structure analysis.",
    category: "specialized",
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: Clock,
    title: "History Timeline Explorer",
    description: "Interactive historical learning with AI narration and relationship mapping.",
    category: "specialized",
    gradient: "from-stone-500 to-stone-600",
  },
  {
    icon: DollarSign,
    title: "Financial Literacy Tutor",
    description: "Personal finance education with simulations and real-world case studies.",
    category: "specialized",
    gradient: "from-lime-500 to-lime-600",
  },
  {
    icon: Users,
    title: "Career Guidance Counselor",
    description: "AI-powered career planning with industry insights and skill development paths.",
    category: "specialized",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    icon: GitBranch,
    title: "Mind Mapping & Visualizer",
    description: "AI-assisted knowledge visualization with automatic concept relationship mapping.",
    category: "specialized",
    gradient: "from-rose-500 to-rose-600",
  },
  {
    icon: Swords,
    title: "AI Debate Arena",
    description: "Practice debates with AI opponents and develop critical thinking skills.",
    category: "specialized",
    gradient: "from-fuchsia-500 to-fuchsia-600",
  },
]

export function FeaturesShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredFeatures = features.filter((feature) => activeCategory === "all" || feature.category === activeCategory)

  return (
    <section id="features" className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200/50">
            <Sparkles className="h-4 w-4 mr-2" />
            17 Powerful AI Tools
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Excel Academically
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From instant tutoring to comprehensive study planning, our AI-powered ecosystem adapts to your learning
            style and helps you achieve your academic goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg"
                  : "hover:bg-purple-50 hover:border-purple-300"
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {feature.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-white border-0 shadow-lg">
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Try All Tools Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
