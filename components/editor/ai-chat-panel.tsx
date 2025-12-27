'use client'

import { useState } from 'react'
import { Copy, ThumbsUp, ThumbsDown, ArrowUp } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const sampleMessages: Message[] = [
  {
    id: '1',
    role: 'user',
    content: 'Can you help improve this scene? It feels flat.',
    timestamp: new Date(),
  },
  {
    id: '2',
    role: 'assistant',
    content: `Here's what I'm noticing in this passage:

What's working
 • Strong atmospheric setup
 • Clear physical stakes

What's weakening tension
 • Too much internal exposition back-to-back
 • Conflict resolves too quickly

Suggestions
 • Break the paragraph after "he was not alone"
 • Convert one internal thought into dialogue
 • Delay the reveal by 2–3 sentences

Want me to rewrite this with higher tension?`,
    timestamp: new Date(),
  },
  {
    id: '3',
    role: 'user',
    content: 'Rewrite scene',
    timestamp: new Date(),
  },
  {
    id: '4',
    role: 'assistant',
    content: `Here's what I'm noticing in this passage:

The updated version uses shorter sentences and delays the reveal to create a stronger emotional payoff.

Would you like to replace the current text or review changes first?`,
    timestamp: new Date(),
  },
]

export function AIChatPanel() {
  const [messages, setMessages] = useState<Message[]>(sampleMessages)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: 'I can help with that! Here are some suggestions...',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, assistantMessage])
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto pr-1">
        <div className="flex flex-col gap-3">
          {messages.map((message) => (
            <div key={message.id} className="flex flex-col gap-1">
              {message.role === 'user' ? (
                /* User Message */
                <div className="flex justify-end w-full">
                  <div className="bg-[#F9FAFB] rounded-2xl px-3 py-3 max-w-[260px]">
                    <p
                      className="text-sm text-[#030712] leading-5 whitespace-pre-wrap"
                      style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                    >
                      {message.content}
                    </p>
                  </div>
                </div>
              ) : (
                /* Assistant Message */
                <>
                  <div className="flex justify-start w-full">
                    <div className="bg-white rounded-2xl px-3 py-3 w-full">
                      <p
                        className="text-sm text-[#020617] leading-5 whitespace-pre-wrap"
                        style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                      >
                        {message.content}
                      </p>
                    </div>
                  </div>
                  {/* Action buttons */}
                  <div className="flex items-center gap-0 px-1">
                    <button className="flex items-center justify-center w-[26.67px] h-[26.67px] hover:bg-gray-100 rounded transition-colors">
                      <Copy className="w-4 h-4 text-[#64748B]" />
                    </button>
                    <button className="flex items-center justify-center w-[26.67px] h-[26.67px] hover:bg-gray-100 rounded transition-colors">
                      <ThumbsUp className="w-4 h-4 text-[#64748B]" />
                    </button>
                    <button className="flex items-center justify-center w-[26.67px] h-[26.67px] hover:bg-gray-100 rounded transition-colors">
                      <ThumbsDown className="w-4 h-4 text-[#64748B]" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl px-3 py-3">
                <p
                  className="text-sm text-[#64748B]"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  Thinking...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="pt-4">
        <form
          onSubmit={handleSubmit}
          className="bg-[#FAFAFA] border border-[#E2E8F0] rounded-xl px-3 py-4 flex flex-col gap-5"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Push the scene darker..."
            disabled={isLoading}
            className="w-full resize-none border-0 focus:outline-none text-sm text-[#6A7282] bg-transparent placeholder:text-[#6A7282]"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              lineHeight: '20px',
            }}
            rows={1}
          />
          <div className="flex items-end justify-end">
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-[#FF6321] rounded-full w-8 h-8 flex items-center justify-center shadow-[0px_6px_6px_0px_rgba(148,163,184,0.15),0px_0px_1px_0px_#94A3B8] hover:bg-[#E5561C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
