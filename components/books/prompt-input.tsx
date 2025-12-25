'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Paperclip, Send } from 'lucide-react'

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
    <Card className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <form onSubmit={handleSubmit} className="p-6">
        <div className="relative">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write a question..."
            className="min-h-[120px] pr-12 resize-none border-muted-foreground/20 focus:border-primary/50"
            disabled={isLoading}
          />

          {/* Send Button */}
          <Button
            type="submit"
            size="icon"
            className="absolute bottom-3 right-3 rounded-full"
            disabled={!prompt.trim() || isLoading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-4">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="gap-2"
            disabled={isLoading}
          >
            <Paperclip className="h-4 w-4" />
            Add content
          </Button>
        </div>
      </form>
    </Card>
  )
}
