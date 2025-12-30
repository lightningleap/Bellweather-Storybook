import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function LiterarySalon() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -inset-4 border border-foreground/10 z-0" />
             <div className="aspect-video bg-background relative z-10 p-2">
               <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1662878857855-4e8a4c5e7c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmFyeSUyMHNhbG9uJTIwYm9vayUyMHJlYWRpbmclMjBldmVudCUyMHdhcm0lMjBsaWdodHxlbnwxfHx8fDE3NjcwNzQwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                 alt="Literary Salon Event"
                 className="w-full h-full object-cover"
               />
             </div>
          </div>

          <div>
             <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
               Events & Gatherings
             </span>
             <h2 className="text-4xl md:text-5xl font-heading mb-6">
               The Literary Salon
             </h2>
             <p className="text-lg font-serif text-muted-foreground mb-8 leading-relaxed">
               Join us for evenings of conversation, wine, and readings. Our monthly salon brings together authors and readers in an intimate setting to discuss the works that move us.
             </p>

             <div className="space-y-6">
                <div className="bg-background/50 p-6 border-l-2 border-foreground">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">Next Event</span>
                  <h3 className="text-xl font-heading mb-1">Poetry & Pinot: An Evening with Clara Weiss</h3>
                  <p className="text-sm text-muted-foreground">October 15th, 7:00 PM &mdash; The Atrium, New York</p>
                </div>
                
                <Button className="rounded-none w-full sm:w-auto px-8 py-6 text-lg">
                  Reserve Your Seat
                </Button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
