import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Globe, Languages, Film } from "lucide-react";

export function GlobalRightsMap() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
            Global Reach
          </span>
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            Active Rights Management
          </h2>
          <p className="text-muted-foreground font-serif text-lg leading-relaxed">
            A book shouldn't be limited by borders. We actively pitch and license your work to international publishers, film scouts, and audio producers, maximizing your story's footprint.
          </p>
        </div>

        <div className="relative aspect-[2/1] bg-secondary/20 border border-border overflow-hidden group">
           <ImageWithFallback 
             src="https://images.unsplash.com/photo-1669854310488-542a99280b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHdvcmxkJTIwbWFwJTIwYXJ0aXN0aWMlMjBsaW5lc3xlbnwxfHx8fDE3NjcwNzUwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
             alt="Artistic World Map"
             className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-1000"
           />
           
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="grid grid-cols-3 gap-8 md:gap-24 text-center">
                 <div className="bg-background/80 backdrop-blur p-4 border border-foreground/10 transform translate-y-4">
                    <Globe className="w-6 h-6 mx-auto mb-2 text-foreground" />
                    <div className="text-2xl font-heading">14</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Territories Sold</div>
                 </div>
                 <div className="bg-background/80 backdrop-blur p-4 border border-foreground/10 transform -translate-y-4">
                    <Languages className="w-6 h-6 mx-auto mb-2 text-foreground" />
                    <div className="text-2xl font-heading">8</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Translations</div>
                 </div>
                 <div className="bg-background/80 backdrop-blur p-4 border border-foreground/10 transform translate-y-4">
                    <Film className="w-6 h-6 mx-auto mb-2 text-foreground" />
                    <div className="text-2xl font-heading">2</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Film Options</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
