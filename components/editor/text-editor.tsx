'use client'

import { useEditor } from '@/hooks/use-editor'
import { useEffect, useState } from 'react'

export function TextEditor() {
  const { content, setContent, currentChapter, currentBook } = useEditor()
  const [localContent, setLocalContent] = useState(content)

  // Sync with context
  useEffect(() => {
    setLocalContent(content)
  }, [content])

  // Auto-save debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localContent !== content) {
        setContent(localContent)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [localContent, content, setContent])

  return (
    <div
      className="flex-1 flex flex-col items-center py-4 px-8 gap-4 overflow-y-auto pb-32 relative bg-white"
      style={{
        backgroundImage: 'radial-gradient(circle, #E2E8F0 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0'
      }}
    >
      {/* Document Frame */}
      <div
        className="flex flex-col items-start p-0 bg-white rounded border border-[#E2E8F0]"
        style={{
          width: '752px',
          boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
      >
        <div className="flex flex-col items-start p-8 gap-4 w-full">
          {/* Title */}
          <h1
            className="w-full font-bold text-[#030712]"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '30px',
              lineHeight: '36px'
            }}
          >
            {currentChapter?.title || 'Example document'}
          </h1>

          {/* Subtitle */}
          <h2
            className="w-full font-semibold text-[#030712]"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '20px',
              lineHeight: '28px'
            }}
          >
            {currentBook?.title ? `${currentBook.title} - Chapter ${currentChapter?.order || 1}` : 'Trapped - Authored by ProWritingAid.'}
          </h2>

          {/* Content */}
          <div
            className="w-full min-h-[400px] text-[#4A5565]"
            style={{
              fontFamily: 'var(--font-plus-jakarta), sans-serif',
              fontSize: '16px',
              lineHeight: '160%'
            }}
          >
            <p className="mb-4">
              Billy was trapped. The light, bright <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">airr</span> coated his bronchi, <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">staneing</span> them with dust and grime and speckled dots of ash. The opening was <span className="underline decoration-[#F59E0B] decoration-2 underline-offset-2">not far from</span> his grasp - but he could not reach it. After assessing the fact that there was <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">unequivocably</span> no clear way forward, he stood there, waiting for something, anything at all, to change or shift in the utter silence around him. That was when he heard it.
            </p>
            <p className="mb-4">
              He was overcome by an unshakable certainty that something, <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">unscene</span>, yet undeniably present, <span className="text-[#F59E0B]">was making that</span> noise. It seemed as though an <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">eyon</span> of <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">crystaline</span> silence lingered between each ragged harsh breath, his corpus suspended in <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">staysis</span>, a state of unwilling paralysis, that the undeniable truth was finally understood—he was not alone. Fear. Finding true fear is like looking for a <span className="underline decoration-[#F59E0B] decoration-2 underline-offset-2">needle in a haystack</span>.
            </p>
            <p>
              Oppressive darkness trickled in and filled the space around him like a drowning shroud and his pulse thundered in his ears, it might have been nothing more than a trick of his vibrant imagination, a sweet shadow in the periphery of his fearclouded mind, but there seemed to be an unmistakable presence lurking just beyond the frayed edges of his sanity.
            </p>
          </div>
        </div>
      </div>

      {/* Second Document Frame (for preview/comparison) */}
      <div
        className="flex flex-col items-start p-0 bg-white rounded border border-[#E2E8F0]"
        style={{
          width: '752px',
          boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
      >
        <div className="flex flex-col items-start p-8 gap-4 w-full">
          <h1
            className="w-full font-bold text-[#030712]"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '30px',
              lineHeight: '36px'
            }}
          >
            Example document
          </h1>

          <h2
            className="w-full font-semibold text-[#030712]"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '20px',
              lineHeight: '28px'
            }}
          >
            Trapped - Authored by ProWritingAid.
          </h2>

          <div
            className="w-full text-[#4A5565]"
            style={{
              fontFamily: 'var(--font-plus-jakarta), sans-serif',
              fontSize: '16px',
              lineHeight: '160%'
            }}
          >
            <p className="mb-4">
              Billy was trapped. The light, bright <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">airr</span> coated his bronchi, <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">staneing</span> them with dust and grime and speckled dots of ash. The opening was <span className="underline decoration-[#F59E0B] decoration-2 underline-offset-2">not far from</span> his grasp - but he could not reach it. After assessing the fact that there was <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">unequivocably</span> no clear way forward, he stood there, waiting for something, anything at all, to change or shift in the utter silence around him. That was when he heard it.
            </p>
            <p className="mb-4">
              He was overcome by an unshakable certainty that something, <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">unscene</span>, yet undeniably present, <span className="text-[#F59E0B]">was making that</span> noise. It seemed as though an <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">eyon</span> of <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">crystaline</span> silence lingered between each ragged harsh breath, his corpus suspended in <span className="underline decoration-[#EF4444] decoration-2 underline-offset-2">staysis</span>, a state of unwilling paralysis, that the undeniable truth was finally understood—he was not alone. Fear. Finding true fear is like looking for a <span className="underline decoration-[#F59E0B] decoration-2 underline-offset-2">needle in a haystack</span>.
            </p>
            <p>
              Oppressive darkness trickled in and filled the space around him like a drowning shroud and his pulse thundered in his ears, it might have been nothing more than a trick of his vibrant imagination, a sweet shadow in the periphery of his fearclouded mind, but there seemed to be an unmistakable presence lurking just beyond the frayed edges of his sanity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
