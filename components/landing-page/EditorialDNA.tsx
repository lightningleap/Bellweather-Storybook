import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScanFace, Activity, Fingerprint } from "lucide-react";

export function EditorialDNA() {
  return (
    <section className="py-24 bg-secondary/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
             <div className="aspect-square bg-background border border-border p-2 relative">
               <div className="absolute top-4 left-4 z-20 flex gap-2">
                 <div className="bg-foreground text-background text-[10px] uppercase tracking-wider px-2 py-1">Tone: Melancholic</div>
                 <div className="bg-foreground text-background text-[10px] uppercase tracking-wider px-2 py-1">Pacing: Adagio</div>
               </div>
               <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1752079830351-a49bdb231a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFic3RyYWN0JTIwYXJ0aXN0aWMlMjBiZWlnZXxlbnwxfHx8fDE3NjcwNzUwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                 alt="Visual representation of manuscript data"
                 className="w-full h-full object-cover opacity-80 mix-blend-multiply"
               />
               <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
             </div>
          </div>

          <div className="order-1 lg:order-2">
             <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
               Deep Analysis
             </span>
             <h2 className="text-4xl md:text-5xl font-heading mb-6">
               Editorial DNA
             </h2>
             <p className="text-lg font-serif text-muted-foreground mb-8 leading-relaxed">
               We analyze the underlying structure of your manuscript—its cadence, vocabulary, and emotional arc—to create a unique "genetic" profile. This helps you understand exactly where your book fits in the market.
             </p>
             
             <div className="space-y-6">
               <div className="flex gap-4 items-start">
                 <ScanFace className="w-6 h-6 text-foreground shrink-0" />
                 <div>
                   <h4 className="font-heading text-lg">Voice Signature</h4>
                   <p className="text-sm text-muted-foreground font-serif">Identify the specific stylistic traits that define your authorial voice.</p>
                 </div>
               </div>
               <div className="flex gap-4 items-start">
                 <Activity className="w-6 h-6 text-foreground shrink-0" />
                 <div>
                   <h4 className="font-heading text-lg">Pacing Analysis</h4>
                   <p className="text-sm text-muted-foreground font-serif">Visualize where your story drags or rushes, allowing for precise revision.</p>
                 </div>
               </div>
               <div className="flex gap-4 items-start">
                 <Fingerprint className="w-6 h-6 text-foreground shrink-0" />
                 <div>
                   <h4 className="font-heading text-lg">Market Positioning</h4>
                   <p className="text-sm text-muted-foreground font-serif">Map your book's themes against successful titles in your genre.</p>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
