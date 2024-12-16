import { cn } from "@/lib/utils";

interface ImageTextBlockProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

export const ImageTextBlock = ({
  title,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
}: ImageTextBlockProps) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn(
          "grid grid-cols-1 gap-12 lg:grid-cols-2 items-center",
          reverse ? "lg:flex-row-reverse" : ""
        )}>
          <div 
            className="animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              {description}
            </p>
          </div>
          <div 
            className={cn(
              "overflow-hidden rounded-xl animate-fade-up",
              reverse ? "lg:order-first" : ""
            )}
            style={{ animationDelay: "400ms" }}
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};