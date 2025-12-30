import { PenTool, Search, BookOpen } from "lucide-react";

export function TheCraft() {
  const steps = [
    {
      icon: PenTool,
      title: "Discovery",
      description: "We read every manuscript with an open heart, looking for the spark of originality."
    },
    {
      icon: Search,
      title: "Curation",
      description: "Our editors work closely with authors to refine, polish, and elevate the narrative."
    },
    {
      icon: BookOpen,
      title: "Production",
      description: "From typesetting to cover design, we treat the physical book as a work of art."
    }
  ];

  return (
    <section className="py-24 bg-secondary/20 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
             <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
               The Process
             </span>
             <h2 className="text-4xl md:text-5xl font-heading mb-6">
               From Manuscript to Masterpiece
             </h2>
             <p className="text-muted-foreground font-serif text-lg leading-relaxed">
               Publishing with Bellwether is a partnership. We believe in transparency, guidance, and a shared dedication to excellence.
             </p>
          </div>
          
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-background p-8 border border-border/50 h-full">
                <step.icon className="w-8 h-8 text-foreground mb-6 stroke-1" />
                <h3 className="text-xl font-heading mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-serif leading-relaxed text-sm">
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
