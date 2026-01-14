import { Header } from '@/components/layout/header'
import { MainSidebar } from '@/components/layout/main-sidebar'
import { BooksProvider } from '@/contexts/books-context'
import { SidebarProvider } from '@/contexts/sidebar-context'


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <BooksProvider>
      <SidebarProvider>
        <div className="h-screen flex flex-col bg-white overflow-hidden">
          <Header />

          <div className="flex flex-1 overflow-hidden">
            <MainSidebar />

            <main className="flex-1 overflow-y-auto bg-white relative">
              {/* Dotted Background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, #E2E8F0 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0',
                  zIndex: 0,
                }}
              />
              <div className="relative z-10 p-4 md:p-6">{children}</div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </BooksProvider>
  )
}
