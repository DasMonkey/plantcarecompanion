import { Calendar, Leaf, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-nature to-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-text sm:text-6xl animate-fade-up">
              Your Ultimate Plant Care Companion
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-muted max-w-2xl animate-fade-up" style={{ animationDelay: "200ms" }}>
              Track your plants' health, create personalized care schedules, and document growth with ease. The smart way to keep your plants thriving.
            </p>
            <div className="mt-10 flex items-center gap-x-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="mt-16 flex gap-8 animate-fade-up" style={{ animationDelay: "600ms" }}>
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
          <div className="relative animate-fade-up" style={{ animationDelay: "800ms" }}>
            <img
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
              alt="Beautiful plant in sunlight"
              className="w-full rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};