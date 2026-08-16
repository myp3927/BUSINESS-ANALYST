import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Context } from "@/components/Context";
import { Role } from "@/components/Role";
import { Scope } from "@/components/Scope";
import { ScoreModel } from "@/components/ScoreModel";
import { Decision } from "@/components/Decision";
import { Pipeline } from "@/components/Pipeline";
import { Value } from "@/components/Value";
import { Market } from "@/components/Market";
import { Roadmap } from "@/components/Roadmap";
import { Skills } from "@/components/Skills";
import { Tools } from "@/components/Tools";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Context />
        <Role />
        <Scope />
        <ScoreModel />
        <Decision />
        <Pipeline />
        <Value />
        <Market />
        <Roadmap />
        <Skills />
        <Tools />
      </main>
      <Footer />
    </>
  );
}
