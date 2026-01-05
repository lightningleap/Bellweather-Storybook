"use client";

import { motion } from "motion/react";
import { Quote, Globe, FileText, Users } from "lucide-react";

const stats = [
  {
    icon: Globe,
    label: "Global Retail Distribution",
  },
  {
    icon: FileText,
    label: "Transparent Royalty Reporting",
  },
  {
    icon: Users,
    label: "Editor-Led Publishing Teams",
  },
];

export function TrustResultsV2() {
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
              Author Outcomes
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Built for careers, not just launches.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background p-8 md:p-12 border border-border mb-12"
          >
            <div className="relative pl-12 mb-6">
              <Quote className="w-8 h-8 text-[#FF6321]/30 absolute top-0 left-0" />
              <p className="text-xl font-serif text-foreground/80 italic leading-relaxed">
                "Bellwether didn't just help publish my book — they helped me understand it. It felt like working with a top-tier editorial team, without the politics."
              </p>
            </div>
            <p className="text-right font-heading text-muted-foreground">
              — Published Author
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background p-6 border border-border text-center"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-foreground" />
                </div>
                <p className="font-heading text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
