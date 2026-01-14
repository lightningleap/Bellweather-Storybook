'use client'

import { useEffect, useState } from 'react'
import { DashboardGreeting } from '@/components/books/dashboard-greeting'
import { PromptInput } from '@/components/books/prompt-input'
import { BookGrid } from '@/components/books/book-grid'
import { useBooks } from '@/hooks/use-books'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { MessageSquare, Sparkles, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { calculateProgress } from '@/lib/acquisition/utils'
import { AuthorDataFields } from '@/types/acquisition'

export default function HomePage() {
  const { books, isLoading } = useBooks()
  const { user } = useAuth()
  const [activeSession, setActiveSession] = useState<{ id: string; progress: number; title: string | null } | null>(null)

  useEffect(() => {
    if (!user?.id) return

    // Check for active session
    const sessionId = localStorage.getItem(`bellwether_active_session_${user.id}`)
    if (sessionId) {
      const dataStr = localStorage.getItem(`bellwether_chat_data_${sessionId}`)
      if (dataStr) {
        try {
          const data = JSON.parse(dataStr) as AuthorDataFields
          const progress = calculateProgress(data)
          setActiveSession({
            id: sessionId,
            progress,
            title: data.book_title || null
          })
        } catch {
          setActiveSession(null)
        }
      }
    }
  }, [user?.id])

  return (
    <div className="flex flex-col items-center w-full max-w-[700px] mx-auto">
      {/* Title Section - Greeting + Heading */}
      <div className="w-full mb-8 md:mb-[40.85px]">
        <DashboardGreeting />
      </div>

      {/* Prompt Input Section */}
      <div className="w-full mb-8">
        <PromptInput />
      </div>

      {/* Active Session / Start New Project CTA - Hidden on mobile per Figma */}
      <div className="hidden md:block w-full mb-16">
        {activeSession && activeSession.progress > 0 ? (
          // Continue existing conversation
          <Link href="/chat" className="block">
            <div className="bg-gradient-to-r from-[#FF6321]/15 to-[#FF6321]/5 border-2 border-[#FF6321]/30 rounded-xl p-6 hover:border-[#FF6321]/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF6321] flex items-center justify-center relative">
                  <Play className="w-5 h-5 text-white ml-0.5" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-[10px] text-white font-bold">{activeSession.progress}%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#0F172B] flex items-center gap-2">
                    Continue Your Conversation
                  </h3>
                  <p className="text-sm text-[#62748E]">
                    {activeSession.title
                      ? `Working on "${activeSession.title}" — ${activeSession.progress}% complete`
                      : `Your book project — ${activeSession.progress}% complete`
                    }
                  </p>
                </div>
                <Button className="bg-[#FF6321] hover:bg-[#E55A1A] text-white gap-2 group-hover:translate-x-1 transition-transform">
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Link>
        ) : (
          // Start new project
          <Link href="/chat" className="block">
            <div className="bg-gradient-to-r from-[#FF6321]/10 to-[#FF6321]/5 border border-[#FF6321]/20 rounded-xl p-6 hover:border-[#FF6321]/40 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF6321] flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#0F172B] flex items-center gap-2">
                    Start a New Book Project
                    <Sparkles className="w-4 h-4 text-[#FF6321]" />
                  </h3>
                  <p className="text-sm text-[#62748E]">
                    Chat with our AI assistant to create your publishing proposal
                  </p>
                </div>
                <Button className="bg-[#FF6321] hover:bg-[#E55A1A] text-white group-hover:translate-x-1 transition-transform">
                  Get Started
                </Button>
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* My Books Section */}
      <div className="w-full pt-4 md:pt-0">
        <h2 className="text-base md:text-xl font-semibold text-[#030712] mb-4 md:mb-8 px-[6px]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          My Books
        </h2>
        <BookGrid books={books.slice(0, 4)} isLoading={isLoading} />
      </div>
    </div>
  )
}
