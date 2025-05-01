"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Star, Coffee, ShoppingBag, Award } from 'lucide-react';
import Image from 'next/image';

export default function MozattoHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Simulate image gallery with placeholder colors
  const productGallery = [
    { color: 'bg-amber-100', angle: 'rotate-2', src: '/herosectionimages/cisbretcoklat.png' },
    { color: 'bg-amber-200', angle: '-rotate-2', src: '/herosectionimages/cisbrettiramisu.png' },
    { color: 'bg-amber-300', angle: 'rotate-3', src: '/herosectionimages/cisbretoriginal.png' },
  ];
  
  useEffect(() => {
    setIsVisible(true);
  
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % productGallery.length);
    }, 3000);
  
    return () => clearInterval(intervalId);
  }, [productGallery.length]);
  
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-t from-amber-50 via-amber-100 to-amber-50 z-10">
      {/* Animated wave background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
      </div>

      
      {/* Diagonal decorative line */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-0 left-0 w-1 h-full bg-amber-800 transform -rotate-45 origin-top-left"></div>
        <div className="absolute top-0 left-16 w-1 h-full bg-amber-800 transform -rotate-45 origin-top-left"></div>
        <div className="absolute top-0 left-32 w-1 h-full bg-amber-800 transform -rotate-45 origin-top-left"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto md:mt-0 top-15 md:top-0 py-7 md:py-26 px-4 h-full flex flex-col md:flex-row items-center justify-center relative z-10" style={{ fontFamily: "'poppins', sans-serif" }}>
        {/* Left side - Text content */}
        <div className={`w-full md:w-1/2 space-y-6 mb-12 md:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-amber-100 to-amber-200 px-4 py-2 rounded-full shadow-md">
            <p className="text-amber-800 font-medium text-sm tracking-wider flex items-center">
              <Award className="w-4 h-4 mr-2" />
              PREMIUM QUALITY
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-amber-900 leading-tight">
            Potato 
            <span className="relative inline-block text-amber-800 mx-2 animated-text">
              Cheese
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-amber-500 rounded-full"></span>
            </span> 
            <br />
            <span className="relative inline-block">
            Bread
            <svg
              className="absolute -bottom-4 left-0 w-full h-4 pointer-events-none"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,8 Q100,0 200,8"
                fill="none"
                stroke="#d97706"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-[cursive] text-xl ml-2 text-amber-800">
              by Mozatto
            </span>
          </span>
          </h1>
            <p className="mt-8 text-lg text-amber-700 max-w-xl">
              Made with the finest ingredients, each bite delivers a luxurious taste experience.
            </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <div className="flex items-center text-amber-600 text-sm">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="ml-2">4.9/5 (2.8k reviews)</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/contact-us" className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-4 rounded-lg flex items-center justify-center group hover:from-amber-800 hover:to-amber-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Order Now
              <ShoppingBag className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/product" className="bg-white bg-opacity-80 backdrop-blur-sm border-2 border-amber-700 text-amber-800 px-8 py-4 rounded-lg flex items-center justify-center group hover:bg-amber-50 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Our Menu
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="flex items-center gap-6 pt-6">
            <div className="flex -space-x-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-12 h-12 rounded-full border-2 border-white ${i % 2 === 0 ? 'bg-amber-200' : 'bg-amber-100'} flex items-center justify-center overflow-hidden shadow-md`}>
                  <span className="text-xs font-medium text-amber-800">{(i + 1) * 2}k+</span>
                </div>
              ))}
            </div>
            <p className="text-amber-700 text-sm">
              <span className="font-semibold">10,000+</span> pelanggan puas dengan produk kami
            </p>
          </div>
          
          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            {[
              { icon: <Coffee className="w-4 h-4" />, label: 'Freshly Baked' },
              { icon: <Star className="w-4 h-4" />, label: 'Premium Cheese' },
              { icon: <Award className="w-4 h-4" />, label: 'Best Seller' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 bg-yellow-50 text-yellow-900 text-sm font-medium rounded-full shadow-sm hover:bg-yellow-100 transition duration-200"
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right side - Product images */}
        <div className={`w-full md:w-1/2 relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Main center product image */}
          <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-100 to-amber-300 shadow-2xl flex items-center justify-center z-20 glow-effect">
              <div className="w-4/5 h-4/5 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 font-bold text-lg relative overflow-hidden">
                <Image
                  src="/herosectionimages/herosectionmozatto.png"
                  alt="Mozatto Product"
                  fill
                  className="object-contain z-10"
                />
                {/* Cheese dripping effect */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-48 z-30">
                  <div className="cheese-drip"></div>
                  <div className="cheese-drip" style={{left: '35%', animationDelay: '0.5s'}}></div>
                  <div className="cheese-drip" style={{left: '65%', animationDelay: '0.3s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Floating bread decoration */}
            <div className="absolute top-0 -right-8 z-10 transform -rotate-12 animate-float">
              <div className="w-16 h-16 rounded-full bg-amber-200 shadow-lg flex items-center justify-center">
                <span className="text-2xl">🍞</span>
              </div>
            </div>
            
            {/* Floating cheese decoration */}
            <div className="absolute -bottom-15 left-13 z-10 transform rotate-12 animate-float-delay">
              <div className="w-16 h-16 rounded-full bg-amber-100 shadow-lg flex items-center justify-center">
                <span className="text-2xl">🧀</span>
              </div>
            </div>
            
            {/* Floating potato decoration */}
            <div className="absolute top-1/2 -left-20 z-10 transform -rotate-6 animate-float-slow">
              <div className="w-14 h-14 rounded-full bg-amber-100 shadow-lg flex items-center justify-center">
                <span className="text-2xl">🥔</span>
              </div>
            </div>
          </div>
          
          {/* Photo dump floating images */}
          <div className="absolute top-19 -right-2 z-30 transform rotate-6 shadow-xl hover:rotate-0 transition-all hover:scale-110 animate-float-slow">
            <div className={`w-25 h-19 md:w-45 md:h-32 rounded-lg overflow-hidden border-4 border-white ${productGallery[0].color}`}>
              <Image
                src="/herosectionimages/cisbretoriv3.png"
                alt="Photo 1"
                fill
                className="object-fill"
              />
            </div>
          </div>

          <div className="absolute bottom-[-2rem] -right-1 z-30 transform -rotate-6 shadow-xl hover:rotate-0 transition-all hover:scale-110 animate-float-slow">
            <div className={`w-29 h-21 md:w-45 md:h-35 rounded-lg overflow-hidden border-4 border-white ${productGallery[1].color}`}>
              <Image
                src="/herosectionimages/cisbrettiramisuv3.png"
                alt="Photo 2"
                fill
                className="object-fill"
              />
            </div>
          </div>

          <div className="absolute -bottom-4 left-2 z-30 transform rotate-3 shadow-xl hover:rotate-0 transition-all hover:scale-110 animate-float-slow">
            <div className={`w-29 h-21 md:w-44 md:h-32 rounded-lg overflow-hidden border-4 border-white ${productGallery[2].color}`}>
              <Image
                src="/herosectionimages/cisbretcoklatv3.png"
                alt="Photo 3"
                fill
                className="object-fill"
              />
            </div>
          </div>

          
          {/* Image gallery - animated */}
          <div className="absolute -top-6 left-0 z-30 transform rotate-6 shadow-xl transition-all animate-float-slow">
          {productGallery.map((item, index) => (
            <div 
              key={index} 
              className={`w-18 h-18 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-white shadow-xl absolute transition-all duration-500 ${item.color} ${item.angle}`}
              style={{
                opacity: currentImageIndex === index ? 1 : 0,
                transform: currentImageIndex === index ? 'scale(1.1)' : 'scale(0.9)',
                zIndex: currentImageIndex === index ? 40 : 30
              }}
            >
              <Image
                src={item.src}
                alt={`Foto ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
          </div>
        </div>
      </div>
      <style jsx>{`

      @keyframes float-random {
        0% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-15px) translateX(10px); }
        50% { transform: translateY(-5px) translateX(-10px); }
        75% { transform: translateY(10px) translateX(5px); }
        100% { transform: translateY(0) translateX(0); }
      }

      .animate-float {
        animation: float 4s ease-in-out infinite;
        will-change: transform;
      }

      .animate-float-delay {
        animation: float 4s ease-in-out 1s infinite;
        will-change: transform;
      }

      .animate-float-slow {
        animation: float 6s ease-in-out 0.5s infinite;
        will-change: transform;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(-12deg); }
        50% { transform: translateY(-15px) rotate(-8deg); }
      }

      .animate-pulse-slow {
        animation: pulse-slow 3s infinite;
        will-change: transform;
      }

      @keyframes pulse-slow {
        0%, 100% { transform: scale(1) rotate(12deg); }
        50% { transform: scale(1.1) rotate(14deg); }
      }

      .animate-spin-slow {
        animation: spin 12s linear infinite;
        will-change: transform;
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .glow-effect {
        box-shadow: 0 0 50px 5px rgba(251, 191, 36, 0.4);
        animation: glow 3s infinite;
        will-change: box-shadow;
        transform: translateZ(0);
        backface-visibility: hidden;
      }

      @keyframes glow {
        0%, 100% { box-shadow: 0 0 30px 5px rgba(251, 191, 36, 0.4); }
        50% { box-shadow: 0 0 50px 15px rgba(251, 191, 36, 0.6); }
      }

      .cheese-drip {
        position: absolute;
        top: 0;
        left: 50%;
        width: 12px;
        height: 60px;
        background: linear-gradient(to bottom, #fbbf24, #f59e0b);
        border-radius: 0 0 6px 6px;
        transform: translateX(-50%);
        animation: drip 3s infinite;
        will-change: height, opacity;
      }

      @keyframes drip {
        0% { height: 0; opacity: 0; }
        20% { height: 0; opacity: 0; }
        30% { height: 20px; opacity: 1; }
        70% { height: 60px; opacity: 1; }
        100% { height: 60px; opacity: 0; }
      }

      /* ⚙️ Accessibility: Hemat baterai dan motion sensitif */
      @media (prefers-reduced-motion: reduce) {
        .wave, .particle, .glow-effect, .animated-text,
        .animate-float, .animate-float-delay, .animate-float-slow,
        .animate-spin-slow, .cheese-drip, .animate-pulse-slow {
          animation: none !important;
          transition: none !important;
        }
      }
    `}</style>
    </div>
  );
}