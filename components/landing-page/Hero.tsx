"use client";

import { motion } from "motion/react";
import { ArrowRight, Feather } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4 block flex items-center gap-2">
                <Feather className="w-4 h-4" /> A Legacy Framework for Modern Publishing
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-[1.1] mb-6 text-foreground">
                Publishing with judgment, care, and intelligence.
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl text-muted-foreground">
                Bellwether Books is a human-centered publishing framework that guides authors from manuscript to publication with editorial wisdom and intelligent systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 text-lg font-heading" onClick={() => window.location.href = '/signup'}>
                Begin a Conversation
              </Button>
              <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-secondary rounded-none px-8 py-6 text-lg font-heading group" onClick={() => window.location.href = '/signin'}>
                Explore the Framework <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-3 bg-[#FF6321]/10 border border-[#FF6321]/30 rounded-full px-5 py-2.5 mt-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6321] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6321]"></span>
              </span>
              <a href="/trial" className="text-[#FF6321] hover:text-[#E55A1A] font-medium text-base">
                Try our AI assistant free — no signup required
              </a>
              <ArrowRight className="w-4 h-4 text-[#FF6321]" />
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-[3/4] w-full bg-secondary p-4 shadow-lg"
            >
              <div className="absolute inset-0 border border-foreground/5 translate-x-4 translate-y-4 -z-10" />
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1755004609893-48ee138a61d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rJTIwbGlicmFyeSUyMGFlc3RoZXRpYyUyMHdhcm0lMjBsaWdodHxlbnwxfHx8fDE3NjcwNzU1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Classical typewriter meeting modern technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-background/90 backdrop-blur px-6 py-4 border-t border-r border-border max-w-xs">
                <p className="font-heading text-lg italic">"Technology should serve the storyteller, not overshadow the story."</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
