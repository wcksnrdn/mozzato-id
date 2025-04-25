"use client";

import { useState, useRef } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, MapPin, Phone, Mail, ExternalLink, ChevronUp } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'error' | 'success' | null>(null);
  const footerRef = useRef(null);
  
  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSubscribeStatus('error');
      return;
    }
    
    // Simulate subscription success
    setSubscribeStatus('success');
    setEmail('');
    
    // Reset status after 3 seconds
    setTimeout(() => {
      setSubscribeStatus(null);
    }, 3000);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer ref={footerRef} className="bg-gradient-to-b from-amber-700 to-amber-900 text-amber-100 relative overflow-hidden" style={{ fontFamily: "'poppins', sans-serif" }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200">
            <path fill="currentColor" d="M46.5,-78.1C59.8,-71.6,69.9,-58.6,75.9,-44.4C81.9,-30.3,83.8,-15.1,83.2,-0.3C82.7,14.4,79.8,28.8,72.7,41.2C65.6,53.5,54.4,63.8,41.4,70.8C28.5,77.7,14.2,81.4,-0.7,82.5C-15.6,83.6,-31.2,82.2,-44.6,75.8C-58,69.3,-69.2,57.9,-76.1,44.3C-83,30.7,-85.5,15.3,-84.4,0.6C-83.3,-14.1,-78.6,-28.3,-70.8,-41.3C-63,-54.3,-52.1,-66.2,-39.1,-73C-26.1,-79.9,-13,-81.6,1.3,-83.9C15.6,-86.1,31.2,-89,46.5,-78.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 opacity-10">
          <svg width="300" height="300" viewBox="0 0 200 200">
            <path fill="currentColor" d="M32.6,-54.1C45.3,-49.1,60.5,-44.9,65.8,-35.2C71.1,-25.4,66.4,-10.2,63.2,3.7C60,17.7,58.2,30.3,51.6,39C45,47.7,33.5,52.3,21.9,55.9C10.3,59.5,-1.4,62,-13.5,61.5C-25.6,61,-38.1,57.5,-47.4,49.7C-56.8,42,-62.9,30.1,-65.8,17.5C-68.7,4.8,-68.4,-8.5,-63.9,-19.8C-59.4,-31.1,-50.7,-40.3,-40.4,-46.6C-30.1,-52.9,-18.3,-56.2,-6.4,-57.2C5.5,-58.2,11.1,-56.8,16.4,-53.5C21.7,-50.2,27,-59.1,32.6,-54.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Top section with logo and newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 relative z-10">
          {/* Logo and tagline */}
          <div className="max-w-sm">
            <div className="mb-6">
              <span className="text-3xl font-bold text-amber-200">MOZATTO</span>
              <div className="h-1 w-12 bg-amber-500 mt-2"></div>
            </div>
            <p className="mb-6 text-amber-200/80 leading-relaxed">
              Crafting the perfect potato cheese bread since 1985. Our artisanal bread combines the finest ingredients with traditional baking techniques for an unforgettable experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Newsletter signup */}
          <div className="lg:w-96">
            <h3 className="text-xl font-semibold text-amber-100 mb-4">Join our Bread Lovers Club</h3>
            <p className="text-amber-200/80 mb-6">
              Subscribe to get special offers, free giveaways, and bread-making tips straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-amber-800/50 border ${
                  subscribeStatus === 'error' ? 'border-red-400' : 'border-amber-700'
                } rounded-full py-3 px-5 text-amber-100 placeholder-amber-400/70 focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-amber-600 hover:bg-amber-500 text-white rounded-full px-5 transition-colors flex items-center"
              >
                <span className="mr-1">Subscribe</span>
                <ArrowRight size={16} />
              </button>
            </form>
            
            {/* Subscription status messages */}
            {subscribeStatus === 'success' && (
              <div className="mt-2 text-green-300 text-sm flex items-center">
                <span className="mr-1">✓</span> Thank you for subscribing!
              </div>
            )}
            {subscribeStatus === 'error' && (
              <div className="mt-2 text-red-300 text-sm flex items-center">
                <span className="mr-1">✗</span> Please enter a valid email
              </div>
            )}
          </div>
        </div>
        
        {/* Middle section with links and info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-amber-800/50">
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Original Potato Cheese</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Garlic & Herb</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Jalapeno Cheddar</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Rosemary Olive</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Gift Boxes</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Monthly Subscription</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">About Us</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Our Story</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Blog</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Press</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Careers</a></li>
              <li>
                <a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors flex items-center">
                  Wholesale <ExternalLink size={12} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-amber-200 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-amber-400 shrink-0 mt-1" />
                <span className="text-amber-200/70">123 Bakery Lane, Bread District, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-amber-400 shrink-0" />
                <a href="tel:+14155552671" className="text-amber-200/70 hover:text-amber-200 transition-colors">
                  (415) 555-2671
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-amber-400 shrink-0" />
                <a href="mailto:hello@mozatto.com" className="text-amber-200/70 hover:text-amber-200 transition-colors">
                  hello@mozatto.com
                </a>
              </li>
            </ul>
            
            {/* Store hours */}
            <div className="mt-6 p-4 bg-amber-800/30 rounded-lg">
              <h5 className="font-medium text-amber-100 mb-2">Store Hours</h5>
              <div className="text-sm">
                <div className="flex justify-between text-amber-200/70">
                  <span>Monday - Friday</span>
                  <span>7am - 7pm</span>
                </div>
                <div className="flex justify-between text-amber-200/70">
                  <span>Saturday</span>
                  <span>8am - 8pm</span>
                </div>
                <div className="flex justify-between text-amber-200/70">
                  <span>Sunday</span>
                  <span>8am - 6pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-amber-200/60 text-sm">
            © {currentYear} Mozatto Bakery. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-amber-200/60">
            <a href="#" className="hover:text-amber-200 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Cookies</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Accessibility</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Sitemap</a>
          </div>
          
          <div className="text-amber-200/60 text-sm flex items-center">
            <span>Made with</span>
            <span className="mx-1 text-amber-500">♥</span>
            <span>in San Francisco</span>
          </div>
        </div>
      </div>
    </footer>
  );
}