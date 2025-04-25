"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';

export default function FeaturedProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Classic Potato Cheese Bread",
      description: "Roti kentang original dengan keju premium yang lembut dan gurih",
      price: "Rp 13.000",
      rating: 5,
      image: "/featuredsectionimages/cisbretoriginal.png",
      badge: "Classic"
    },
    {
      id: 2,
      name: "Tiramisu Potato Cheese Bread",
      description: "Diperkaya dengan 3 jenis keju premium untuk pengalaman yang tak terlupakan",
      price: "Rp 13.000",
      rating: 4.9,
      image: "/featuredsectionimages/cisbrettiramisu.png",
      badge: "New"
    },
    {
      id: 3,
      name: "Sweet Potato Deluxe",
      description: "Paduan sempurna antara ubi ungu dan keju yang lembut di setiap gigitan",
      price: "Rp 30.000",
      rating: 4.8,
      image: "bg-amber-300",
      badge: null
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    // Observe the container element
    const container = document.getElementById('featured-products-section');
    if (container) observer.observe(container);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="featured-products-section" className="relative py-20 overflow-hidden bg-gradient-to-t from-amber-50 via-amber-100 to-amber-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Decorative circles */}
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-amber-100 opacity-50"></div>
        <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-amber-200 opacity-40"></div>
        
        {/* Diagonal pattern */}
        <div className="absolute top-0 right-10 h-full w-1/3 opacity-10 diagonal-lines"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-block bg-amber-100 px-4 py-2 rounded-full mb-4">
            <p className="text-amber-800 font-medium text-sm tracking-wider">OUR SPECIALTY</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Featured Products</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Discover our handcrafted potato cheese bread collection. Made with premium ingredients and baked with love daily.
          </p>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                {product.image.startsWith("/") ? (
                    <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    />
                ) : (
                    <div
                    className={`w-full h-full ${product.image} flex items-center justify-center text-amber-800 font-bold`}
                    >
                    Product Image
                    </div>
                )}
                
                {/* Price tag */}
                <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-md">
                  <p className="font-bold text-amber-800">{product.price}</p>
                </div>
                
                {/* Badge if exists */}
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-amber-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {product.badge}
                  </div>
                )}
              </div>
              
              {/* Product details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{product.name}</h3>
                <p className="text-amber-700 text-sm mb-4">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-amber-700">{product.rating}</span>
                </div>
                
                {/* Button */}
                <a href="/products" className="inline-flex items-center text-amber-800 font-medium text-sm hover:text-amber-600 transition-colors group">
                  View Details
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Products button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <a 
            href="/products" 
            className="inline-flex items-center px-8 py-4 bg-amber-100 text-amber-800 rounded-lg font-medium hover:bg-amber-200 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Custom styles */}
      <style jsx>{`
        .diagonal-lines {
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(146, 64, 14, 0.1),
            rgba(146, 64, 14, 0.1) 1px,
            transparent 1px,
            transparent 16px
          );
        }
      `}</style>
    </section>
  );
}