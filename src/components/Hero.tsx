import { Calendar, Leaf, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-nature to-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
          alt="Plant background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-text sm:text-6xl">
            Your Ultimate Plant Care Companion
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-muted max-w-2xl mx-auto">
            Track your plants' health, create personalized care schedules, and document growth with ease. The smart way to keep your plants thriving.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm text-text-muted">Smart Scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="text-sm text-text-muted">Growth Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <ImagePlus className="h-5 w-5 text-primary" />
              <span className="text-sm text-text-muted">Visual History</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};