import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Medal, Award } from "lucide-react";

export function TheBellwetherPrize() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
         <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-double border-foreground/10">
            <Medal className="w-10 h-10 text-foreground" />
         </div>
         
         <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4 block">
            Annual Recognition
         </span>
         <h2 className="text-5xl md:text-6xl font-heading mb-8">
            The Bellwether Prize
         </h2>
         <p className="text-xl font-serif text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Honoring the manuscript that best exemplifies the harmony between human craft and narrative innovation.
         </p>
         
         <div className="inline-block border border-foreground/20 p-8 bg-background relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-xs uppercase tracking-widest font-bold">
               This Year's Theme
            </div>
            <p className="font-heading text-3xl italic">"Echoes of the Future"</p>
            <p className="text-sm text-muted-foreground mt-4">Submissions Open: Oct 1 - Dec 31</p>
         </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -z-10" />
    </section>
  );
}
