"use client";

import { useState } from "react";

// V1 Components
import { Header } from "@/components/landing-page/Header";
import { Hero } from "@/components/landing-page/Hero";
import { MissionStatement } from "@/components/landing-page/MissionStatement";
import { AcquisitionBot } from "@/components/landing-page/AcquisitionBot";
import { TheSuite } from "@/components/landing-page/TheSuite";
import { CollaborativeWorkspace } from "@/components/landing-page/CollaborativeWorkspace";
import { MentorshipNetwork } from "@/components/landing-page/MentorshipNetwork";
import { GlobalRightsMap } from "@/components/landing-page/GlobalRightsMap";
import { AudioSynthesis } from "@/components/landing-page/AudioSynthesis";
import { HumanInfrastructure } from "@/components/landing-page/HumanInfrastructure";
import { TheTimelineOfInfluence } from "@/components/landing-page/TheTimelineOfInfluence";
import { SuccessStory } from "@/components/landing-page/SuccessStory";
import { EthicalCommitment } from "@/components/landing-page/EthicalCommitment";
import { FAQ } from "@/components/landing-page/FAQ";
import { JoinTheGuild } from "@/components/landing-page/JoinTheGuild";
import { ProcessPageFlip } from "@/components/landing-page/ProcessPageFlip";
import { Footer } from "@/components/landing-page/Footer";

// V2 Components
import {
  HeaderV2,
  HeroV2,
  PhilosophyV2,
  ProcessV2,
  ValuePropositionV2,
  ServicesV2,
  TrustResultsV2,
  FinalCTAV2,
  FooterV2,
} from "@/components/landing-page/v2";

// Version Switcher
import { VersionSwitcher } from "@/components/landing-page/VersionSwitcher";

export default function Home() {
  const [version, setVersion] = useState<"v1" | "v2">("v1");

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-foreground selection:text-background">
      <VersionSwitcher currentVersion={version} onVersionChange={setVersion} />

      {version === "v1" ? (
        <>
          <Header />
          <main>
            <Hero />
            <MissionStatement />
            <AcquisitionBot />
            <ProcessPageFlip accent="#FF6321" accentDark="#E55A1A" />
            <TheTimelineOfInfluence />
            <TheSuite />
            <CollaborativeWorkspace />
            <MentorshipNetwork />
            <GlobalRightsMap />
            <AudioSynthesis />
            <HumanInfrastructure />
            <SuccessStory />
            <EthicalCommitment />
            <FAQ />
            <JoinTheGuild />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <HeaderV2 />
          <main>
            <HeroV2 />
            <PhilosophyV2 />
            <ProcessV2 />
            <ValuePropositionV2 />
            <ServicesV2 />
            <TrustResultsV2 />
            <FinalCTAV2 />
          </main>
          <FooterV2 />
        </>
      )}
    </div>
  );
}
