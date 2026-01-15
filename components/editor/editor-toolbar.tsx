'use client'

import {
  Undo2,
  Redo2,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  AlignLeft,
  ChevronDown,
  Link,
  Code,
  AtSign,
  Smile,
  Image,
  PlayCircle
} from 'lucide-react'

export function EditorToolbar() {
  return (
    <div
      className="fixed bottom-[29.66px] left-1/2 -translate-x-1/2 z-10 rounded-[13.66px] p-[3.54px]"
      style={{
        width: '697.37px',
        boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div
        className="flex items-center justify-center gap-4 px-3 py-[10.63px] rounded-[10.12px] border-[3.036px] border-solid border-white"
        style={{
          background: 'linear-gradient(180deg, #F4F4F4 0%, #FEFEFE 100%)',
          boxShadow: '0px 0px 0.225px 0.225px rgba(0, 0, 0, 0.07), 0px 0px 0.225px 0.675px rgba(0, 0, 0, 0.05), 0px 2.698px 2.923px -1.349px rgba(0, 0, 0, 0.25), 0px 0.899px 3.598px 0.899px rgba(0, 0, 0, 0.12)'
        }}
      >
        {/* History - Undo/Redo */}
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <Undo2 className="w-5 h-5 text-[#314158]" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <Redo2 className="w-5 h-5 text-[#314158]" />
        </button>

        {/* Divider */}
        <div className="h-5 w-[2px]">
          <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
            <line x1="4" y1="0" x2="4" y2="20" stroke="#DADEE4" strokeWidth="2"/>
          </svg>
        </div>

        {/* Text Formatting */}
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <Bold className="w-5 h-5 text-[#314158]" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <Italic className="w-5 h-5 text-[#314158]" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <Underline className="w-5 h-5 text-[#314158]" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <Strikethrough className="w-5 h-5 text-[#314158]" />
        </button>

        {/* Divider */}
        <div className="h-5 w-[2px]">
          <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
            <line x1="4" y1="0" x2="4" y2="20" stroke="#DADEE4" strokeWidth="2"/>
          </svg>
        </div>

        {/* Lists */}
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <List className="w-5 h-5 text-[#314158]" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <ListOrdered className="w-5 h-5 text-[#314158]" />
        </button>

        {/* Align with dropdown */}
        <button className="flex items-center gap-0.5 hover:opacity-70 transition-opacity">
          <AlignLeft className="w-5 h-5 text-[#314158]" />
          <ChevronDown className="w-4 h-4 text-[#314158]" />
        </button>

        {/* Divider */}
        <div className="h-5 w-[2px]">
          <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
            <line x1="4" y1="0" x2="4" y2="20" stroke="#DADEE4" strokeWidth="2"/>
          </svg>
        </div>

        {/* Insert elements */}
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <Link className="w-5 h-5 text-[#314158]" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <Code className="w-5 h-5 text-[#314158]" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <AtSign className="w-5 h-5 text-[#314158]" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <Smile className="w-5 h-5 text-[#314158]" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <Image className="w-5 h-5 text-[#314158]" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <PlayCircle className="w-5 h-5 text-[#314158]" />
        </button>
      </div>
    </div>
  )
}
