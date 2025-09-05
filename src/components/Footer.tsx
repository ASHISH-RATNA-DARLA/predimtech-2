import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-top-bar text-top-bar-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-top-bar-foreground">PREDIM</span>
              <span className="text-orange-accent"> TECH</span>
            </div>
            <p className="text-top-bar-foreground/80 mb-6 leading-relaxed">
              Unlocking digital dimensions through PLM Excellence. Specializing in Siemens Teamcenter 
              implementations, migrations, and integrations.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-accent/20 hover:bg-blue-accent rounded-full p-3 cursor-pointer transition-colors">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-top-bar-foreground/80 hover:text-blue-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-top-bar-foreground/80 hover:text-blue-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-top-bar-foreground/80 hover:text-blue-accent transition-colors">Services</a></li>
              <li><a href="#team" className="text-top-bar-foreground/80 hover:text-blue-accent transition-colors">Career</a></li>
              <li><a href="#contact" className="text-top-bar-foreground/80 hover:text-blue-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">PLM Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-top-bar-foreground/80 hover:text-blue-accent transition-colors">Teamcenter Implementation</a></li>
              <li><a href="#" className="text-top-bar-foreground/80 hover:text-blue-accent transition-colors">Migration & Upgrade</a></li>
              <li><a href="#" className="text-top-bar-foreground/80 hover:text-blue-accent transition-colors">System Integration</a></li>
              <li><a href="#" className="text-top-bar-foreground/80 hover:text-blue-accent transition-colors">PLM Consulting</a></li>
              <li><a href="#" className="text-top-bar-foreground/80 hover:text-blue-accent transition-colors">Training & Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-accent mt-1 flex-shrink-0" />
                <span className="text-top-bar-foreground/80">
                  Kungsängen,<br />
                  Stockholm County,<br />
                  Sweden
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-accent flex-shrink-0" />
                <span className="text-top-bar-foreground/80">+46 70 478 59 40</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-accent flex-shrink-0" />
                <span className="text-top-bar-foreground/80">info@predimtech.com</span>
              </li>
            </ul>
            
            {/* WhatsApp CTA */}
            <div className="mt-6">
              <a 
                href="https://wa.me/46704785940" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-top-bar-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-top-bar-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 PREDiM TECH. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-top-bar-foreground/60 hover:text-blue-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-top-bar-foreground/60 hover:text-blue-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-top-bar-foreground/60 hover:text-blue-accent transition-colors">PLM Resources</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;