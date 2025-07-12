import {
  IconBook as Book,
  IconSparkles as Sparkles,
  IconBrandGithub as BrandGithub,
  IconBrandTwitter as BrandTwitter,
  IconBrandLinkedin as BrandLinkedin,
  IconMail as Mail,
  IconHeart as Heart,
  IconExternalLink as ExternalLink,
} from "@tabler/icons-react"
import Link from "next/link"

const footerSections = {
  product: {
    title: "Product",
    links: [
      { name: "Features Overview", href: "#features" },
      { name: "AI Study Assistant", href: "/assistant" },
      { name: "Code Master", href: "/code-master" },
      { name: "Document Hub", href: "/documents" },
      { name: "Quiz Generator", href: "/quizzes" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Getting Started", href: "/getting-started" },
      { name: "Beta Program", href: "/beta" },
      { name: "Feedback", href: "/feedback" },
      { name: "Roadmap", href: "/roadmap" },
    ],
  },
  developer: {
    title: "Developer",
    links: [
      { name: "Portfolio", href: "/portfolio", external: true },
      { name: "GitHub", href: "https://github.com", external: true },
      { name: "LinkedIn", href: "https://linkedin.com", external: true },
      { name: "Contact", href: "/contact" },
      { name: "About", href: "/about" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Beta Agreement", href: "/beta-terms" },
      { name: "Data Usage", href: "/data-usage" },
    ],
  },
}

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com", icon: BrandTwitter },
  { name: "GitHub", href: "https://github.com", icon: BrandGithub },
  { name: "LinkedIn", href: "https://linkedin.com", icon: BrandLinkedin },
  { name: "Email", href: "mailto:hello@aithena.dev", icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900/10" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-16">
          {/* Brand section - Enhanced readability */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-8 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="relative bg-white p-2.5 rounded-xl shadow-lg">
                  <Book className="h-6 w-6 text-purple-600" />
                  <Sparkles className="h-3 w-3 text-amber-500 absolute -top-1 -right-1" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AIthena
              </span>
            </Link>

            <div className="space-y-4 mb-8">
              <p className="text-slate-300 leading-relaxed text-base max-w-sm">
                An AI-powered study companion designed to revolutionize the learning experience through intelligent
                tutoring and comprehensive academic support.
              </p>

              <div className="inline-flex items-center px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse mr-2" />
                <span className="text-amber-300 text-sm font-medium">Beta Version</span>
              </div>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="group w-11 h-11 bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-700/50 hover:border-transparent"
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Links sections - Improved spacing and readability */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-slate-400 hover:text-white transition-all duration-200 text-sm leading-relaxed"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                      {link.external && (
                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section - Enhanced contrast and readability */}
        <div className="border-t border-slate-700/50 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center text-slate-400 text-sm">
              <span>© 2024 AIthena. Crafted with</span>
              <Heart className="h-4 w-4 text-red-400 mx-1.5 fill-current" />
              <span>for the future of learning.</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center text-slate-400">
                <span>Powered by Google Gemini AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-slate-400">Beta Status: Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
