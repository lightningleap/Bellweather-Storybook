"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

const benefits = [
  "Full editorial control",
  "100% ownership of rights",
  "100% of royalties",
];

export function ValuePropositionV2() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
              Why Bellwether
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              High-quality publishing without the high-pressure sales pitch.
            </h2>
            <p className="text-lg font-serif text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              By combining deep industry experience with modern technology, Bellwether delivers premium publishing services faster, more transparently, and at a fraction of traditional costs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background p-8 md:p-12 border border-border"
          >
            <h3 className="text-2xl font-heading mb-6 text-center">Authors retain:</h3>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#FF6321] rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-heading">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="text-center pt-6 border-t border-border">
              <p className="text-muted-foreground font-serif text-lg font-semibold">
                No hidden fees. No rights grabs. No compromises.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
