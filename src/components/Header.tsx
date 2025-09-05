import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Main Navigation */}
      <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center px-2 py-6">
                <img 
                  src="/logo.png"
                  alt="PREDiM TECH Logo" 
                  className="h-full w-auto max-w-[150px] object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium hover:text-blue-accent transition-colors ${
                  location.pathname === '/' ? 'text-blue-accent' : 'text-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-blue-accent transition-colors ${
                  location.pathname === '/about' ? 'text-blue-accent' : 'text-foreground'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`hover:text-blue-accent transition-colors ${
                  location.pathname === '/services' ? 'text-blue-accent' : 'text-foreground'
                }`}
              >
                Service
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-blue-accent transition-colors ${
                  location.pathname === '/contact' ? 'text-blue-accent' : 'text-foreground'
                }`}
              >
                Contact Us
              </Link>
              <Link 
                to="/blog" 
                className={`hover:text-blue-accent transition-colors ${
                  location.pathname === '/blog' ? 'text-blue-accent' : 'text-foreground'
                }`}
              >
                Blog
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`font-medium hover:text-blue-accent transition-colors ${
                    location.pathname === '/' ? 'text-blue-accent' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`hover:text-blue-accent transition-colors ${
                    location.pathname === '/about' ? 'text-blue-accent' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/services" 
                  className={`hover:text-blue-accent transition-colors ${
                    location.pathname === '/services' ? 'text-blue-accent' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Service
                </Link>
                <Link 
                  to="/contact" 
                  className={`hover:text-blue-accent transition-colors ${
                    location.pathname === '/contact' ? 'text-blue-accent' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link 
                  to="/blog" 
                  className={`hover:text-blue-accent transition-colors ${
                    location.pathname === '/blog' ? 'text-blue-accent' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
