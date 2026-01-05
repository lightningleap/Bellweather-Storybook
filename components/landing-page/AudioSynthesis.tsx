import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Mic, AudioWaveform } from "lucide-react";
import { Button } from "./ui/button";

// Pre-defined waveform heights to avoid hydration mismatch from Math.random()
const waveformHeights = [
  45, 78, 23, 89, 34, 67, 12, 92, 56, 41,
  73, 28, 85, 19, 64, 47, 81, 35, 58, 70
];

export function AudioSynthesis() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <ImageWithFallback 
           src="https://images.unsplash.com/photo-1746470081927-2b40f84a4f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHdhdmVmb3JtJTIwc291bmQlMjBnb2xkJTIwbWluaW1hbHxlbnwxfHx8fDE3NjcwNzUwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
           alt="Sound waves"
           className="w-full h-full object-cover"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
             <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
               New Media
             </span>
             <h2 className="text-4xl md:text-5xl font-heading mb-6">
               Audio & Voice
             </h2>
             <p className="text-lg font-serif text-muted-foreground mb-8 leading-relaxed">
               The written word is only the beginning. Whether you need high-fidelity AI narration for rapid prototyping or world-class human talent for your final release, we ensure your story is heard.
             </p>
             
             <div className="bg-background/50 p-6 border-l-4 border-foreground rounded-r-lg">
                <div className="flex items-center gap-4 mb-4">
                   <Button size="icon" className="rounded-full w-12 h-12 shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                   </Button>
                   <div>
                      <p className="font-heading text-lg">Chapter 1: The Arrival</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">Narrated by Bellwether Vox</p>
                   </div>
                </div>
                <div className="h-8 flex items-center gap-1">
                   {waveformHeights.map((height, i) => (
                      <div key={i} className="w-1 bg-foreground/20 rounded-full" style={{ height: `${height}%` }} />
                   ))}
                </div>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
             <div className="bg-background p-6 border border-border shadow-sm">
                <Mic className="w-8 h-8 mb-4 text-foreground opacity-80" />
                <h3 className="font-heading text-lg mb-2">Human Talent</h3>
                <p className="text-sm text-muted-foreground">Access 500+ SAG-AFTRA narrators.</p>
             </div>
             <div className="bg-background p-6 border border-border shadow-sm">
                <AudioWaveform className="w-8 h-8 mb-4 text-foreground opacity-80" />
                <h3 className="font-heading text-lg mb-2">Neural Voice</h3>
                <p className="text-sm text-muted-foreground">High-fidelity AI for speed and scale.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
