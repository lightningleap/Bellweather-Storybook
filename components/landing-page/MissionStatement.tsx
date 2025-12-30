"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function MissionStatement() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
             <div className="aspect-[4/5] max-w-md mx-auto relative">
                <div className="absolute inset-0 border border-foreground/10 translate-x-4 translate-y-4 -z-10" />
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhvbGRpbmclMjBvbGQlMjBib29rJTIwd2FybSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2NzA3NjAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Hands holding a book" 
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
                The Core Belief
              </span>
              <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight">
                Technology should serve the story, not the other way around.
              </h2>
              <div className="space-y-4 text-lg font-serif text-muted-foreground leading-relaxed">
                <p>
                  Bellwether is not a self-publishing platform or an AI writing tool. It is a modern publishing framework designed to restore the judgment, care, and human insight that defines the best of literary tradition.
                </p>
                <p>
                  We believe that every manuscript deserves to be understood on its own terms. Our tools amplify the editor's ear rather than replacing it, ensuring your work is polished and protected with integrity.
                </p>
                <p>
                  This is a return to the guild—where craft meets code.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
