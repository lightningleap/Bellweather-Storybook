import { Filter, Star, Sparkles } from "lucide-react";

export function TheSlushPileRedefined() {
  return (
    <section className="py-24 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-6 text-center max-w-4xl">
         <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
            Intelligent Curation
         </span>
         <h2 className="text-4xl md:text-5xl font-heading mb-8">
            Highlighting Potential
         </h2>
         <p className="text-xl font-serif text-muted-foreground mb-12 leading-relaxed">
            Traditional publishing ignores 99% of submissions simply because of volume. We use technology to filter for <span className="italic text-foreground">voice</span> and <span className="italic text-foreground">narrative integrity</span>, ensuring that quiet brilliance isn't drowned out by loud trends.
         </p>

         <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 border border-border relative overflow-hidden group hover:border-foreground transition-colors">
               <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Filter className="w-24 h-24" />
               </div>
               <h3 className="font-heading text-2xl mb-2 relative z-10">Deep Discovery</h3>
               <p className="text-sm text-muted-foreground font-serif relative z-10">We evaluate manuscripts based on the quality of the writing, not just the author's platform.</p>
            </div>
            
            <div className="bg-background p-8 border border-border relative overflow-hidden group hover:border-foreground transition-colors">
               <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles className="w-24 h-24" />
               </div>
               <h3 className="font-heading text-2xl mb-2 relative z-10">Hidden Gems</h3>
               <p className="text-sm text-muted-foreground font-serif relative z-10">Our system identifies unique voices that might be overlooked by a hasty human skim.</p>
            </div>

            <div className="bg-background p-8 border border-border relative overflow-hidden group hover:border-foreground transition-colors">
               <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star className="w-24 h-24" />
               </div>
               <h3 className="font-heading text-2xl mb-2 relative z-10">Fair Evaluation</h3>
               <p className="text-sm text-muted-foreground font-serif relative z-10">Every submission receives a standardized analysis, reducing bias and chance.</p>
            </div>
         </div>
      </div>
    </section>
  );
}
