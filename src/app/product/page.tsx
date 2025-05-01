"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Sandwich, Pizza, ChevronRight, ShoppingBag, 
  Clock, Flame, Star, Lock, Heart,
  Sparkles, Award, Cookie, Utensils, Info
} from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Head from 'next/head';
import Footer from '@/components/footer/Footer';

export default function ProductPage() {
  // Product data
  const products = [
    {
      id: 1,
      name: "Classic Potato Cheese Bread",
      description: "A delightful combination of premium potatoes and smooth cheddar cheese, baked to a perfect golden brown. The crispy exterior and soft, fluffy interior create a harmonious flavor that’s simply unforgettable.",
      price: "Rp 13,000",
      ingredients: ["Premium Potatoes", "Cheddar Cheese", "Wheat Flour", "High-Quality Butter", "Salt", "Yeast"],
      image: "/productpageimages/cisbretoriginal.png",
      rating: 4.9,
      featured: true,
      reviews: 128,
      bestseller: false
    },    
    {
      id: 2,
      name: "Chocolate Potato Cheese Bread",
      description: "A unique blend of premium potatoes, smooth mozzarella cheese, and a hint of chocolate sweetness, all baked together for a deliciously surprising treat. The perfect balance of savory and sweet in every bite.",
      price: "Rp 13,000",
      ingredients: ["Premium Potatoes", "Mozzarella Cheese", "Chocolate", "Wheat Flour", "Butter", "Salt"],
      image: "/productpageimages/cisbretcoklat2.png",
      rating: 4.9,
      reviews: 94,
      newItem: false,
      bestseller: true
    },    
    {
      id: 3,
      name: "Tiramissu Potato Cheese Bread",
      description: "A savory delight featuring a rich blend of roasted garlic and three types of premium cheeses. The combination of smooth mozzarella, sharp parmesan, and creamy cheddar, with the hint of garlic, creates a deep and complex flavor experience.",
      price: "Rp 13,000",
      ingredients: ["Premium Potatoes", "Cheddar Cheese", "Mozzarella Cheese", "Parmesan Cheese", "Roasted Garlic", "Wheat Flour", "Butter", "Salt"],
      image: "/productpageimages/cisbrettiramisu.png",
      rating: 4.9,
      reviews: 156,
      popular: true
    },    
    {
      id: 4,
      name: "Secret Recipe",
      description: "Mozatto's latest secret innovation! A delicious new twist on the potato cheese bread, coming soon with an exciting blend of flavors. Stay tuned for the delicious surprise!",
      price: "Coming Soon",
      ingredients: ["To Be Revealed", "To Be Revealed", "To Be Revealed", "To Be Revealed", "To Be Revealed"],
      image: "/api/placeholder/500/400",
      isSecret: true
    }    
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [activeSection, setActiveSection] = useState('ingredients');
  const productSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.title = `Mozatto - Product | ${selectedProduct.name}`;
  }, [selectedProduct]);


  useEffect(() => {
    
    // Add intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const scrollToProducts = () => {
    productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.2 }
    }
  };

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <>
    <Head>
        <title>Mozatto | {selectedProduct.name}</title>
        <meta name="description" content={selectedProduct.description} />
        <meta property="og:title" content={`Mozatto | ${selectedProduct.name}`} />
        <meta property="og:description" content={selectedProduct.description} />
        <meta name="twitter:title" content={`Mozatto | ${selectedProduct.name}`} />
        <meta name="twitter:description" content={selectedProduct.description} />
      </Head>
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden" style={{ fontFamily: "'poppins', sans-serif" }}>
        <Navbar />
      {/* Decorative background elements */}
      <motion.div 
        animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1, repeatType: "reverse" }
          }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-200 opacity-30 blur-xl"
      ></motion.div>
      <motion.div 
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1, repeatType: "reverse" }
        }}
        className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-amber-300 opacity-20 blur-xl"
      ></motion.div>
      <motion.div 
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 2, repeatType: "reverse" }
        }}
        className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-amber-100 opacity-40 blur-lg"
      ></motion.div>
      <motion.div 
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1.5, repeatType: "reverse" }
        }}
        className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-amber-200 opacity-50 blur-md"
      ></motion.div>
      
      {/* Small decorative dots scattered throughout */}
      <div className="absolute top-32 left-1/4 w-3 h-3 rounded-full bg-amber-400 opacity-60"></div>
      <div className="absolute top-1/2 left-1/5 w-2 h-2 rounded-full bg-amber-500 opacity-50"></div>
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-amber-300 opacity-70"></div>
      <div className="absolute top-2/3 right-1/5 w-3 h-3 rounded-full bg-amber-400 opacity-60"></div>
      
      <div className="relative container mx-auto mt-0 md:mt-14 px-4 py-16 lg:py-24 pt-20 lg:pt-16">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20 lg:mb-32"
        >
          {/* Fancy title with decorative elements */}
          <motion.div 
            variants={fadeIn}
            className="relative inline-block mb-6"
          >
            <div className="absolute -top-8 -left-6 w-12 h-12 bg-amber-200 rounded-full opacity-70 hidden md:block"></div>
            <div className="absolute -bottom-4 -right-8 w-16 h-16 bg-amber-300 rounded-full opacity-50 hidden md:block"></div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <h1 className="font-black text-4xl md:text-6xl lg:text-7xl text-amber-800 tracking-tight relative z-10 space-y-2">
                {/* Product */}
                <span className="inline-block relative">
                    <span className="relative z-10">Product</span> 
                    <svg className="absolute left-0 bottom-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" fill="rgba(253, 224, 71, 0.5)" />
                    </svg>
                </span>{" "}

                {/* Potato Cheese Bread */}
                <span className="inline-block relative">
                    <span className="relative z-10 text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700 drop-shadow-md font-extrabold bottom-4">Potato Cheese Bread</span>
                    <svg
                    className="absolute -bottom-1 left-0 w-full h-4 pointer-events-none"
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
                </span>
                </h1>

                <p className="text-2xl md:text-3xl font-bold font-[cursive] text-amber-600 mt-4">
                by <span className="text-amber-800 font-[cursive]">Mozatto</span>
                </p>
            </motion.div>
          </motion.div>
          
          <motion.p 
            variants={textReveal}
            className="text-lg md:text-xl text-amber-700 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Enjoy the deliciousness of our potato cheese bread made with high quality ingredients and an original recipe developed with dedication and passion.
          </motion.p>
          
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 hover:bg-amber-700 cursor-pointer text-white font-bold py-3 px-8 rounded-lg shadow-lg flex items-center justify-center w-full sm:w-auto"
              onClick={scrollToProducts}
            >
              <ShoppingBag size={18} className="mr-2" />
              See The Product
            </motion.button>
            <motion.a
              href="/about-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-amber-600 cursor-pointer text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg shadow-md flex items-center justify-center w-full sm:w-auto"
            >
              <Info size={18} className="mr-2" />
              About Us
            </motion.a>
          </motion.div>
          
          {/* Floating badges */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-amber-100 border border-amber-300 rounded-full px-4 py-2 flex items-center"
            >
              <Award size={16} className="text-amber-600 mr-2" />
              <span className="text-amber-700 font-medium text-sm">Premium Quality</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-amber-100 border border-amber-300 rounded-full px-4 py-2 flex items-center"
            >
              <Sparkles size={16} className="text-amber-600 mr-2" />
              <span className="text-amber-700 font-medium text-sm">100% Handmade</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-amber-100 border border-amber-300 rounded-full px-4 py-2 flex items-center"
            >
              <Cookie size={16} className="text-amber-600 mr-2" />
              <span className="text-amber-700 font-medium text-sm">Fresh Daily</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative mt-16 hidden md:block"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-6 h-6 border-b-2 border-r-2 border-amber-500 rotate-45"></div>
          </motion.div>
        </motion.div>

        {/* Products Showcase */}
        <div ref={productSectionRef}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16 md:mb-32"
          >
            <motion.h2 
              variants={textReveal}
              className="text-3xl md:text-4xl font-bold text-amber-800 text-center mb-3"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700 drop-shadow-md font-extrabold">Signature</span> Products
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="w-24 h-1 bg-amber-500 mx-auto mb-12"
            ></motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className={`bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border border-amber-100 ${
                    selectedProduct.id === product.id ? 'ring-4 ring-amber-500 shadow-xl' : 'shadow-md hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative h-48 md:h-52 lg:h-56 overflow-hidden">
                    <Image
                      src={product.image} 
                      alt={product.name} 
                      width={200}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    
                    {/* Product badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.featured && (
                        <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center">
                          <Star size={12} className="mr-1 fill-white" />
                          Featured
                        </div>
                      )}
                      {product.bestseller && (
                        <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          Bestseller
                        </div>
                      )}
                      {product.newItem && (
                        <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          New
                        </div>
                      )}
                      {product.popular && (
                        <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          Popular
                        </div>
                      )}
                    </div>
                    
                    {product.isSecret && (
                      <div className="absolute inset-0 bg-amber-900 bg-opacity-80 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center text-white">
                          <motion.div
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, -5, 0] 
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              repeatType: "loop" 
                            }}
                          >
                            <Lock size={60} className="mx-auto mb-3" />
                          </motion.div>
                          <p className="font-bold text-xl mb-1">Coming Soon</p>
                          <p className="text-amber-200 text-sm">Our Secret Recipe</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-amber-900">{product.name}</h3>
                      <motion.button
                        whileHover={{ scale: 1.2, color: "#ef4444" }}
                        whileTap={{ scale: 0.9 }}
                        className="text-amber-400 p-1"
                      >
                        <Heart size={18} />
                      </motion.button>
                    </div>
                    
                    <p className="text-amber-700 font-medium text-lg mb-3">{product.price}</p>
                    
                    {!product.isSecret && (
                      <div className="flex items-center mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => {
                            if (i < Math.floor(product.rating ?? 0)) {
                              return <Star key={i} size={14} className="text-amber-500 fill-amber-500" />;
                            }
                            if (i < (product.rating ?? 0)) {
                              return <Star key={i} size={14} className="text-amber-500 fill-amber-300" />; // Setengah penuh untuk rating desimal
                            }
                            return <Star key={i} size={14} className="text-amber-200" />;
                          })}
                        </div>
                        <span className="text-sm text-amber-700 ml-2">{product.rating}</span>
                        <span className="text-xs text-amber-500 ml-1">({product.reviews})</span>
                      </div>
                    )}
                    
                    <div className="mt-4 pt-4 border-t border-amber-100">
                      <p className="text-sm text-amber-600 line-clamp-2">
                        {product.description.split(' ').slice(0, 10).join(' ')}...
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Selected Product Detail */}
        <motion.div 
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-20 border border-amber-200"
        >
          {/* Product header */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-8 pb-6 border-b border-amber-100"
          >
            <motion.div variants={textReveal} className="flex flex-wrap justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-800">{selectedProduct.name}</h2>
              <div className="flex items-center mt-2 md:mt-0">
                {!selectedProduct.isSecret && (
                  <div className="bg-amber-100 px-3 py-1 rounded-full flex items-center">
                    <Star size={16} className="text-amber-500 fill-amber-500 mr-1" />
                    <span className="font-medium text-amber-700">{selectedProduct.rating}</span>
                    <span className="mx-1 text-amber-300">|</span>
                    <span className="text-sm text-amber-600">{selectedProduct.reviews} reviews</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product image */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg relative"
              >
                <Image 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  width={200}
                  height={300}
                  className="w-full h-64 md:h-80 object-cover"
                />
                
                {selectedProduct.isSecret && (
                  <div className="absolute inset-0 bg-amber-900 bg-opacity-75 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center text-white p-6">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 3, -3, 0] 
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "loop" 
                        }}
                      >
                        <Lock size={80} className="mx-auto mb-6" />
                      </motion.div>
                      <h3 className="text-3xl font-bold mb-4">Secret Recipe</h3>
                      <p className="text-amber-200 text-lg mb-6">Coming soon to Mozatto!</p>
                      <p className="text-amber-300 italic">Be the first to taste our newest innovation</p>
                      
                    </div>
                  </div>
                )}
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-amber-100 rounded-full -z-10 hidden md:block"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-200 rounded-full -z-10 hidden md:block"></div>
              </motion.div>
              
              {!selectedProduct.isSecret && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mt-8 flex flex-col sm:flex-row justify-between items-center"
                >
                  <div className="text-2xl font-bold text-amber-800 mb-4 sm:mb-0">{selectedProduct.price}</div>
                </motion.div>
              )}
            </div>
            
            {/* Product details */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Tab navigation */}
<div className="border-b border-amber-200 mb-6 overflow-x-auto">
  <div className="flex w-max sm:w-full">
    {['ingredients', 'description', 'nutrition'].map((section) => (
      <button
        key={section}
        onClick={() => setActiveSection(section)}
        className={`py-3 px-4 sm:px-5 font-medium text-sm relative cursor-pointer whitespace-nowrap ${
          activeSection === section
            ? 'text-amber-800 font-bold'
            : 'text-amber-500 hover:text-amber-700'
        }`}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
        {activeSection === section && (
          <motion.div
            layoutId="activeTab"
            className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500"
          />
        )}
      </button>
    ))}
  </div>
</div>

                
                {/* Tab content */}
                <AnimatePresence mode="wait">
                  {activeSection === 'ingredients' && (
                    <motion.div
                      key="ingredients"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-1"
                    >
                      <h3 className="font-bold text-amber-900 mb-4 flex items-center">
                        <Utensils size={20} className="mr-2 text-amber-600" />
                        Premium Ingredients
                      </h3>
                      <ul className="space-y-3">
                        {selectedProduct.ingredients.map((ingredient, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center"
                          >
                            <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                            <span className="text-amber-700">{ingredient}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      {!selectedProduct.isSecret && (
                        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
                          <p className="text-amber-700 text-sm font-medium flex items-center">
                            <Info size={16} className="mr-2 text-amber-500" />
                            All ingredients are carefully selected and sourced from trusted suppliers.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                  
                  {activeSection === 'description' && (
                    <motion.div
                      key="description"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-1"
                    >
                      <h3 className="font-bold text-amber-900 mb-3">About this product</h3>
                      <p className="text-amber-700 leading-relaxed mb-4">
                        {selectedProduct.description}
                      </p>
                      
                      {!selectedProduct.isSecret && (
                        <div className="mt-6 space-y-4">
                          <div className="flex items-start">
                            <div className="bg-amber-100 p-2 rounded-lg mr-3">
                              <Clock size={18} className="text-amber-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-amber-800">Best consumed within</h4>
                              <p className="text-sm text-amber-600">3 days for optimal freshness and taste</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-amber-100 p-2 rounded-lg mr-3">
                              <Flame size={18} className="text-amber-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-amber-800">Heating recommendation</h4>
                              <p className="text-sm text-amber-600">Reheat for 1-2 minutes in microwave or 5 minutes in oven</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                  
                  {activeSection === 'nutrition' && (
                    <motion.div
                      key="nutrition"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-1"
                    >
                      {selectedProduct.isSecret ? (
                        <div className="text-center p-8">
                          <Lock size={40} className="mx-auto mb-4 text-amber-400" />
                          <h3 className="text-xl font-bold text-amber-800 mb-2">Nutrition Information</h3>
                          <p className="text-amber-600">Will be revealed soon!</p>
                        </div>
                      ) : (
                        <>
                         <h3 className="font-bold text-amber-900 mb-4">Nutrition Facts</h3>
                          <div className="bg-amber-50 rounded-lg border border-amber-100 p-4">
                            <div className="space-y-3">
                              <div className="flex justify-between py-2 border-b border-amber-200">
                                <span className="text-amber-800 font-medium">Calories</span>
                                <span className="text-amber-700">270 kcal</span> {/* Perkiraan kalori untuk porsi per 100g */}
                              </div>
                              <div className="flex justify-between py-2 border-b border-amber-200">
                                <span className="text-amber-800 font-medium">Total Fat</span>
                                <span className="text-amber-700">12g</span> {/* Perkiraan lemak total */}
                              </div>
                              <div className="flex justify-between py-2 border-b border-amber-200">
                                <span className="text-amber-800 font-medium">Carbohydrates</span>
                                <span className="text-amber-700">32g</span> {/* Perkiraan karbohidrat */}
                              </div>
                              <div className="flex justify-between py-2 border-b border-amber-200">
                                <span className="text-amber-800 font-medium">Protein</span>
                                <span className="text-amber-700">6g</span> {/* Perkiraan protein */}
                              </div>
                              <div className="flex justify-between py-2">
                                <span className="text-amber-800 font-medium">Sodium</span>
                                <span className="text-amber-700">380mg</span> {/* Perkiraan sodium */}
                              </div>
                            </div>
                            
                            <div className="mt-4 text-xs text-amber-600 italic">
                              * Percent Daily Values are based on a 2,000 calorie diet.
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Additional product features */}
                {!selectedProduct.isSecret && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-8 pt-6 border-t border-amber-100"
                  >
                    <h3 className="font-bold text-amber-900 mb-4">Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-amber-50 p-3 rounded-lg flex items-center">
                        <div className="bg-amber-100 p-2 rounded-full mr-3">
                          <Cookie size={16} className="text-amber-600" />
                        </div>
                        <span className="text-sm text-amber-700">Made fresh daily</span>
                      </div>
                      <div className="bg-amber-50 p-3 rounded-lg flex items-center">
                        <div className="bg-amber-100 p-2 rounded-full mr-3">
                          <Sandwich size={16} className="text-amber-600" />
                        </div>
                        <span className="text-sm text-amber-700">Original recipe</span>
                      </div>
                      <div className="bg-amber-50 p-3 rounded-lg flex items-center">
                        <div className="bg-amber-100 p-2 rounded-full mr-3">
                          <Pizza size={16} className="text-amber-600" />
                        </div>
                        <span className="text-sm text-amber-700">Premium cheese</span>
                      </div>
                      <div className="bg-amber-50 p-3 rounded-lg flex items-center">
                        <div className="bg-amber-100 p-2 rounded-full mr-3">
                          <Award size={16} className="text-amber-600" />
                        </div>
                        <span className="text-sm text-amber-700">Quality guaranteed</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                x: [0, 5, 0] 
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror" 
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"
            ></motion.div>
            <motion.div 
              animate={{ 
                y: [0, 10, 0],
                x: [0, -5, 0] 
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror" 
              }}
              className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"
            ></motion.div>
          </div>
          
          <motion.h2 
            variants={textReveal}
            className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
          >
            Ready to taste the difference?
          </motion.h2>
          <motion.p 
            variants={textReveal}
            className="text-amber-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 relative z-10"
          >
            Order now and experience the crispy outside, soft inside, cheesy goodness of Mozatto&apos;s potato cheese bread.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
          >
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-600 font-bold py-3 px-8 cursor-pointer rounded-lg shadow-lg flex items-center justify-center"
            >
              <ShoppingBag size={18} className="mr-2" />
              Shop Now
            </motion.a>
            <motion.a
              href="/about-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white cursor-pointer font-bold py-3 px-8 rounded-lg shadow-md flex items-center justify-center"
            >
              Learn More
              <ChevronRight size={18} className="ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Footer */}
     <Footer />
    </div>
    </>
  );
}