import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesShowcase } from "@/components/features-showcase"
import { StatsSection } from "@/components/stats-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      <FloatingElements />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <FeaturesShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
