import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, CheckCircle, Zap, Shield, Heart } from "lucide-react"

const benefits = [
  { icon: Zap, text: "Instant AI responses" },
  { icon: Shield, text: "100% free forever" },
  { icon: Heart, text: "No credit card required" },
  { icon: CheckCircle, text: "All 17 tools included" },
  { icon: Sparkles, text: "Powered by Gemini AI" },
  { icon: CheckCircle, text: "Mobile-optimized" },
]

export default function CTASection() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 mr-2" />
            Join 100,000+ Students
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Your Learning?
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Start your AI-powered academic journey today. Access all 17 study tools, get instant help, and join
            thousands of successful students.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
          <CardContent className="p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What you get:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon
                    return (
                      <div key={index} className="flex items-center text-white/90">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium">{benefit.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center lg:text-right">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">$0</div>
                  <div className="text-purple-200">Forever free • No limits</div>
                </div>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full lg:w-auto bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold text-lg px-8 py-4 h-auto shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 group"
                  >
                    Start Learning Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full lg:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4 h-auto bg-transparent"
                  >
                    Watch 2-min Demo
                  </Button>
                </div>

                <p className="text-purple-200 text-sm mt-4">✨ Get started in under 30 seconds</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
