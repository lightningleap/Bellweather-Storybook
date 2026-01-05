"use client";

import { motion } from "motion/react";
import { MessageSquare, FileText, PenTool, Rocket, Globe, TrendingUp, HeartHandshake } from "lucide-react";
import { Button } from "../ui/button";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const steps = [
  {
    number: "01",
    title: "Get a Quote",
    description: "Our acquisitions chat gathers details about your manuscript and goals to generate a custom publishing proposal.",
    icon: MessageSquare,
    gradient: "from-orange-50 to-amber-50",
  },
  {
    number: "02",
    title: "Review Your Proposal",
    description: "Need changes? We'll tailor the scope, timeline, and services to fit your vision.",
    icon: FileText,
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    number: "03",
    title: "Sign & Get Started",
    description: "E-sign your agreement, make your first payment, and get paired with your acquisitions editor.",
    icon: PenTool,
    gradient: "from-purple-50 to-violet-50",
  },
  {
    number: "04",
    title: "We Do the Work",
    description: "Editing, design, formatting, publishing, marketing — only what you need, handled by experts.",
    icon: Rocket,
    gradient: "from-green-50 to-emerald-50",
  },
  {
    number: "05",
    title: "Publish Everywhere",
    description: "We distribute your book across all major retailers and platforms.",
    icon: Globe,
    gradient: "from-cyan-50 to-teal-50",
  },
  {
    number: "06",
    title: "Market & Grow",
    description: "Strategic campaigns designed to build real readership, not vanity metrics.",
    icon: TrendingUp,
    gradient: "from-pink-50 to-rose-50",
  },
  {
    number: "07",
    title: "Ongoing Support",
    description: "Transparent royalty reporting and long-term author support.",
    icon: HeartHandshake,
    gradient: "from-yellow-50 to-orange-50",
  },
];

export function ProcessV2() {
  return (
    <section className="bg-background relative">
      <div className="container mx-auto px-6">
        {/* Sticky Header - masks cards behind it */}
        <div className="sticky top-0 z-30 bg-background pt-24 pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
                How It Works
              </span>
              <h2 className="text-4xl md:text-5xl font-heading mb-4">
                Professional publishing. Clear steps. No gatekeepers.
              </h2>
              <p className="text-muted-foreground font-serif text-lg leading-relaxed">
                Everyone deserves access to high-quality publishing services — without agents, inflated fees, or one-size-fits-all packages.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stacking Cards */}
        <div className="max-w-5xl mx-auto pb-24">
          <ScrollStack>
            {steps.map((step, index) => (
              <ScrollStackItem key={index}>
                <div className={`bg-gradient-to-br ${step.gradient} p-8 md:p-12 rounded-2xl shadow-lg border border-border/30`}>
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-20 h-20 bg-[#FF6321] text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                      <step.icon className="w-9 h-9" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-[#FF6321] bg-white/80 px-3 py-1 rounded-full">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-heading mb-4 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground font-serif leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-[#FF6321] text-white hover:bg-[#E55A1A] rounded-none px-10 py-6 text-lg font-heading"
            onClick={() => window.location.href = '/signup'}
          >
            Start Your Publishing Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
