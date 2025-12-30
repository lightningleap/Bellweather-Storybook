import { GitCommit, TrendingUp, BookOpen } from "lucide-react";

export function TheTimelineOfInfluence() {
  const steps = [
    {
      year: "Launch",
      title: "The Initial Release",
      description: "We position your book in key independent bookstores and literary circles where it can find its first champions.",
      icon: BookOpen
    },
    {
      year: "+6 Months",
      title: "The Cultural Conversation",
      description: "We nurture essays, panels, and discussions to move your work from a product to a topic of discourse.",
      icon: GitCommit
    },
    {
      year: "+5 Years",
      title: "The Enduring Legacy",
      description: "Our long-term rights management ensures your work remains available and relevant for future readers.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
            Beyond the Launch
          </span>
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            A Timeline of Influence
          </h2>
          <p className="text-muted-foreground font-serif text-lg leading-relaxed">
            Most publishers focus on the first week of sales. We focus on the lifespan of the book. Our framework supports a title from its release into the decades that follow.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-border hidden md:block -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-background p-6 text-center group border border-transparent hover:border-border transition-all">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-8 h-8 text-foreground stroke-1" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                  {step.year}
                </span>
                <h3 className="text-2xl font-heading mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-serif text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
