import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Bellwether is a sanctuary for serious writing. They don't just publish books; they curate culture.",
    author: "The Literary Review",
    role: "Critic"
  },
  {
    quote: "In an industry obsessed with speed, Bellwether has the courage to be slow. The results are undeniable.",
    author: "Jonathan E.",
    role: "Award-winning Author"
  },
  {
    quote: "Every book I've picked up from them has been a tactile and intellectual treasure.",
    author: "Sarah M.",
    role: "Reader"
  }
];

export function Praise() {
  return (
    <section className="py-32 bg-background border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {testimonials.map((item, index) => (
            <div key={index} className="px-4 py-8 lg:py-0 text-center flex flex-col items-center">
              <Quote className="w-8 h-8 text-muted-foreground/30 mb-6 rotate-180" />
              <blockquote className="font-heading text-xl md:text-2xl leading-relaxed mb-6 text-foreground/90">
                "{item.quote}"
              </blockquote>
              <cite className="not-italic text-sm font-medium tracking-wide">
                <span className="block text-foreground">{item.author}</span>
                <span className="block text-muted-foreground text-xs uppercase tracking-widest mt-1">{item.role}</span>
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
