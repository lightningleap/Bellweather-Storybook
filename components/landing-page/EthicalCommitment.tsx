import { ShieldCheck, Eye, Lock } from "lucide-react";

export function EthicalCommitment() {
  return (
    <section className="py-24 bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl md:text-4xl font-heading mb-6">
             Author Advocacy
           </h2>
           <p className="text-muted-foreground font-serif text-lg leading-relaxed">
             The publishing industry is full of noise and predatory traps. We stand as a firewall against vanity presses and opaque contracts, prioritizing your long-term career over short-term extraction.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           <div className="p-6 bg-background border border-border">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                 <ShieldCheck className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-heading mb-2">Respect for Craft</h3>
              <p className="text-sm text-muted-foreground font-serif">We treat manuscripts as art, not content. Your voice is cultivated, never commodified.</p>
           </div>
           
           <div className="p-6 bg-background border border-border">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                 <Eye className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-heading mb-2">Total Transparency</h3>
              <p className="text-sm text-muted-foreground font-serif">Clear terms, fair guidance, and zero hidden fees. You see exactly what we see.</p>
           </div>

           <div className="p-6 bg-background border border-border">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                 <Lock className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-heading mb-2">Data Sovereignty</h3>
              <p className="text-sm text-muted-foreground font-serif">You own your work and your data. We never train models on your writing without explicit consent.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
