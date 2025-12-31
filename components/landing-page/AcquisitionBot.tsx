"use client";

import { MessageSquare, Heart, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function AcquisitionBot() {
  return (
    <section className="py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 relative order-2 lg:order-1">
             <div className="bg-secondary/20 p-8 border border-border rounded-sm relative">
                <div className="space-y-6 font-serif">
                   <div className="flex gap-4">
                      <div className="w-8 h-8 min-w-8 min-h-8 rounded-full bg-foreground text-background flex items-center justify-center font-heading text-sm">B</div>
                      <div className="bg-secondary p-4 rounded-tl-none rounded-br-xl rounded-tr-xl rounded-bl-xl text-sm leading-relaxed">
                         Tell me about the world you've built. What is the central question your protagonist is trying to answer?
                      </div>
                   </div>
                   <div className="flex gap-4 flex-row-reverse">
                      <div className="w-8 h-8 min-w-8 min-h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-heading text-sm">A</div>
                      <div className="bg-white border border-border p-4 rounded-tr-none rounded-bl-xl rounded-tl-xl rounded-br-xl text-sm leading-relaxed">
                         It's about the silence between generations. She's trying to understand why her father stopped speaking...
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-8 h-8 min-w-8 min-h-8 rounded-full bg-foreground text-background flex items-center justify-center font-heading text-sm">B</div>
                      <div className="bg-secondary p-4 rounded-tl-none rounded-br-xl rounded-tr-xl rounded-bl-xl text-sm leading-relaxed">
                         That sounds incredibly poignant. "The silence between generations"—that phrase suggests a legacy of unspoken things. Let's explore that theme further.
                      </div>
                   </div>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent/50 -z-10 rounded-full blur-2xl" />
             </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
               The First Step
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Conversational Acquisition
            </h2>
            <p className="text-xl font-light text-muted-foreground mb-8">
              We replace the impersonal query form with a dialogue that understands your narrative intent.
            </p>
            
            <div className="space-y-8">
               <div className="flex gap-4">
                  <MessageSquare className="w-6 h-6 text-foreground shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-heading mb-2">Dialogue, Not Data Entry</h3>
                    <p className="text-muted-foreground font-serif text-sm leading-relaxed">
                      Instead of filling out static fields, you discuss your book's themes, characters, and goals with an intelligent guide that listens and asks follow-up questions.
                    </p>
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-foreground shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-heading mb-2">Editorial Context</h3>
                    <p className="text-muted-foreground font-serif text-sm leading-relaxed">
                       Our system captures the nuance of your voice and the emotional core of your story, providing our editors with a rich, contextual understanding of your work.
                    </p>
                  </div>
               </div>

               <div className="flex gap-4">
                  <Sparkles className="w-6 h-6 text-foreground shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-heading mb-2">Immediate Clarity</h3>
                    <p className="text-muted-foreground font-serif text-sm leading-relaxed">
                       This conversation converts your creative intent into a structured proposal, bridging the gap between your manuscript and the publishing market.
                    </p>
                  </div>
               </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
               <Button className="rounded-none px-8 py-6 text-lg" onClick={() => window.location.href = '/signup'}>Start Your Manuscript Conversation</Button>
               <Button variant="outline" className="rounded-none px-8 py-6 text-lg border-2 border-[#FF6321] text-[#FF6321] hover:bg-[#FF6321] hover:text-white" onClick={() => window.location.href = '/trial'}>Try It Free</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
