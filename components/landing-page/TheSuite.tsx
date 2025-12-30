import { Compass, FileText, Layout, FileSearch, Palette, Scale } from "lucide-react";

const modules = [
  {
    icon: Compass,
    title: "Pathway Advisor",
    description: "Diagnose your readiness and identify the publishing model that fits your career goals."
  },
  {
    icon: FileSearch,
    title: "Manuscript Evaluator",
    description: "Receive developmental feedback that analyzes pacing, character arcs, and genre expectations."
  },
  {
    icon: FileText,
    title: "Proposal Generator",
    description: "Convert your manuscript data into a professional submission packet for agents and editors."
  },
  {
    icon: Layout,
    title: "Design Companion",
    description: "Create industry-standard book interiors and cover concepts guided by your book's aesthetic DNA."
  },
  {
    icon: Palette,
    title: "Narrapix",
    description: "Visualize your story's mood and themes to create compelling marketing assets."
  },
  {
    icon: Scale,
    title: "Rights Tracker",
    description: "Monitor your contracts, territories, and royalties with clear, jargon-free dashboards."
  }
];

export function TheSuite() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-24">
             <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
               The Toolkit
             </span>
             <h2 className="text-4xl md:text-5xl font-heading mb-6">
               The Bellwether Suite
             </h2>
             <p className="text-muted-foreground font-serif text-lg leading-relaxed mb-6">
               A set of quiet, intelligent tools designed to handle the business of publishing so you can focus on the craft of writing.
             </p>
             <p className="text-foreground font-medium italic font-heading text-lg">
               "Accelerate progress without erasing the craft."
             </p>
          </div>
          
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-background p-8 border border-border/50 hover:shadow-sm transition-shadow">
                <module.icon className="w-6 h-6 text-foreground mb-4" />
                <h3 className="text-lg font-heading mb-2">{module.title}</h3>
                <p className="text-muted-foreground font-serif text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
