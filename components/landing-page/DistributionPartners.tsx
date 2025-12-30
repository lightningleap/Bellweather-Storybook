import { MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DistributionPartners() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
               Where to Find Us
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Available at Fine Establishments
            </h2>
            <p className="text-lg font-serif text-muted-foreground mb-8 leading-relaxed">
              We are proud to partner with independent bookstores and select retailers who value the physical book as much as we do.
            </p>
            
            <ul className="space-y-4 font-serif text-foreground/80">
              <li className="flex items-center gap-3 border-b border-border/50 pb-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>Shakespeare & Co. &mdash; Paris</span>
              </li>
              <li className="flex items-center gap-3 border-b border-border/50 pb-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>The Strand &mdash; New York</span>
              </li>
              <li className="flex items-center gap-3 border-b border-border/50 pb-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>City Lights &mdash; San Francisco</span>
              </li>
              <li className="flex items-center gap-3 border-b border-border/50 pb-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>Daunt Books &mdash; London</span>
              </li>
            </ul>
          </div>
          
          <div className="relative h-full min-h-[400px]">
             <div className="absolute inset-0 bg-background border border-border p-2 rotate-2 transition-transform duration-500 hover:rotate-0">
               <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1727342681676-b7b32b273add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRlcGVuZGVudCUyMGJvb2tzdG9yZSUyMGludGVyaW9yJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NzA3NDA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                 alt="Bookstore Interior"
                 className="w-full h-full object-cover filter sepia-[0.3]"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
