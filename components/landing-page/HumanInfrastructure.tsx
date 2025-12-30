import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HumanInfrastructure() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
               Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              The Guild Behind the Code
            </h2>
            <p className="text-lg font-serif text-muted-foreground mb-8 leading-relaxed">
              Bellwether is not a faceless tech company. We are a collective of editors, designers, and publishers who are building the tools we wish we had.
            </p>
            <div className="space-y-6 border-l-2 border-border pl-6">
              <p className="text-muted-foreground font-serif">
                <strong className="text-foreground font-heading block mb-1">Editor-Led Design</strong>
                Every feature is designed by people who understand the editorial process, ensuring our technology respects the nuance of your craft.
              </p>
              <p className="text-muted-foreground font-serif">
                <strong className="text-foreground font-heading block mb-1">Ethical Engineering</strong>
                Our technologists work alongside humanists to ensure that our algorithms prioritize artistic integrity over raw metrics.
              </p>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-video bg-secondary relative overflow-hidden">
               <ImageWithFallback 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwcm9vbSUyMGNyZWF0aXZlJTIwdGVhbSUyMGJsb25kJTIwd29vZCUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzY3MDc3MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                 alt="The Bellwether Guild"
                 className="w-full h-full object-cover filter sepia-[0.2]"
               />
               <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply" />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-background p-6 border border-border max-w-sm hidden md:block">
               <p className="font-heading text-lg italic">"We are not replacing the publisher—we are reviving the publisher's heart in a new form."</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
