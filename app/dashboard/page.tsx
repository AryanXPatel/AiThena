"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
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
  Flame,
  Download,
  Share2,
  ArrowRight,
  Sparkles,
} from "lucide-react"

// --- UNIFIED DATA STRUCTURE WITH GRADIENTS ---

const toolCategories = {
  all: "All Tools",
  core: "Core Learning",
  programming: "Programming",
  content: "Content Analysis",
  specialized: "Specialized",
}

const allTools = [
  {
    icon: MessageSquare,
    title: "AI Study Assistant",
    description: "Conversational AI tutor for step-by-step help.",
    category: "core",
    favorite: true,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: FileText,
    title: "Document Intelligence Hub",
    description: "Analyze documents, get notes, and extract concepts.",
    category: "content",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "Smart Quiz Generator",
    description: "AI-generated quizzes with multiple question types.",
    category: "core",
    favorite: true,
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Code,
    title: "Code Master",
    description: "Interactive coding tutor with real-time debugging.",
    category: "programming",
    favorite: true,
    gradient: "from-slate-500 to-slate-600",
  },
  {
    icon: Youtube,
    title: "YouTube Knowledge Extractor",
    description: "Transform videos into structured notes and summaries.",
    category: "content",
    gradient: "from-red-500 to-red-600",
  },
  {
    icon: PenTool,
    title: "Essay Writing Assistant",
    description: "Writing coach with grammar and structure analysis.",
    category: "specialized",
    favorite: true,
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: Calendar,
    title: "Study Planner & Scheduler",
    description: "Intelligent scheduling with adaptive planning based on your learning progress.",
    category: "core",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: CreditCard,
    title: "Flashcard Studio",
    description: "Spaced repetition flashcards with multimedia support.",
    category: "core",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: Search,
    title: "Research Assistant",
    description: "Find sources, verify info, and generate citations.",
    category: "content",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Database,
    title: "DSA Guru",
    description: "Data structures and algorithms tutor with visuals.",
    category: "programming",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Builder",
    description: "Synthesize knowledge from multiple sources.",
    category: "specialized",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Languages,
    title: "Language Learning Companion",
    description: "Conversational AI for language practice.",
    category: "specialized",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    icon: Clock,
    title: "History Timeline Explorer",
    description: "Interactive historical learning with AI narration.",
    category: "specialized",
    gradient: "from-stone-500 to-stone-600",
  },
  {
    icon: DollarSign,
    title: "Financial Literacy Tutor",
    description: "Personal finance education with simulations.",
    category: "specialized",
    gradient: "from-lime-500 to-lime-600",
  },
  {
    icon: Users,
    title: "Career Guidance Counselor",
    description: "AI-powered career planning and skill development.",
    category: "specialized",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    icon: GitBranch,
    title: "Mind Mapping & Visualizer",
    description: "AI-assisted knowledge visualization and mapping.",
    category: "specialized",
    gradient: "from-rose-500 to-rose-600",
  },
  {
    icon: Swords,
    title: "AI Debate Arena",
    description: "Practice debates with AI opponents to hone skills.",
    category: "specialized",
    gradient: "from-fuchsia-500 to-fuchsia-600",
  },
]

const recentActivities = [
  {
    icon: FileText,
    title: "Summary of 'The Digital Divide'",
    description: "Generated 15 minutes ago",
    type: "Document",
  },
  {
    icon: Brain,
    title: "Quiz on 'Cellular Biology'",
    description: "Created 2 hours ago",
    type: "Quiz",
  },
  {
    icon: Code,
    title: "Debugged 'quicksort.js'",
    description: "1 error fixed, 1 day ago",
    type: "Code",
  },
  {
    icon: Youtube,
    title: "Notes from 'History of Rome'",
    description: "Extracted 2 days ago",
    type: "Video",
  },
]

const weeklyGoals = [
  { title: "Generate 3 quizzes", progress: 66 },
  { title: "Summarize 5 research papers", progress: 40 },
  { title: "Complete 2 coding challenges", progress: 100 },
]

// --- DASHBOARD COMPONENT ---

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const favoriteTools = allTools.filter((tool) => tool.favorite)
  const filteredTools = allTools.filter(
    (tool) =>
      (activeCategory === "all" || tool.category === activeCategory) &&
      tool.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-8">
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome back, Alex!
          </h1>
          <p className="text-muted-foreground text-md lg:text-lg">
            Your personal learning hub is ready.
          </p>
        </div>
      </div>

      {/* --- MAIN GRID --- */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <Card className="bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
            <CardHeader>
              <CardTitle>Weekly Goals</CardTitle>
              <CardDescription>Your progress this week.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {weeklyGoals.map((goal, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-medium">{goal.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {goal.progress}%
                    </p>
                  </div>
                  <Progress value={goal.progress} className="[&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
            <CardHeader>
              <CardTitle>Study Streak</CardTitle>
              <CardDescription>Keep the flame alive!</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center gap-4 p-6">
              <Flame className="h-16 w-16 text-orange-400 drop-shadow-lg" />
              <div className="text-center">
                <p className="text-5xl font-bold bg-gradient-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">12</p>
                <p className="text-muted-foreground">days</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* --- RIGHT COLUMN (MY WORKSPACE) --- */}
        <div className="lg:col-span-2">
          <Card className="h-full bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <CardHeader>
              <CardTitle>My Workspace</CardTitle>
              <CardDescription>
                Your recent activity and generated content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentActivities.map((activity, i) => {
                  const Icon = activity.icon
                  return (
                    <div
                      key={i}
                      className="flex items-center p-3 rounded-lg hover:bg-purple-50/50 transition-colors"
                    >
                      <div className="p-3 bg-white shadow-md rounded-lg mr-4">
                        <Icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.description}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="hover:bg-purple-100">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-purple-100">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* --- QUICK ACCESS --- */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {favoriteTools.map((tool) => {
            const Icon = tool.icon
            return (
              <Card
                key={tool.title}
                className="group bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer"
              >
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.gradient} shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-purple-600 transition-colors">{tool.title}</h3>
                  </div>
                  <ArrowRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* --- ALL TOOLS SECTION --- */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">All Tools</h2>
        <p className="text-muted-foreground mb-4">
          Explore the full suite of 17 AI-powered tools.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for a tool..."
              className="pl-10 bg-white/60 backdrop-blur-sm focus:bg-white/80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {Object.entries(toolCategories).map(([key, name]) => (
              <Button
                key={key}
                variant={activeCategory === key ? "default" : "outline"}
                onClick={() => setActiveCategory(key)}
                className={`whitespace-nowrap transition-all duration-200 ${
                activeCategory === key
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white/60 backdrop-blur-sm hover:bg-purple-50 hover:border-purple-300"
              }`}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const Icon = tool.icon
            return (
              <Card
                key={tool.title}
                className="group bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer flex flex-col"
              >
                <CardHeader className="flex-row items-start gap-4">
                   <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.gradient} shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="group-hover:text-purple-600 transition-colors">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button variant="ghost" className="w-full text-purple-600 hover:text-purple-700 hover:bg-purple-100/80 group/btn">
                    Use Tool <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
