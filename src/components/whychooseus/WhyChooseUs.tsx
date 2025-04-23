"use client";

import { useState, useEffect, useRef } from 'react';
import { ChefHat, Award, Shield, Clock, Sparkles, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Auto-rotate through cards
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isInView]);
  
  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <ChefHat className="text-amber-700" size={28} />,
      title: "Artisanal Excellence",
      description: "Our potato cheese bread is crafted by master bakers with decades of experience, using traditional European techniques passed down through generations.",
      imageSrc: "/whychooseussectionimages/artisanalcisbret.png",
      imageAlt: "Chef preparing artisanal potato cheese bread"
    },
    {
      icon: <Award className="text-amber-700" size={28} />,
      title: "Award-Winning Recipe",
      description: "Our signature recipe has won multiple culinary awards for its perfect balance of savory potato, premium cheese, and our secret blend of herbs.",
      imageSrc: "/whychooseussectionimages/cisbretoriginal.png",
      imageAlt: "Award-winning potato cheese bread"
    },
    {
      icon: <Shield className="text-amber-700" size={28} />,
      title: "Premium Ingredients",
      description: "We source only the finest Idaho potatoes and artisanal cheese from small-batch producers who share our commitment to quality and sustainability.",
      imageSrc: "/whychooseussectionimages/premiumingredients.png",
      imageAlt: "Premium ingredients for potato cheese bread"
    },
    {
      icon: <Clock className="text-amber-700" size={28} />,
      title: "Fresh Daily",
      description: "Every loaf is baked fresh throughout the day, ensuring you always experience our bread at the peak of its flavor and texture.",
      imageSrc: "/api/placeholder/600/400",
      imageAlt: "Freshly baked potato cheese bread"
    },
    {
      icon: <Star className="text-amber-700" size={28} />,
      title: "Customer Favorite",
      description: "Join thousands of loyal customers who make our potato cheese bread a part of their daily ritual. One taste and you'll understand why.",
      imageSrc: "/api/placeholder/600/400",
      imageAlt: "Happy customers enjoying potato cheese bread"
    }
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 bg-amber-50">
      {/* Background Design Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-amber-200 opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 -right-12 w-40 h-40 rounded-full bg-amber-300 opacity-20 blur-lg"></div>
        <div className="absolute -bottom-20 left-1/3 w-52 h-52 rounded-full bg-amber-100 opacity-25 blur-xl"></div>
        
        {/* Decorative patterns */}
        <div className="absolute top-10 right-10 text-amber-200 opacity-20">
          <svg width="120" height="120" viewBox="0 0 24 24" className="transform rotate-12">
            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 text-amber-200 opacity-20">
          <svg width="80" height="80" viewBox="0 0 24 24" className="transform -rotate-6">
            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading with animated underline */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-amber-900 mb-4 relative">
            Why Choose Mozatto
            <span className={`absolute bottom-0 left-0 w-full h-1 bg-amber-500 ${isInView ? 'animate-expand-from-center' : ''}`}
                  style={{animation: isInView ? 'expandFromCenter 1.5s ease forwards' : ''}}></span>
          </h2>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto">
            We elevate the humble potato bread to a gourmet experience that captivates your taste buds
          </p>
        </div>

        {/* Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mb-16">
          {/* Features Navigation */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className={`cursor-pointer transition-all duration-500 p-4 rounded-lg ${
                    activeCard === idx 
                      ? 'bg-gradient-to-r from-amber-200 to-amber-100 shadow-lg transform translate-x-2' 
                      : 'bg-amber-50 hover:bg-amber-100'
                  }`}
                  onClick={() => setActiveCard(idx)}
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 p-2 rounded-full ${
                      activeCard === idx ? 'bg-amber-100 text-amber-900' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        activeCard === idx ? 'text-amber-900' : 'text-amber-700'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`mt-1 text-sm transition-colors duration-300 ${
                        activeCard === idx ? 'text-amber-800' : 'text-amber-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Image Display */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative h-80 md:h-96 lg:h-full min-h-80 rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    activeCard === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img 
                    src={feature.imageSrc} 
                    alt={feature.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <div className="w-12 h-1 bg-amber-300 my-2"></div>
                      <p className="text-amber-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial or Call to Action */}
        <div className={`bg-amber-100 rounded-xl p-8 lg:p-12 shadow-lg border border-amber-200 relative overflow-hidden transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-amber-200 opacity-50"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-amber-300 opacity-30"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500 rounded-lg transform rotate-3"></div>
                <img 
                  src="/api/placeholder/500/300" 
                  alt="Our signature potato cheese bread" 
                  className="relative z-10 rounded-lg shadow-lg border-4 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-800 text-white rounded-full p-4 shadow-lg border-2 border-white">
                  <Sparkles size={24} />
                </div>
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">Experience the Mozatto Difference</h3>
              <p className="text-amber-800 mb-6">Our passion for perfect potato cheese bread is evident in every bite. We invite you to taste the difference that premium ingredients, artisanal craftsmanship, and a genuine love for baking can make.</p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-700 hover:bg-amber-800 text-white rounded-full px-6 py-3 shadow-lg transition-all hover:shadow-xl hover:translate-y-px flex items-center gap-2">
                  <span>Order Now</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                
                <button className="bg-white hover:bg-amber-50 text-amber-700 border border-amber-300 rounded-full px-6 py-3 shadow-lg transition-all hover:shadow-xl hover:translate-y-px">
                  Learn Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes expandFromCenter {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        .animate-expand-from-center {
          animation: expandFromCenter 1.5s ease forwards;
          transform-origin: center;
        }
      `}</style>
    </section>
  );
}