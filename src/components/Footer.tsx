import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Social */}
          <div className="space-y-4">
            <div className="font-serif text-lg font-bold">
              The Re-membering Collective
            </div>
            <p className="font-sans text-sm text-secondary-foreground/80">
              Healing through body, story, and community
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@re-membering.co"
                className="text-secondary-foreground/60 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold">Explore</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/about"
                className="font-sans text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                to="/offerings"
                className="font-sans text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
              >
                Offerings
              </Link>
              <Link
                to="/collective"
                className="font-sans text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
              >
                The Collective
              </Link>
              <Link
                to="/journal"
                className="font-sans text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
              >
                Journal
              </Link>
              <Link
                to="/contact"
                className="font-sans text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold">Join Our Community</h3>
            <p className="font-sans text-sm text-secondary-foreground/80">
              Stay connected with insights, events, and stories from our healing community.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
              />
              <Button variant="subtle" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="font-sans text-xs text-secondary-foreground/60">
              © 2024 The Re-membering Collective. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/privacy"
                className="font-sans text-xs text-secondary-foreground/60 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-sans text-xs text-secondary-foreground/60 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;