"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HeroV2() {
  return (
    <section className="relative h-screen pt-24 pb-12 flex items-center overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">

          <div className="space-y-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4 block">
                A Modern Publishing Framework
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-[1.1] mb-5 text-foreground">
                Bellwether Books: Where legacy publishing meets modern intelligence.
              </h1>
              <p className="text-base md:text-lg font-light leading-relaxed max-w-lg text-muted-foreground">
                Premium editorial services, global distribution, and expert guidance — without agents, gatekeepers, or inflated packages.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-[#FF6321] text-white hover:bg-[#E55A1A] rounded-none px-6 py-5 text-base font-heading"
                onClick={() => window.location.href = '/signup'}
              >
                Get Your Publishing Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-secondary rounded-none px-6 py-5 text-base font-heading group"
                onClick={() => window.location.href = '/contact'}
              >
                Talk to an Editor <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <div className="relative h-[calc(100vh-200px)] max-h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative h-full w-full bg-secondary p-3 shadow-lg"
            >
              <div className="absolute inset-0 border border-foreground/5 translate-x-3 translate-y-3 -z-10" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Stack of books in warm lighting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
