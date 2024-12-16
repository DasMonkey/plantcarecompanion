import { Check } from "lucide-react";

const stats = [
  { number: "10K+", label: "Active Users" },
  { number: "50K+", label: "Plants Tracked" },
  { number: "99%", label: "Plant Survival Rate" },
];

const features = [
  "Smart watering reminders",
  "Growth progress tracking",
  "Plant health monitoring",
  "Care history logs",
];

export const Stats = () => {
  return (
    <div className="bg-gradient-to-b from-nature-pink to-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Trusted by Plant Parents Worldwide
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="animate-fade-up">
                  <p className="text-4xl font-bold text-primary">{stat.number}</p>
                  <p className="mt-2 text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
              alt="Plant statistics"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent rounded-2xl">
              <div className="p-8 space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 animate-fade-up">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-text-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};