'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    title: 'Write your book with AI guidance from idea to final draft',
    image: '/images/auth-carousel/image1.svg',
  },
  {
    title: 'Organize your story and characters effortlessly',
    image: '/images/auth-carousel/image2.svg',
  },
  {
    title: 'AI-powered editing and suggestions for better writing',
    image: '/images/auth-carousel/image3.svg',
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
    <div className="relative w-full h-full flex flex-col items-center">
      {/* Text at top */}
      <div className="absolute left-1/2 top-[97px] -translate-x-1/2 flex flex-col items-center gap-6 z-10">
        <p
          className="font-medium text-[32px] leading-10 text-[#0F172B] text-center w-[566px] transition-all duration-500"
          style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
        >
          {slides[currentSlide].title}
        </p>

        {/* Indicators */}
        <div className="flex gap-1 items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={
                index === currentSlide
                  ? 'bg-[#0F172B] h-[8px] w-[24px] rounded-full transition-all duration-300'
                  : 'bg-[#E2E8F0] h-[8px] w-[8px] rounded-full transition-all duration-300 hover:bg-[#CAD5E2]'
              }
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Illustration */}
      <div className="absolute inset-[29.34%_11.99%_15.99%_11.86%]">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill
          className="object-contain transition-all duration-500"
          priority
          unoptimized
        />
      </div>
    </div>
  )
}
