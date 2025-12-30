import { Calendar } from "lucide-react";
import { Button } from "./ui/button";

const releases = [
  {
    date: "Oct 12",
    title: "The Weight of Water",
    author: "Meredith Stone",
    category: "Poetry"
  },
  {
    date: "Nov 04",
    title: "Letters to a Stranger",
    author: "Davide Ricci",
    category: "Memoir"
  },
  {
    date: "Dec 01",
    title: "Winter's Geometry",
    author: "Anja Kovic",
    category: "Fiction"
  },
  {
    date: "Jan 15",
    title: "Almost Human",
    author: "Thomas Wright",
    category: "Essays"
  }
];

export function UpcomingReleases() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-2 block">
              Coming Soon
            </span>
            <h2 className="text-4xl md:text-5xl font-heading">
              The Season Ahead
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex rounded-none mt-4 md:mt-0">
            View Full Calendar
          </Button>
        </div>

        <div className="border-t border-border">
          {releases.map((release, index) => (
            <div key={index} className="group grid grid-cols-12 gap-4 py-8 border-b border-border items-center hover:bg-secondary/30 transition-colors px-2 cursor-pointer">
              <div className="col-span-3 md:col-span-2 text-sm font-medium text-muted-foreground flex items-center gap-2">
                {/* <Calendar className="w-4 h-4 opacity-50" /> {release.date} */}
              </div>
              <div className="col-span-9 md:col-span-6">
                <h3 className="text-2xl font-heading group-hover:translate-x-2 transition-transform duration-300">
                  {release.title}
                </h3>
              </div>
              <div className="col-span-6 md:col-span-2 mt-2 md:mt-0 text-sm font-serif italic text-muted-foreground">
                by {release.author}
              </div>
              <div className="col-span-6 md:col-span-2 mt-2 md:mt-0 text-right text-xs uppercase tracking-widest opacity-60">
                {release.category}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full rounded-none">
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
}
