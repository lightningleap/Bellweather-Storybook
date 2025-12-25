import { Header } from '@/components/layout/header'
import { MainSidebar } from '@/components/layout/main-sidebar'
import { SidebarProvider } from '@/components/layout/sidebar-provider'
import { BooksProvider } from '@/contexts/books-context'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BooksProvider>
      <SidebarProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <MainSidebar />
            <main className="flex-1 overflow-y-auto p-6 bg-muted/30">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </BooksProvider>
  )
}
