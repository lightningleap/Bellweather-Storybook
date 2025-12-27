'use client'

import { useState } from 'react'
import { ArrowUp, Paperclip } from 'lucide-react'

export function PromptInput() {
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsLoading(true)
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Prompt submitted:', prompt)
    setPrompt('')
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-[700px]">
      <form onSubmit={handleSubmit} className="relative">
        {/* Outer gradient container */}
        <div className="bg-gradient-to-b from-[#e9e9e9] via-[#e9e9e9] to-[#ffffff] p-[5.4px] rounded-[15.29px]">
          {/* Inner white container */}
          <div className="bg-gradient-to-b from-[#f4f4f4] to-[#fefefe] border-[3.15px] border-white rounded-[10.79px] shadow-[0px_0px_0.225px_0.225px_rgba(0,0,0,0.07),0px_0px_0.225px_0.675px_rgba(0,0,0,0.05),0px_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),0px_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] px-4 pt-3 pb-4">
            {/* Content wrapper */}
            <div className="flex flex-col justify-between min-h-[105px]">
              {/* Header with textarea and button */}
              <div className="flex gap-3 items-start w-full mb-4">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Write a question..."
                  className="flex-1 min-h-[20px] bg-transparent text-sm font-medium text-[#0F172B] placeholder:text-[#62748E] focus:outline-none resize-none tracking-[-0.28px]"
                  disabled={isLoading}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  rows={1}
                />

                {/* Send Button */}
                <div className="bg-gradient-to-b from-[#e9e9e9] via-[#e9e9e9] to-[#ffffff] p-[2.7px] rounded-[10.41px] shrink-0">
                  <div className="bg-gradient-to-b from-[#e9e9e9] via-[#e9e9e9] to-[#ffffff] p-[3.37px] rounded-[13.01px]">
                    <button
                      type="submit"
                      disabled={!prompt.trim() || isLoading}
                      className="bg-gradient-to-b from-[#f4f4f4] to-[#fefefe] border-[2.89px] border-white rounded-[9.64px] shadow-[0px_0px_0.225px_0.225px_rgba(0,0,0,0.07),0px_0px_0.225px_0.675px_rgba(0,0,0,0.05),0px_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),0px_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] w-[33.25px] h-[33.25px] p-[6px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ArrowUp className="w-4 h-4 text-[#0F172B]" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add Content Button */}
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg shadow-[0px_1px_2px_0px_rgba(13,13,18,0.06)] self-start"
                disabled={isLoading}
              >
                <Paperclip className="w-4 h-4 text-[#0F172B]" />
                <span className="text-sm font-medium text-[#0F172B] tracking-[-0.28px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Add content
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
