"use client";

import { Button } from "../ui/button";

export function FinalCTAV2() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-heading mb-6">
          Publish with confidence. Publish with people who care.
        </h2>
        <p className="text-xl font-serif text-background/80 mb-10 leading-relaxed max-w-2xl mx-auto">
          Bellwether Books is accepting a limited number of authors.
          <br />
          If you're serious about your work, we'd love to talk.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            className="rounded-none px-8 py-6 text-lg font-heading"
            onClick={() => window.location.href = '/signup'}
          >
            Request Access
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-none px-8 py-6 text-lg font-heading text-background border-background hover:bg-background hover:text-foreground"
            onClick={() => window.location.href = '/contact'}
          >
            Speak With an Editor
          </Button>
        </div>

        <p className="mt-8 text-sm text-background/50 uppercase tracking-widest">
          Serious publishing for serious writers.
        </p>
      </div>
    </section>
  );
}
