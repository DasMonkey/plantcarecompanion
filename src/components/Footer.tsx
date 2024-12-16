import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  product: ["Features", "Pricing", "Use Cases", "Integrations"],
  company: ["About", "Blog", "Careers", "Press"],
  resources: ["Documentation", "Help Center", "Community", "Contact"],
  legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex items-center mb-8">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-text ml-2">Plant Diary</span>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-text uppercase">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-text-muted hover:text-text transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-text-muted">
            © {new Date().getFullYear()} Plant Diary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};