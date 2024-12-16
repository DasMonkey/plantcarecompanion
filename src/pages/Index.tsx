import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Stats } from "@/components/Stats";
import { Cta } from "@/components/Cta";

const Index = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Features />
      <Benefits />
      <Stats />
      <Cta />
    </main>
  );
};

export default Index;