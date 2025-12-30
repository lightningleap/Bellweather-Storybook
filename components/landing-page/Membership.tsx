"use client";

import { Button } from "./ui/button";

export function Membership() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-heading mb-6">
          Join the Inner Circle
        </h2>
        <p className="text-xl font-serif text-background/80 mb-10 leading-relaxed max-w-2xl mx-auto">
          Become a Bellwether Patron. Receive signed first editions, exclusive essays, and invitations to our private literary salons.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" size="lg" className="rounded-none px-8 py-6 text-lg font-heading" onClick={() => window.location.href = '/signup'}>
            Become a Patron
          </Button>
          <Button variant="outline" size="lg" className="rounded-none px-8 py-6 text-lg font-heading text-background border-background hover:bg-background hover:text-foreground" onClick={() => window.location.href = '/signin'}>
            View Benefits
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-background/50 uppercase tracking-widest">
          Limited to 500 members annually
        </p>
      </div>
    </section>
  );
}
