import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "The End of the Vanity Press",
    excerpt: "How transparent data is reclaiming power for independent authors and exposing predatory models.",
    date: "Sep 28",
    image: "https://images.unsplash.com/photo-1759296844873-e0c694c24284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwb3BlbiUyMG5vdGVib29rJTIwcGVuJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NzA3NDA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Code as Craft",
    excerpt: "Why the future of editing is a partnership between human intuition and machine memory.",
    date: "Sep 15",
    image: "https://images.unsplash.com/photo-1706271952257-bc67d3c2c0e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGluayUyMGFydCUyMHBhcmNobWVudCUyMHRleHR1cmV8ZW58MXx8fHwxNzY3MDc0MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "The Six Paths Explained",
    excerpt: "A comparative deep dive into the economics of Big Five, Hybrid, and Indie publishing.",
    date: "Aug 30",
    image: "https://images.unsplash.com/photo-1634406005209-6adbbf0b935f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFjayUyMG9mJTIwYm9va3MlMjBtaW5pbWFsaXN0JTIwYWVzdGhldGljfGVufDF8fHx8MTc2NzA3NDEwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function TheJournal() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-heading">Industry Analysis</h2>
          <a href="#" className="hidden md:flex items-center text-sm font-medium hover:text-muted-foreground transition-colors">
            Read All Articles <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden bg-secondary mb-4">
                 <ImageWithFallback 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-2">
                <span>{article.date}</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span>Editorial</span>
              </div>
              <h3 className="text-xl font-heading mb-2 group-hover:underline decoration-1 underline-offset-4 decoration-muted-foreground/50">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm font-serif leading-relaxed">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
