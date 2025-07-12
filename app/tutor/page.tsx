"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp, Bot, User, Sparkles } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Header } from "@/components/header"
import { FloatingElements } from "@/components/floating-elements"

export default function TutorPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your AI Tutor. How can I help you with your studies today?" },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = { role: "user", content: inputValue.trim() }
      setMessages((prevMessages) => [...prevMessages, userMessage])
      setInputValue("")
      setIsLoading(true)

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          role: "assistant",
          content: "This is a simulated step-by-step solution. I would normally provide a detailed explanation based on your question.",
        }
        setMessages((prevMessages) => [...prevMessages, aiResponse])
        setIsLoading(false)
      }, 1500)
    }
  }

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      <FloatingElements />
      <Header />
      <div className="flex flex-col h-screen pt-20">
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 sm:p-6" ref={chatContainerRef}>
            <div className="mx-auto max-w-3xl space-y-8">
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start gap-4 ${message.role === "user" ? "justify-end" : ""}`}>
                  {message.role === "assistant" && (
                    <Avatar className="h-9 w-9 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex-shrink-0">
                      <AvatarFallback><Bot className="h-5 w-5" /></AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`rounded-2xl p-4 max-w-lg shadow-md transition-all duration-300 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none"
                      : "bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-bl-none"
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <Avatar className="h-9 w-9 bg-gray-200 text-gray-700 flex-shrink-0">
                      <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-4">
                  <Avatar className="h-9 w-9 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex-shrink-0">
                    <AvatarFallback><Bot className="h-5 w-5" /></AvatarFallback>
                  </Avatar>
                  <div className="rounded-2xl p-4 max-w-lg bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-bl-none shadow-md">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150" />
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="bg-white/50 backdrop-blur-lg border-t border-gray-200/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="py-4">
              <div className="relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  placeholder="Ask for a step-by-step solution..."
                  className="w-full border-gray-300/50 rounded-xl shadow-inner p-4 pr-20 resize-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 bg-white/80"
                  rows={1}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    onClick={handleSendMessage}
                    disabled={isLoading}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    {isLoading ? "Thinking..." : "Ask"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}