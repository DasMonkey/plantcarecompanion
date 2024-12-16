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
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-text">
              Everything You Need for Healthy Plants
            </h3>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 animate-fade-up">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-text-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};