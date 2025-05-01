"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; 

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionElement = sectionRef.current; // Store the current ref value in a variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
  
    if (sectionElement) {
      observer.observe(sectionElement);
    }
  
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement); // Use the stable variable here
      }
    };
  }, []);  

  // Track mouse position for parallax effect
  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) - 0.5;
    const y = ((e.clientY - rect.top) / rect.height) - 0.5;
    
    setMousePosition({ x, y });
  };

  const testimonials = [
    {
      id: 1,
      name: "Satria Ardan Wicaksono",
      role: "Software Engineer",
      quote: "Mozatto's potato cheese bread changed my perspective on what bread can be. The crispy exterior gives way to a pillowy interior with pockets of melted cheese that's simply divine.",
      rating: 5,
      imageSrc: "/testimonialsectionimages/satriaardan.jpg",
      socialHandle: "@satriardann",
      location: "Jakarta, Indonesia"
    },
    {
      id: 2,
      name: "Elcarvyna Zahir",
      role: "Active Student",
      quote: "As someone who's sampled bread worldwide, I can confidently say Mozatto's potato cheese bread stands among the best. Its complex flavor profile and perfect texture make it exceptional.",
      rating: 5,
      imageSrc: "/testimonialsectionimages/elcarvy.png",
      socialHandle: "@elcarvy_",
      location: "Jakarta, Indonesia"
    },
    {
      id: 3,
      name: "Sintia Pratiwi",
      role: "Active Student",
      quote: "My family fights over the last piece of Mozatto's potato cheese bread! The subtle herb notes and the way the cheese creates these pockets of flavor is absolutely incredible.",
      rating: 5,
      imageSrc: "/testimonialsectionimages/sintia.png",
      socialHandle: "@sinprtw_",
      location: "Jawa Barat, Indonesia"
    },
    {
      id: 4,
      name: "Adrian Firmansyah",
      role: "Active Student",
      quote: "Studying baking techniques, I'm amazed by Mozatto's potato cheese bread. The hydration level and fermentation are perfectly balanced, creating an unmatched texture and flavor.",
      rating: 5,
      imageSrc: "/testimonialsectionimages/adrian.png",
      socialHandle: "@adri.frmn",
      location: "Jakarta, Indonesia"
    },
    {
      id: 5,
      name: "Najla Aristy",
      role: "Manufacturing Associate",
      quote: "In a world of ordinary breads, Mozatto's potato cheese creation stands as an artisanal masterpiece. The umami notes from the potato combined with premium cheese creates a symphony of flavors.",
      rating: 5,
      imageSrc: "/testimonialsectionimages/najla.png",
      socialHandle: "@najlaristy",
      location: "Jawa Barat, Indonesia"
    }
  ];

  // Auto-rotate testimonials when not hovering
  useEffect(() => {
    if (isHovering || !isInView) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovering, isInView, testimonials.length]); // Add testimonials.length to the dependency array  


  // Calculate transformations for 3D carousel effect
  const calculateCardStyle = (index: number) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    let transform = '';
    let opacity = 0;
    let zIndex = 0;
    
    if (diff === 0) {
      // Active card
      transform = 'translateX(0) scale(1)';
      opacity = 1;
      zIndex = 3;
    } else if (diff === 1 || diff === testimonials.length - 1) {
      // Cards to the sides
      const direction = diff === 1 ? 1 : -1;
      transform = `translateX(${direction * 70}%) scale(0.85)`;
      opacity = 0.7;
      zIndex = 2;
    } else {
      // Further cards
      const direction = diff < testimonials.length / 2 ? 1 : -1;
      transform = `translateX(${direction * 120}%) scale(0.7)`;
      opacity = 0.4;
      zIndex = 1;
    }
    
    // Add parallax effect based on mouse position when hovering
    if (isHovering && diff === 0) {
      const moveX = mousePosition.x * 15; // Adjust multiplier for effect strength
      const moveY = mousePosition.y * 10;
      const rotateX = -mousePosition.y * 10; // Invert for natural feeling
      const rotateY = mousePosition.x * 10;
      
      transform += ` translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
    
    return {
      transform,
      opacity,
      zIndex,
      transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
    };
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Floating bread icons */}
        <div className={`absolute top-1/4 left-1/5 text-amber-300 opacity-30 transition-all duration-1000 ${isInView ? 'translate-y-0' : 'translate-y-20'}`}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </div>
        <div className={`absolute bottom-1/4 right-1/5 text-amber-300 opacity-30 transition-all duration-1000 delay-500 ${isInView ? 'translate-y-0' : 'translate-y-20'}`}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section heading with animated elements */}
        <div className="relative text-center mb-20">
        <h2
            className={`
                text-3xl md:text-5xl font-bold text-amber-900 mb-4 
                transition-all duration-1000 
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}
            `}
            >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400 drop-shadow-md font-extrabold">Customers</span> Say
            </h2>
          <div className={`flex items-center justify-center mb-6 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-12 bg-amber-400"></div>
            <div className="px-4">
              <span className="inline-block text-amber-600 text-lg font-medium">Real Stories from Potato Cheese Bread Lovers</span>
            </div>
            <div className="h-px w-12 bg-amber-400"></div>
          </div>
          
          <p className={`max-w-xl mx-auto text-amber-700 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Discover why our potato cheese bread has created a community of passionate fans who can&apos;t get enough of our signature creation.
          </p>
        </div>
        
        {/* 3D Carousel Testimonial Display */}
        <div className="relative h-96 md:h-120 mb-16 perspective-1000">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-amber-200/30 to-transparent rounded-full blur-2xl max-w-4xl mx-auto"></div>
          
          {/* Testimonial cards with 3D rotation */}
          <div className="relative h-full max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={el => { cardRefs.current[index] = el; }}
                className="absolute top-0 left-0 right-0 mx-auto w-full max-w-md cursor-pointer"
                style={calculateCardStyle(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="bg-white rounded-2xl shadow-2xl z-20 overflow-hidden border border-amber-200 h-full transform transition-transform hover:scale-102">
                  {/* Card Header with image and glow effect */}
                  <div className="relative h-32 bg-gradient-to-r from-amber-400 to-amber-300 p-6 overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-white opacity-20 rounded-full"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-amber-200 opacity-30 rounded-full"></div>
                    
                    <div className="absolute bottom-0 right-6 transform translate-y-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-amber-200 blur-md opacity-20 scale-110"></div>
                        <Image 
                          src={testimonial.imageSrc} 
                          alt={testimonial.name}
                          width={200}
                          height={300}
                          className="w-20 h-20 rounded-full border-4 border-white -mt-24 object-cover shadow-lg z-50"
                        />
                      </div>
                    </div>
                    
                    {/* Quotation mark */}
                    <div className="absolute top-4 left-4 text-amber-100 opacity-50">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162C3.249 8.318 3.05 8.779 2.9 9.233c-.136.474-.273.926-.313 1.396-.034.522-.005 1.034.076 1.506.125.557.257 1.125.519 1.596.335.621.762 1.191 1.413 1.612.708.401 1.636.651 2.568.612.817.003 1.641-.223 2.256-.765.613-.511 1.031-1.257 1.093-2.112.045-.534-.08-1.081-.377-1.561C9.833 10.136 9.219 10 8.69 10H6.5zm9.5 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L19.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.242.408-.44.869-.59 1.323-.136.474-.273.926-.313 1.396-.034.522-.005 1.034.076 1.506.125.557.257 1.125.519 1.596.335.621.762 1.191 1.413 1.612.708.401 1.636.651 2.568.612.817.003 1.641-.223 2.256-.765.613-.511 1.031-1.257 1.093-2.112.045-.534-.08-1.081-.377-1.561C19.833 10.136 19.219 10 18.69 10H16.5z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-6 pt-12 z-10">
                    <div className="mb-4 z-10">
                      {/* Star Rating */}
                      <div className="flex mb-2 z-10">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <p className="text-amber-800 italic text-lg leading-relaxed mb-6">{testimonial.quote}</p>
                      
                      {/* Author */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                          <div className="flex items-center text-amber-600 text-sm">
                            <span>{testimonial.role}</span>
                            <span className="mx-2">•</span>
                            <span>{testimonial.location}</span>
                          </div>
                        </div>
                        
                        <div className="text-amber-500 text-sm font-medium">
                          {testimonial.socialHandle}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-amber-600 w-8' 
                  : 'bg-amber-300 hover:bg-amber-400'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h3 className="text-2xl font-bold text-amber-800 mb-4">Ready to Experience the Mozatto Difference?</h3>
          <p className="text-amber-700 mb-6 max-w-2xl mx-auto">Join thousands of satisfied customers who&apos;ve made our potato cheese bread part of their daily lives.</p>
          
          <a href="/contact-us" className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            Try Our Potato Cheese Bread Today
          </a>
        </div>
      </div>
      
      {/* Animations */}
      <style jsx>{`
        
        .animate-blob {
          animation: blob 15s infinite alternate;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}