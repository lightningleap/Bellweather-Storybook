'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const slides = [
  {
    title: 'Write your book with AI guidance',
    description: 'From idea to final draft with intelligent assistance',
  },
  {
    title: 'Organize your story',
    description: 'Keep track of characters, plots, and chapters effortlessly',
  },
  {
    title: 'AI-powered editing',
    description: 'Get suggestions to improve your writing style and flow',
  },
]

export function AuthCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-lg space-y-8">
      <div className="text-center space-y-4 min-h-[200px] flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-foreground transition-all duration-500">
          {slides[currentSlide].title}
        </h2>
        <p className="text-xl text-muted-foreground transition-all duration-500">
          {slides[currentSlide].description}
        </p>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              index === currentSlide
                ? 'w-8 bg-primary'
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
