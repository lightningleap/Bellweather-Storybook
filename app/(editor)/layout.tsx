import { EditorProvider } from '@/contexts/editor-context'
import { EditorSidebar } from '@/components/layout/editor-sidebar'
import { RightPanel } from '@/components/layout/right-panel'
import { BooksProvider } from '@/contexts/books-context'

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BooksProvider>
      <EditorProvider>
        <div className="h-screen flex overflow-hidden">
          <EditorSidebar />
          <div className="flex-1 flex overflow-hidden">
            <main className="flex-1 overflow-hidden">{children}</main>
            <RightPanel />
          </div>
        </div>
      </EditorProvider>
    </BooksProvider>
  )
}
