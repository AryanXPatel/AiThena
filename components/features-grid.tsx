import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Study Assistant",
    description:
      "Conversational AI tutor for instant help with any subject. Get step-by-step solutions and concept explanations.",
    category: "Core",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: FileText,
    title: "Document Intelligence Hub",
    description:
      "AI-powered document analysis and summarization. Upload PDFs, generate notes, and extract key concepts.",
    category: "Analysis",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Brain,
    title: "Smart Quiz Generator",
    description: "Generate assessments from any content with multiple question types and instant feedback.",
    category: "Assessment",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Calendar,
    title: "Study Planner & Scheduler",
    description: "AI-optimized study schedules with deadline tracking and adaptive planning based on performance.",
    category: "Planning",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: CreditCard,
    title: "Flashcard Studio",
    description: "AI-generated flashcards with spaced repetition algorithm and multimedia support.",
    category: "Memory",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Search,
    title: "Research Assistant",
    description: "AI-powered research tool with source verification, citation generation, and plagiarism detection.",
    category: "Research",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Code,
    title: "Code Master",
    description: "Interactive coding tutor with real-time feedback, debugging help, and multi-language support.",
    category: "Programming",
    color: "bg-slate-100 text-slate-600",
  },
  {
    icon: Database,
    title: "DSA Guru",
    description: "Specialized tutor for data structures and algorithms with visual explanations and interview prep.",
    category: "Computer Science",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Youtube,
    title: "YouTube Knowledge Extractor",
    description: "Extract and summarize key points from educational videos with interactive transcripts.",
    category: "Content",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Builder",
    description: "AI-powered knowledge synthesis across multiple sources with intelligent organization.",
    category: "Organization",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Languages,
    title: "Language Learning Companion",
    description: "Conversational AI for language practice with pronunciation feedback and cultural context.",
    category: "Languages",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: PenTool,
    title: "Essay Writing Assistant",
    description: "AI writing coach with grammar checking, style suggestions, and citation formatting.",
    category: "Writing",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Clock,
    title: "History Timeline Explorer",
    description: "Interactive historical learning with AI narration and cause-effect relationship mapping.",
    category: "History",
    color: "bg-stone-100 text-stone-600",
  },
  {
    icon: DollarSign,
    title: "Financial Literacy Tutor",
    description: "Personal finance education with budgeting simulations and investment portfolio analysis.",
    category: "Finance",
    color: "bg-lime-100 text-lime-600",
  },
  {
    icon: Users,
    title: "Career Guidance Counselor",
    description: "AI-powered career planning with aptitude assessments and interview preparation.",
    category: "Career",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: GitBranch,
    title: "Mind Mapping & Visualizer",
    description: "AI-assisted knowledge visualization with automatic mind map generation and concept mapping.",
    category: "Visualization",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Swords,
    title: "AI Debate Arena",
    description: "Practice debates with AI opponents, logical fallacy detection, and critical thinking development.",
    category: "Critical Thinking",
    color: "bg-fuchsia-100 text-fuchsia-600",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">17 AI-Powered Study Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for academic success, powered by Google Gemini AI. From instant tutoring to
            comprehensive study planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg ${feature.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
