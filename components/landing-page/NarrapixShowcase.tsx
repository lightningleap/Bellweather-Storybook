import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function NarrapixShowcase() {
  return (
    <section className="py-24 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 translate-y-8">
                 <ImageWithFallback 
                   src="https://images.unsplash.com/photo-1597227093570-eccc70d8a416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwYmVpZ2UlMjBibGFjayUyMGlua3xlbnwxfHx8fDE3NjcwNzM2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                   alt="Abstract ink art"
                   className="w-full aspect-[3/4] object-cover opacity-90"
                 />
                 <ImageWithFallback 
                   src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZsdWlkJTIwYXJ0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NjcwNzY1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                   alt="Fluid art"
                   className="w-full aspect-[1/1] object-cover opacity-80"
                 />
               </div>
               <div className="space-y-4">
                 <ImageWithFallback 
                   src="https://images.unsplash.com/photo-1507643179173-61b041a0b361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHdhdmUlMjBmb3JtJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY3MDc2NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                   alt="3D wave form"
                   className="w-full aspect-[1/1] object-cover opacity-80"
                 />
                  <ImageWithFallback 
                   src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxhbmRzY2FwZSUyMGbwZyUyMG15c3RlcmlvdXN8ZW58MXx8fHwxNzY3MDc2NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                   alt="Abstract landscape"
                   className="w-full aspect-[3/4] object-cover opacity-90"
                 />
               </div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
             <span className="text-xs uppercase tracking-[0.2em] text-background/60 font-medium mb-3 block">
               Visual Identity
             </span>
             <h2 className="text-4xl md:text-5xl font-heading mb-6 text-background">
               Narrapix: From Narrative to Pixels
             </h2>
             <p className="text-lg font-serif text-background/70 mb-8 leading-relaxed">
               Narrapix analyzes the emotional data of your manuscript to generate visual concepts that match the mood of your story.
             </p>
             <p className="text-lg font-serif text-background/70 mb-8 leading-relaxed">
               This gives you an immediate starting point for cover design and marketing materials, ensuring your book looks as good as it reads.
             </p>
             
             <Button variant="secondary" className="rounded-none px-8 py-6 text-lg">
               See It In Action
             </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
