"use client";

import { motion } from "motion/react";
import { PenTool, Palette, Globe, Megaphone } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const services = [
  {
    icon: PenTool,
    title: "Editorial Excellence",
    description: "From developmental editing to copyediting, your book is shaped by experienced editors from top publishing houses.",
    spotlightColor: "rgba(255, 99, 33, 0.15)",
  },
  {
    icon: Palette,
    title: "World-Class Design",
    description: "Beautiful covers and interiors crafted to compete with the best books on the shelf.",
    spotlightColor: "rgba(147, 51, 234, 0.15)",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description: "Available everywhere books are sold — Amazon, Barnes & Noble, Bookshop.org, Apple Books, and more.",
    spotlightColor: "rgba(34, 197, 94, 0.15)",
  },
  {
    icon: Megaphone,
    title: "Marketing & Publicity",
    description: "Thoughtful launch strategies and author platforms built for lasting readership, not quick spikes.",
    spotlightColor: "rgba(59, 130, 246, 0.15)",
  },
];

export function ServicesV2() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            Premium, end-to-end publishing — without the bloated price tag.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard
                spotlightColor={service.spotlightColor}
                className="h-full"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-foreground text-background rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-heading mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-serif text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
