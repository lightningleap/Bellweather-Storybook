import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const authors = [
  {
    name: "Arthur Pendelton",
    role: "Fiction",
    image: "https://images.unsplash.com/photo-1605464705085-b7234de7a4dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwYXV0aG9yJTIwcG9ydHJhaXQlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY3MDc0MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Exploring the fragile dynamics of family in the modern age."
  },
  {
    name: "Clara Weiss",
    role: "Poetry",
    image: "https://images.unsplash.com/photo-1765828304047-72bda323f34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZWFkaW5nJTIwaW4lMjBhcm1jaGFpciUyMGNvenklMjBsaWJyYXJ5fGVufDF8fHx8MTc2NzA3NDA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Weaving silence and sound into landscapes of memory."
  },
  {
    name: "Julian Harks",
    role: "Essays",
    image: "https://images.unsplash.com/photo-1632180807484-776f583dff9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwaGFuZCUyMGNsb3NlJTIwdXAlMjBmb3VudGFpbiUyMHBlbnxlbnwxfHx8fDE3NjcwNzQxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Critical perspectives on art, architecture, and society."
  }
];

export function SelectedAuthors() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
            Our Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            Architects of Imagination
          </h2>
          <p className="text-muted-foreground font-serif text-lg">
            We are proud to represent a diverse collective of visionary storytellers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <div key={index} className="group text-center">
              <div className="aspect-[3/4] overflow-hidden bg-secondary mb-6 relative">
                 <ImageWithFallback 
                  src={author.image} 
                  alt={author.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-2xl font-heading mb-1">{author.name}</h3>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{author.role}</p>
              <p className="text-muted-foreground font-serif leading-relaxed px-4">
                {author.bio}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
           <a href="#" className="inline-flex items-center text-lg font-heading hover:text-muted-foreground transition-colors border-b border-foreground pb-1 hover:border-muted-foreground">
             Meet All Authors <ArrowRight className="ml-2 w-4 h-4" />
           </a>
        </div>
      </div>
    </section>
  );
}
