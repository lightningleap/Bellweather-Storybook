import { FileCheck, RefreshCw, Shield } from "lucide-react";

export function TheLivingContract() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.2em] text-background/60 font-medium mb-3 block">
               Transparent Operations
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-6 text-background">
              The Living Contract
            </h2>
            <p className="text-xl font-serif text-background/80 mb-8 leading-relaxed">
              Gone are the days of opaque accounting and semi-annual statements. Bellwether introduces a smart ledger that updates in real-time, putting your financial health first.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="border border-background/20 p-6">
                <RefreshCw className="w-8 h-8 mb-4 text-background/80" />
                <h3 className="font-heading text-xl mb-2">Real-Time Royalties</h3>
                <p className="text-sm text-background/60">Watch your earnings accrue the moment a sale is made, anywhere in the world.</p>
              </div>
              <div className="border border-background/20 p-6">
                <Shield className="w-8 h-8 mb-4 text-background/80" />
                <h3 className="font-heading text-xl mb-2">Clear Rights</h3>
                <p className="text-sm text-background/60">Immutable records ensure your intellectual property is never disputed or lost in the files.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
             <div className="bg-background/5 backdrop-blur-sm border border-background/10 p-8 rounded-lg">
                <div className="flex justify-between items-center border-b border-background/10 pb-4 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-background/60">Contract Status</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-background">Active</span>
                  </div>
                </div>
                <div className="space-y-4 font-mono text-sm text-background/80">
                  <div className="flex justify-between">
                    <span>Term Start</span>
                    <span>Oct 12, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Territories</span>
                    <span>World (All Languages)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Royalty Rate (eBook)</span>
                    <span>70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Royalty Rate (Print)</span>
                    <span>50%</span>
                  </div>
                  <div className="pt-4 border-t border-background/10 mt-4 flex justify-between items-center">
                    <span>Current Balance</span>
                    <span className="text-2xl font-heading">$4,285.50</span>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
