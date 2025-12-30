import { Library, Building2, Store, Users, PenTool, Globe } from "lucide-react";

const paths = [
  {
    icon: Building2,
    title: "Big Five Publishers",
    description: "For authors seeking global distribution, major media coverage, and the prestige of a legacy imprint."
  },
  {
    icon: Library,
    title: "Midsize Publishers",
    description: "For those needing focused editorial partnership and specific genre expertise without the corporate scale."
  },
  {
    icon: Store,
    title: "Small / Indie Presses",
    description: "For literary and avant-garde voices looking for a champion who takes creative risks."
  },
  {
    icon: Users,
    title: "Hybrid Publishers",
    description: "For authors who want to invest in their work while retaining professional distribution and editorial standards."
  },
  {
    icon: PenTool,
    title: "Self-Publishing",
    description: "For entrepreneurs who want total creative control, higher royalties, and ownership of their intellectual property."
  },
  {
    icon: Globe,
    title: "Social Publishing",
    description: "For writers building direct communities and serializing content for digital-native readers."
  }
];

export function PublishingPaths() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
            Clarity of Direction
          </span>
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            The Six Publishing Paths
          </h2>
          <p className="text-muted-foreground font-serif text-lg leading-relaxed">
            There is no single "correct" way to publish. There is only the path that aligns with your goals. We help you navigate the trade-offs of each model so you can choose with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div key={index} className="group p-8 border border-border hover:border-foreground transition-colors duration-500 bg-card">
              <path.icon className="w-8 h-8 text-foreground mb-6 stroke-1 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-heading mb-3">{path.title}</h3>
              <p className="text-muted-foreground font-serif text-sm leading-relaxed">
                {path.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
