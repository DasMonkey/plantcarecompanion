import { Calendar, ImagePlus, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Schedule Like a Pro",
    description: "Customize watering, pruning, and fertilizing tasks with specific notes, names, and dosages. Never miss a care routine again.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    imagePosition: "right"
  },
  {
    icon: ImagePlus,
    title: "Visual Growth Tracking",
    description: "Upload, compress, and resize images directly from your phone to document your plants' journey. Watch them thrive over time.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    imagePosition: "left"
  },
  {
    icon: CheckCircle,
    title: "Stay on Top of Tasks",
    description: "The built-in to-do list and 'Today's Actions' feature ensure you never miss a care routine. Keep your plants healthy and happy.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    imagePosition: "right"
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
        <div className="mx-auto mt-16 max-w-7xl space-y-24">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`flex flex-col ${feature.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 animate-fade-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-semibold text-text">{feature.title}</h3>
                </div>
                <p className="text-lg text-text-muted">{feature.description}</p>
              </div>
              <div className="flex-1">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};