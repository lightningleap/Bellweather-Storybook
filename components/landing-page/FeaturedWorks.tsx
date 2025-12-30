import { ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const books = [
  {
    title: "The Quiet Hour",
    author: "Elena Vance",
    category: "Memoir",
    image: "https://images.unsplash.com/photo-1575823857138-d80155581d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1pbmltYWwlMjBib29rJTIwY292ZXIlMjBkZXNpZ24lMjBhcnR8ZW58MXx8fHwxNzY3MDczNjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A meditation on silence in a world that never stops speaking.",
  },
  {
    title: "Structures of Silence",
    author: "James Hallow",
    category: "Philosophy",
    image: "https://images.unsplash.com/photo-1558707538-c56435bdcdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyJTIwbWluaW1hbCUyMHR5cG9ncmFwaHl8ZW58MXx8fHwxNzY3MDczNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Exploring the architecture of thought and the spaces between words.",
  },
  {
    title: "Echoes of the Old World",
    author: "Sarah Jenkins",
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1597227093570-eccc70d8a416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwYmVpZ2UlMjBibGFjayUyMGlua3xlbnwxfHx8fDE3NjcwNzM2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A sweeping saga of memory, loss, and the things we carry.",
  },
];

export function FeaturedWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-2 block">
              Curated Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-foreground">
              Recent Publications
            </h2>
          </div>
          <Button variant="ghost" className="hidden md:flex font-heading text-lg hover:bg-transparent hover:text-muted-foreground p-0">
            View All Books <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {books.map((book) => (
            <div key={book.title} className="group cursor-pointer">
              <div className="relative aspect-[2/3] overflow-hidden bg-secondary mb-6 shadow-sm group-hover:shadow-md transition-all duration-500">
                 <ImageWithFallback 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {book.category}
                </span>
                <h3 className="text-2xl font-heading leading-tight group-hover:text-muted-foreground transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm font-medium text-foreground/80">
                  By {book.author}
                </p>
                <p className="text-muted-foreground font-serif pt-2 leading-relaxed">
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Button variant="outline" className="w-full rounded-none py-6">
            View All Books
          </Button>
        </div>

      </div>
    </section>
  );
}
