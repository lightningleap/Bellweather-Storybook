"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function EditorsNote() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
             <div className="aspect-[4/5] max-w-md mx-auto relative">
                <div className="absolute inset-0 border border-foreground/10 translate-x-4 translate-y-4 -z-10" />
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1587215231250-c0c8e03eb455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdHlwZXdyaXRlciUyMG1lc3N5JTIwZGVzayUyMG1hbnVzY3JpcHR8ZW58MXx8fHwxNzY3MDc0MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Editor's Desk" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4 block">
                From the Editor's Desk
              </span>
              <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight">
                "We publish for the quiet hours."
              </h2>
              <div className="space-y-4 text-lg font-serif text-muted-foreground leading-relaxed">
                <p>
                  In a world that shouts, we look for the whisper. Bellwether was founded on a simple premise: that great writing requires patience, both to create and to consume.
                </p>
                <p>
                  We are not chasing trends. We are looking for voices that resonate with the timeless human experience—stories that feel as though they have always existed, waiting only to be written down.
                </p>
                <p>
                  Our commitment is to the craft, and to the authors who dedicate their lives to it.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border/50">
                <p className="font-heading text-xl">Eleanor P. Vance</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Editor-in-Chief</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
