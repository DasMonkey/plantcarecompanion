import { Calendar, ImagePlus, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Schedule Like a Pro",
    description: "Customize watering, pruning, and fertilizing tasks with specific notes, names, and dosages. Never miss a care routine again.",
  },
  {
    icon: ImagePlus,
    title: "Visual Growth Tracking",
    description: "Upload, compress, and resize images directly from your phone to document your plants' journey. Watch them thrive over time.",
  },
  {
    icon: CheckCircle,
    title: "Stay on Top of Tasks",
    description: "The built-in to-do list and 'Today's Actions' feature ensure you never miss a care routine. Keep your plants healthy and happy.",
  },
];

export const Features = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Everything You Need for Happy Plants
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Powerful features designed to make plant care effortless and enjoyable.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <dt className="text-base font-semibold leading-7 text-text">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-text-muted">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};