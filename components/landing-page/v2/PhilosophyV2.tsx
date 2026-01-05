"use client";

import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";

export function PhilosophyV2() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] max-w-md mx-auto relative">
              <div className="absolute inset-0 border border-foreground/10 translate-x-4 translate-y-4 -z-10" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Person writing in notebook with pen"
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
                What We Believe
              </span>
              <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight">
                Book people first. Technology second.
              </h2>
              <div className="space-y-4 text-lg font-serif text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">
                  Publishing is — and always will be — a human craft.
                </p>
                <p>
                  Bellwether Books is built by editors, designers, and publicists from major publishing houses, working alongside technologists who understand that software should support craft, not replace it.
                </p>
                <p>
                  Technology helps us work faster and smarter, but the heart of every book remains human judgment, editorial care, and creative collaboration.
                </p>
              </div>

              <div className="mt-8 p-6 bg-background border-l-4 border-[#FF6321]">
                <p className="font-heading text-lg italic text-foreground">
                  "We built Bellwether so every author can publish with pride — no shortcuts, no compromises."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
