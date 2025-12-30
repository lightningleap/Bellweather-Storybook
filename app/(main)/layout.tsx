import { Header } from '@/components/layout/header'
import { MainSidebar } from '@/components/layout/main-sidebar'
import { BooksProvider } from '@/contexts/books-context'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BooksProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex flex-1 overflow-hidden ml-[232px]">
          <MainSidebar />
          <main className="flex-1 overflow-y-auto bg-white relative">
            {/* Dotted Background */}
            <div
              className="fixed top-0 right-0 bottom-0 pointer-events-none"
              style={{
                left: '232px',
                backgroundImage: `radial-gradient(circle, #E2E8F0 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                zIndex: 0,
              }}
            />
            <div className="relative z-10">{children}</div>
          </main>
        </div>
      </div>
    </BooksProvider>
  )
}
