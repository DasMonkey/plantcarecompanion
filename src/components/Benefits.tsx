import { Sprout, Cloud, Users } from "lucide-react";

const benefits = [
  {
    icon: Sprout,
    title: "Smart Plant Recognition",
    description: "Get instant plant identification and care tips tailored to your specific plant species.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Access your plant data from any device with secure cloud synchronization.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with fellow plant enthusiasts, share experiences, and get advice.",
  },
];

export const Benefits = () => {
  return (
    <div className="bg-gradient-to-b from-white to-nature-yellow py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Grow Your Plant Care Journey
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Join thousands of plant parents who trust Plant Diary for their daily plant care needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative animate-fade-up bg-white p-8 rounded-2xl shadow-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-nature">
                <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-text">{benefit.title}</h3>
              <p className="mt-4 text-text-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};