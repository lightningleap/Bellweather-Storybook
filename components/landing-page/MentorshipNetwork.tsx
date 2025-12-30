import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const mentors = [
  {
    name: "Dr. Alistair Thorne",
    specialty: "Historical Fiction",
    experience: "40 Years Experience",
    image: "https://images.unsplash.com/photo-1692111066821-08fdad9e5825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjBwZW9wbGUlMjB0YWxraW5nJTIwZGlzY3Vzc2lvbiUyMHNpbGhvdWV0dGUlMjB3aW5kb3d8ZW58MXx8fHwxNzY3MDc1MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
  },
  {
    name: "Elena Vance",
    specialty: "Literary Memoir",
    experience: "25 Years Experience",
    image: "https://images.unsplash.com/photo-1605464705085-b7234de7a4dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwYXV0aG9yJTIwcG9ydHJhaXQlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY3MDc0MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Marcus J. Reed",
    specialty: "Speculative Fiction",
    experience: "30 Years Experience",
    image: "https://images.unsplash.com/photo-1632180807484-776f583dff9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwaGFuZCUyMGNsb3NlJTIwdXAlMjBmb3VudGFpbiUyMHBlbnxlbnwxfHx8fDE3NjcwNzQxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function MentorshipNetwork() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
              Human Guidance
            </span>
            <h2 className="text-4xl md:text-5xl font-heading">
              Guidance from the Guild
            </h2>
            <p className="text-muted-foreground font-serif text-lg mt-4 max-w-2xl">
              Technology cannot replace experience. We connect you with seasoned editors and published authors who understand the journey because they've walked it themselves.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center text-lg font-heading hover:text-muted-foreground transition-colors border-b border-foreground pb-1">
             View All Mentors <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="group relative">
               <div className="aspect-[3/4] overflow-hidden bg-secondary mb-4 relative">
                  <ImageWithFallback 
                     src={mentor.image} 
                     alt={mentor.name} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <p className="text-xs uppercase tracking-widest mb-1">{mentor.experience}</p>
                  </div>
               </div>
               <h3 className="text-2xl font-heading">{mentor.name}</h3>
               <p className="text-muted-foreground font-serif text-sm mt-1">{mentor.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
