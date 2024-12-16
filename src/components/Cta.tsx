import { Button } from "@/components/ui/button";

export const Cta = () => {
  return (
    <div className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Plant Care Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Join thousands of plant enthusiasts who have transformed their plant care routine with Plant Diary.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};