import { Feather } from "lucide-react";

export function Manifesto() {
  return (
    <section className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-background/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Feather className="w-12 h-12 mx-auto mb-8 text-muted-foreground opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-8">
            We are stewards of the human story.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 font-serif text-lg leading-relaxed text-background/80 max-w-5xl mx-auto">
          <div className="space-y-6">
            <p>
              <span className="text-4xl float-left mr-3 mt-[-10px] font-heading text-background">I</span>
              n an age of automation, Bellwether stands as a testament to the enduring power of human craft. We believe that a book is more than a product; it is a conversation between minds, spanning time and space.
            </p>
            <p>
              We do not chase trends. We do not mass-produce content. Instead, we cultivate works of depth, beauty, and significance—books that demand to be held, read, and remembered.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Our process is slow by design. We work closely with authors to refine their voice, honoring the solitude and struggle that creativity requires. We are not just publishers; we are partners in the act of creation.
            </p>
            <p>
              Whether it is a quiet memoir or a groundbreaking philosophical treatise, every Bellwether title is a promise: that words still matter, and that the human spirit is inexhaustible.
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-center border-t border-background/10 pt-12">
           <p className="text-sm uppercase tracking-[0.2em] opacity-50">
             The Bellwether Standard
           </p>
        </div>

      </div>
    </section>
  );
}
