'use client'

// Toolbar icon images from Figma
const imgBackLine = "https://www.figma.com/api/mcp/asset/e907a6a5-243a-431e-a142-5d09eae3248b"
const imgForwardLine = "https://www.figma.com/api/mcp/asset/3d216fb3-9dd3-46fc-bf46-b2e8a3b07c54"
const imgBoldLine = "https://www.figma.com/api/mcp/asset/73baf697-f28d-4955-a168-2167d618eeff"
const imgItalicLine = "https://www.figma.com/api/mcp/asset/421cfa72-2ac3-42f0-809f-255b46d5b6b9"
const imgUnderlineLine = "https://www.figma.com/api/mcp/asset/0155ef39-b1f3-4b2c-9951-4679cbe6a5d1"
const imgStrikethroughLine = "https://www.figma.com/api/mcp/asset/75598d9b-1405-424e-8102-73332b50c8a4"
const imgListCheckLine = "https://www.figma.com/api/mcp/asset/5f569cc7-2435-4d71-8159-8821bf85b600"
const imgListOrderedLine = "https://www.figma.com/api/mcp/asset/d9b5ae7d-5cac-4401-9e8c-ccc50f080902"
const imgAlignLeftLine = "https://www.figma.com/api/mcp/asset/49423bb0-4cf1-4cfa-ada6-6b248d8795bd"
const imgDownSmallLine = "https://www.figma.com/api/mcp/asset/b1cebe24-63af-497d-aba9-7961764e9c4c"
const imgLinkLine = "https://www.figma.com/api/mcp/asset/0fc27825-361e-44f7-8e6b-424c3eae67c8"
const imgCodeLine = "https://www.figma.com/api/mcp/asset/9880aba7-d305-4d78-b85b-0b27b0347c15"
const imgAtLine = "https://www.figma.com/api/mcp/asset/112f7214-1f62-445a-a8e5-1ea9b1d54b55"
const imgEmoji2Line = "https://www.figma.com/api/mcp/asset/7261cc12-21c7-44d5-a0f4-f76bdd5b9ab7"
const imgPicLine = "https://www.figma.com/api/mcp/asset/0c780238-d232-47d4-b375-9df8b2f2165f"
const imgPlayCircleLine = "https://www.figma.com/api/mcp/asset/61c63394-24d3-44eb-b9ce-876fd2f7db51"

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
          <img alt="Undo" className="block max-w-none w-6 h-6" src={imgBackLine} />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Redo" className="block max-w-none w-6 h-6" src={imgForwardLine} />
        </button>

        {/* Divider */}
        <div className="h-5 w-[2px]">
          <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
            <line x1="4" y1="0" x2="4" y2="20" stroke="#DADEE4" strokeWidth="2"/>
          </svg>
        </div>

        {/* Text Formatting */}
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Bold" className="block max-w-none w-6 h-6" src={imgBoldLine} />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Italic" className="block max-w-none w-6 h-6" src={imgItalicLine} />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Underline" className="block max-w-none w-6 h-6" src={imgUnderlineLine} />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Strikethrough" className="block max-w-none w-6 h-6" src={imgStrikethroughLine} />
        </button>

        {/* Divider */}
        <div className="h-5 w-[2px]">
          <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
            <line x1="4" y1="0" x2="4" y2="20" stroke="#DADEE4" strokeWidth="2"/>
          </svg>
        </div>

        {/* Lists */}
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Bullet List" className="block max-w-none w-6 h-6" src={imgListCheckLine} />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Numbered List" className="block max-w-none w-6 h-6" src={imgListOrderedLine} />
        </button>

        {/* Align with dropdown */}
        <button className="flex items-center gap-0.5 hover:opacity-70 transition-opacity">
          <img alt="Align" className="block max-w-none w-6 h-6" src={imgAlignLeftLine} />
          <img alt="Dropdown" className="block max-w-none w-2 h-6" src={imgDownSmallLine} />
        </button>

        {/* Divider */}
        <div className="h-5 w-[2px]">
          <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
            <line x1="4" y1="0" x2="4" y2="20" stroke="#DADEE4" strokeWidth="2"/>
          </svg>
        </div>

        {/* Insert elements */}
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <div className="flex-none rotate-180 scale-y-[-100%]">
            <img alt="Link" className="block max-w-none w-6 h-6" src={imgLinkLine} />
          </div>
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Code" className="block max-w-none w-6 h-6" src={imgCodeLine} />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Mention" className="block max-w-none w-6 h-6" src={imgAtLine} />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Emoji" className="block max-w-none w-6 h-6" src={imgEmoji2Line} />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Image" className="block max-w-none w-6 h-6" src={imgPicLine} />
        </button>
        <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img alt="Video" className="block max-w-none w-6 h-6" src={imgPlayCircleLine} />
        </button>
      </div>
    </div>
  )
}
