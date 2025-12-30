"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">
          The Editorial Letter
        </h2>
        <p className="text-muted-foreground mb-8 font-serif">
          Weekly insights on the business of books, craft essays from our mentors, and community updates.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Your email address" 
            className="rounded-none border-foreground/20 focus:border-foreground bg-transparent h-12 text-lg font-serif placeholder:font-sans placeholder:text-sm"
          />
          <Button type="submit" className="rounded-none h-12 px-8 font-heading text-lg">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">
          No spam. Just literature.
        </p>
      </div>
    </section>
  );
}
