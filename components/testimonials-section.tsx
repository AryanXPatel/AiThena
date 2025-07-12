import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    university: "MIT",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "AIthena's Code Master helped me ace my algorithms course. The step-by-step explanations and visual debugging made complex concepts finally click!",
  },
  {
    name: "Marcus Johnson",
    role: "Pre-Med Student",
    university: "Harvard University",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "The Document Intelligence Hub saved me hours of studying. It extracts key concepts from my textbooks and creates perfect study guides automatically.",
  },
  {
    name: "Elena Rodriguez",
    role: "High School Senior",
    university: "Preparing for College",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "The Essay Writing Assistant helped me improve my writing dramatically. My SAT essay scores went up by 200 points!",
  },
  {
    name: "David Kim",
    role: "MBA Student",
    university: "Stanford Graduate School",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "Financial Literacy Tutor made complex economic concepts simple. The interactive simulations are incredibly helpful for case studies.",
  },
  {
    name: "Priya Patel",
    role: "Language Learning Enthusiast",
    university: "Self-Directed Learner",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "Learning Spanish with the Language Companion feels like having a personal tutor. The pronunciation feedback is spot-on!",
  },
  {
    name: "Alex Thompson",
    role: "History Major",
    university: "Oxford University",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "The History Timeline Explorer brings historical events to life. I can finally understand complex cause-and-effect relationships.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Loved by Students Worldwide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how AIthena is transforming the learning experience for students across all disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.university}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
