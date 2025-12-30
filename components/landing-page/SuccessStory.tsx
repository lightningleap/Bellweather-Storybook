import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function SuccessStory() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
             <div className="relative aspect-[2/3] max-w-sm mx-auto shadow-xl rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
                <ImageWithFallback 
                   src="https://images.unsplash.com/photo-1690023835938-b078c130d58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMGdsb3dpbmclMjBtYWdpYyUyMHJlYWxpc218ZW58MXx8fHwxNzY3MDc1MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                   alt="Book Cover: The Light Between"
                   className="w-full h-full object-cover"
                />
             </div>
          </div>
          
          <div className="lg:col-span-7">
             <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3 block">
                Proven Results
             </span>
             <h2 className="text-4xl md:text-5xl font-heading mb-6">
                From Draft to Classic
             </h2>
             <div className="relative pl-12 mb-8">
                <Quote className="w-8 h-8 text-foreground/20 absolute top-0 left-0" />
                <p className="text-xl font-serif text-foreground/80 italic leading-relaxed">
                   "The Bellwether Framework didn't just organize my manuscript; it helped me rediscover the emotional core of the story. It felt like having a brilliant editor looking over my shoulder at 3 AM."
                </p>
                <p className="mt-4 font-bold text-foreground">— Sarah J. Miller, NYT Bestselling Author</p>
             </div>
             
             <div className="grid grid-cols-3 gap-8 border-t border-border pt-8">
                <div>
                   <p className="text-3xl font-heading">14</p>
                   <p className="text-xs text-muted-foreground uppercase tracking-widest">Weeks on Bestseller List</p>
                </div>
                <div>
                   <p className="text-3xl font-heading">32</p>
                   <p className="text-xs text-muted-foreground uppercase tracking-widest">Territories Sold</p>
                </div>
                <div>
                   <p className="text-3xl font-heading">4.9</p>
                   <p className="text-xs text-muted-foreground uppercase tracking-widest">Reader Rating</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
