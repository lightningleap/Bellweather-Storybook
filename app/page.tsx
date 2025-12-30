import { Header } from "@/components/landing-page/Header";
import { Hero } from "@/components/landing-page/Hero";
import { MissionStatement } from "@/components/landing-page/MissionStatement";
import { AcquisitionBot } from "@/components/landing-page/AcquisitionBot";
import { PublishingPaths } from "@/components/landing-page/PublishingPaths";
import { TheSuite } from "@/components/landing-page/TheSuite";
import { NarrapixShowcase } from "@/components/landing-page/NarrapixShowcase";
import { CollaborativeWorkspace } from "@/components/landing-page/CollaborativeWorkspace";
import { TheSlushPileRedefined } from "@/components/landing-page/TheSlushPileRedefined";
import { MentorshipNetwork } from "@/components/landing-page/MentorshipNetwork";
import { TheLivingContract } from "@/components/landing-page/TheLivingContract";
import { GlobalRightsMap } from "@/components/landing-page/GlobalRightsMap";
import { AudioSynthesis } from "@/components/landing-page/AudioSynthesis";
import { HumanInfrastructure } from "@/components/landing-page/HumanInfrastructure";
import { TheTimelineOfInfluence } from "@/components/landing-page/TheTimelineOfInfluence";
import { SuccessStory } from "@/components/landing-page/SuccessStory";
import { EthicalCommitment } from "@/components/landing-page/EthicalCommitment";
import { TheJournal } from "@/components/landing-page/TheJournal";
import { TheBellwetherPrize } from "@/components/landing-page/TheBellwetherPrize";
import { FAQ } from "@/components/landing-page/FAQ";
import { JoinTheGuild } from "@/components/landing-page/JoinTheGuild";
// import { Newsletter } from "@/components/landing-page/Newsletter";
import { ProcessPageFlip } from "@/components/landing-page/ProcessPageFlip";
import { Footer } from "@/components/landing-page/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-foreground selection:text-background">
      <Header />
      <main>
        <Hero />
        <MissionStatement />
        <AcquisitionBot />
        <ProcessPageFlip accent="#FF6321" accentDark="#E55A1A" />
        <TheTimelineOfInfluence />
        {/* <PublishingPaths /> */}
        <TheSuite />
        {/* <NarrapixShowcase /> */}
        <CollaborativeWorkspace />
        {/* <TheSlushPileRedefined /> */}
        <MentorshipNetwork />
        {/* <TheLivingContract /> */}
        <GlobalRightsMap />
        <AudioSynthesis />
        <HumanInfrastructure />
        <SuccessStory />
        <EthicalCommitment />
        {/* <TheJournal /> */}
        {/* <TheBellwetherPrize /> */}
        <FAQ />
        <JoinTheGuild />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </div>
  );
}
