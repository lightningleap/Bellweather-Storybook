import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check, Edit3, MessageSquare } from "lucide-react";

export function CollaborativeWorkspace() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 relative">
             <div className="relative aspect-[16/10] bg-secondary border border-border shadow-2xl p-2 rounded-sm overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1740721455292-e5cd29544381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbGFwdG9wJTIwd3JpdGluZyUyMGludGVyZmFjZSUyMHNjcmVlbnxlbnwxfHx8fDE3NjcwNzUwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Minimalist writing interface"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating comment UI mockup */}
                <div className="absolute top-1/4 right-8 bg-background shadow-lg p-4 max-w-xs border-l-4 border-yellow-500 animate-in fade-in slide-in-from-right duration-700">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-xs">E</div>
                      <span className="text-xs font-bold text-muted-foreground">Editor Suggestion</span>
                   </div>
                   <p className="font-serif text-sm text-foreground">"The pacing here feels rushed. Consider expanding on the protagonist's hesitation to deepen the emotional stakes."</p>
                </div>
             </div>
          </div>

          <div className="lg:col-span-5">
             <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
               The Studio
             </span>
             <h2 className="text-4xl md:text-5xl font-heading mb-6">
               A Workspace Built for Books
             </h2>
             <p className="text-lg font-serif text-muted-foreground mb-8 leading-relaxed">
               Write, edit, and collaborate in a dedicated environment that respects the drafting process. We combine modern version control with the traditional warmth of editorial marginalia.
             </p>

             <ul className="space-y-4">
               <li className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Edit3 className="w-4 h-4" />
                 </div>
                 <span className="text-foreground font-medium">Focus Mode</span>
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                 </div>
                 <span className="text-foreground font-medium">Contextual Editorial Feedback</span>
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                 </div>
                 <span className="text-foreground font-medium">Draft Versioning</span>
               </li>
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
