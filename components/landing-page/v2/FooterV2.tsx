export function FooterV2() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="space-y-4">
            <a href="/" className="font-heading text-2xl tracking-tight">
              Bellwether<span className="text-muted-foreground">.</span>
            </a>
            <p className="text-sm text-muted-foreground font-serif leading-relaxed max-w-xs">
              Building the infrastructure for the next century of literature.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">For Authors</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Get Started</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">About</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-foreground/10 pt-8 text-center text-xs text-muted-foreground uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Bellwether Books</p>
        </div>
      </div>
    </footer>
  );
}
