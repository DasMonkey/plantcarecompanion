import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-text">Plant Diary</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className="text-text-muted hover:text-text">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Get Started Free
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};