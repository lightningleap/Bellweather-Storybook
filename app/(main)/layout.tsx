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
        <div className="flex flex-1 overflow-hidden">
          <MainSidebar />
          <main className="flex-1 overflow-y-auto bg-white">
            {children}
          </main>
        </div>
      </div>
    </BooksProvider>
  )
}
