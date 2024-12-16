import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Stats } from "@/components/Stats";
import { Cta } from "@/components/Cta";
import { ImageTextBlock } from "@/components/ImageTextBlock";

const Index = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Features />
      <ImageTextBlock
        title="Track Your Plant's Journey"
        description="Document every milestone in your plant's growth with our intuitive tracking system. From the first sprout to full bloom, capture and celebrate each moment of your plant's development."
        imageUrl="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
        imageAlt="Sunlight through forest trees"
      />
      <Benefits />
      <ImageTextBlock
        title="Smart Care Scheduling"
        description="Never miss a watering day again. Our intelligent scheduling system helps you maintain the perfect care routine for each of your plants, considering their unique needs and growing conditions."
        imageUrl="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
        imageAlt="Beautiful garden view"
        reverse={true}
      />
      <Stats />
      <ImageTextBlock
        title="Community & Expert Support"
        description="Join a thriving community of plant enthusiasts. Share your experiences, get advice from experts, and connect with fellow plant lovers who share your passion for growing and nurturing plants."
        imageUrl="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
        imageAlt="Vibrant orange flowers"
      />
      <Cta />
    </main>
  );
};

export default Index;