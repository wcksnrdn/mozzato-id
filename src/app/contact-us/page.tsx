"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Send, 
  SunIcon, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Check, 
  Loader,
  ShoppingBag,
  ExternalLink,
  CoffeeIcon,
  ZapIcon,
  CheckCircle,
  GiftIcon,
  CalendarIcon,
  TrendingUpIcon,
  AlertCircle,
  X
} from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const MozattoContactPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  type Notification = {
    type: 'success' | 'error';
    message: string;
  };
  
  const [notification, setNotification] = useState<Notification | null>(null);
  const inputRef = useRef(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [activeTab, setActiveTab] = useState('contact');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Particle effect for the background
  interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }
  
  const [particles] = useState<Particle[]>([]);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };  

  useEffect(() => {
    // Animasi sederhana untuk garis SVG
    const paths = document.querySelectorAll('.underline-path');
    paths.forEach(path => {
      const svgPath = path as SVGPathElement;
      const length = svgPath.getTotalLength();
      svgPath.style.strokeDasharray = `${length}`;
      svgPath.style.strokeDashoffset = `${length}`;
      svgPath.style.animation = 'draw 1.5s ease forwards';
    });
  }, []);
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  // Ordering methods data
  const orderingMethods = [
    {
      name: "WhatsApp",
      description: "Order Directly Via Whatsapp",
      icon: "/whatsapp.svg", // Placeholder for WhatsApp icon
      link: "https://wa.me/6281929014069?text=Halo%20Mimo!%20Saya%20ingin%20memesan%20Potato%20Cheese%20Breadnya!",
      color: "bg-green-500",
      textColor: "text-green-700",
      bgColor: "bg-green-50"
    },
    {
      name: "GoFood",
      description: "Order Via GoFood",
      icon: "/gofoodnew.png", // Placeholder for GoFood icon
      link: "https://gofood.co.id/jakarta/restaurant/mozatto-5b9a34aa-11f9-4fb9-8303-b5a5fb379585",
      color: "bg-green-600",
      textColor: "text-green-700",
      bgColor: "bg-green-50"
    },
    {
      name: "GrabFood",
      description: "Available on GrabFood",
      icon: "/grabfoodnew.png", // Placeholder for GrabFood icon
      link: "https://food.grab.com/id/en/restaurant/mozatto-pancoran-mas-depok-delivery/6-C7AWGBAHTLCGRX",
      color: "bg-green-400",
      textColor: "text-green-700",
      bgColor: "bg-green-50"
    },
    {
      name: "ShopeeFood",
      description: "Order Via ShopeeFood",
      icon: "/shopeefoodnew.png", // Placeholder for ShopeeFood icon
      link: "https://shopee.co.id/mozatto346",
      color: "bg-orange-400",
      textColor: "text-orange-700",
      bgColor: "bg-orange-50"
    },
    {
      name: "Instagram",
      description: "Order Via Direct Message Instagram",
      icon: "/instagramnew.png", // Placeholder for Instagram icon
      link: "https://instagram.com/mozatto.id",
      color: "bg-purple-300",
      textColor: "text-purple-700",
      bgColor: "bg-purple-50"
    },
    {
      name: "TikTok",
      description: "Visit Our Tiktok Account",
      icon: "/tiktok.webp", // Placeholder for TikTok icon
      link: "https://tiktok.com/@mozatto.id",
      color: "bg-black",
      textColor: "text-gray-700",
      bgColor: "bg-gray-50"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  const formFieldVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  const slideInLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { x: 60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.95 }
  };
  
  // Definisi variasi animasi
  const tabVariants = {
    inactive: {
      color: "#78350f", // amber-950 equivalent
      backgroundColor: "transparent",
      transition: { duration: 0.3 }
    },
    active: {
      color: "#92400e", // amber-800 equivalent
      backgroundColor: "rgba(254, 243, 199, 0.2)", // amber-100 dengan opacity
      transition: { duration: 0.3 }
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const handleNewsletterSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setNotification({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setTimeout(() => setNotification(null), 4000);
      return;
    }

    // Start loading
    setIsLoading(true);
    
    try {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success notification
      setNotification({
        type: 'success',
        message: 'You have successfully subscribed to our newsletter!'
      });
      
      // Clear form
      setEmail('');
      
    } catch {
      // Error notification
      setNotification({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again.'
      });
    } finally {
      // End loading
      setIsLoading(false);
      
      // Auto-dismiss notification after 4 seconds
      setTimeout(() => setNotification(null), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden" style={{ fontFamily: "'poppins', sans-serif" }}>
        <Navbar />
      {/* Particle background */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-amber-300"
          initial={{ 
            left: `${particle.x}%`, 
            top: `${particle.y}%`, 
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0.2
          }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-amber-200 rounded-bl-full opacity-20 blur-xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-300 rounded-tr-full opacity-20 blur-xl" />
      
      {/* Main content container */}
      <div className="container mx-auto px-4 py-16 mt-8 md:mt-14 relative z-10">
        {/* Hero header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
                <h1 className="font-black text-5xl md:text-6xl lg:text-7xl text-amber-950 tracking-tight relative z-10 mb-8">
                <span className="inline-block relative mr-2">
                <span className="relative z-10">Contact</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path 
                    d="M0,5 Q25,9 50,5 T100,5" 
                    fill="none" 
                    stroke="#FBBF24" 
                    strokeWidth="6" 
                    className="underline-path"
                    strokeLinecap="round"
                    />
                </svg>
                </span>
                <span className="inline-block relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700 drop-shadow-md font-extrabold">Mozatto</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path 
                    d="M0,5 Q25,1 50,5 T100,5" 
                    fill="none" 
                    stroke="#000000" 
                    strokeWidth="6" 
                    className="underline-path"
                    strokeLinecap="round"
                    />
                </svg>
                </span>
            </h1>

            <style jsx>{`
                @keyframes draw {
                to {
                    stroke-dashoffset: 0;
                }
                }
                
                h1 span {
                position: relative;
                display: inline-block;
                transition: transform 0.3s ease;
                }
                
                h1 span:hover {
                transform: translateY(-2px);
                }
            `}</style>
            
            {/* Elemen dekoratif tambahan */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-100 rounded-full opacity-40 z-0"></div>
            <div className="absolute -bottom-4 right-4 w-24 h-24 bg-amber-200 rounded-full opacity-30 z-0"></div>
            <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-amber-300 rounded-full opacity-20 z-0"></div>
            
            <motion.div
              className="absolute -top-8 -left-6 w-12 h-12 bg-amber-300 rounded-full opacity-70 hidden md:block"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            We greatly appreciate any questions, feedback, and impressions from you. 
            Feel free to contact us through the various methods below.
          </motion.p>
        </motion.div>
        
        {/* Tabs navigation */}
        <motion.div 
          className="flex justify-center mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-white rounded-full shadow-md p-1.5 flex flex-wrap justify-center">
          <motion.button
          variants={tabVariants}
          initial="inactive"
          animate={activeTab === 'contact' ? 'active' : 'inactive'}
          className="relative px-4 py-2.5 text-base md:text-lg cursor-pointer font-medium rounded-full mr-2 mb-2 md:mb-0 focus:outline-none overflow-hidden group"
          onClick={() => setActiveTab('contact')}
        >
          <span className="flex items-center relative z-10">
            <MessageCircle size={18} className="mr-2" />
            Contact Us
          </span>
        
        {activeTab === 'contact' && (
          <>
            {/* Particle effect wrapper */}
            <div className="absolute bottom-0 left-0 right-0 h-1 flex justify-evenly overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: [20, -5, 5, -2, 0], 
                    opacity: [0, 1, 1, 1, 0.8] 
                  }}
                  transition={{ 
                    duration: 1.5,
                    delay: i * 0.02,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className="w-0.5 h-4 bg-amber-400 rounded-full"
                />
              ))}
            </div>
            
            {/* Main indicator with gradient and animation */}
            <motion.div 
              className="absolute bottom-0 left-1 right-1 h-1 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300"
              layoutId="activeTab"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.4 }
              }}
            >
              <div className="absolute inset-0 bg-white opacity-20">
                <motion.div 
                  className="h-full w-10 bg-gradient-to-r from-transparent via-white to-transparent" 
                  animate={{ 
                    x: ["0%", "100%"],
                    transition: { 
                      repeat: Infinity, 
                      duration: 1.5,
                      ease: "easeInOut" 
                    }
                  }}
                />
              </div>
            </motion.div>
            
            {/* SVG pattern effect */}
            <svg className="absolute bottom-0 left-0 right-0 h-1 w-full" preserveAspectRatio="none">
              <motion.path
                d="M0,0.5 Q25,0 50,0.5 T100,0.5"
                fill="none"
                stroke="rgba(245, 158, 11, 0.6)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                  transition: { duration: 1, delay: 0.2 }
                }}
                strokeDasharray="4 2"
              />
            </svg>
          </>
        )}
      </motion.button>
      
      <motion.button
        variants={tabVariants}
        initial="inactive" 
        animate={activeTab === 'locations' ? 'active' : 'inactive'}
        className="relative px-4 py-2.5 text-base md:text-lg font-medium rounded-full mr-2 mb-2 md:mb-0 cursor-pointer focus:outline-none overflow-hidden group"
        onClick={() => setActiveTab('locations')}
      >
        <span className="flex items-center relative z-10">
          <SunIcon size={18} className="mr-2" />
          Send Feedback
        </span>
        
        {activeTab === 'locations' && (
          <>
            {/* Location-specific animation - pulsing dots */}
            <div className="absolute bottom-0 left-0 right-0 h-1 flex justify-evenly overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.5, opacity: 0.5 }}
                  animate={{ 
                    scale: [0.5, 1.2, 0.5], 
                    opacity: [0.5, 1, 0.5] 
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                  className="w-1.5 h-1.5 bg-amber-500 rounded-full"
                  style={{ 
                    position: 'absolute', 
                    left: `${10 + (i * 20)}%`
                  }}
                />
              ))}
            </div>
            
            {/* Main indicator with map-like pattern */}
            <motion.div 
              className="absolute bottom-0 left-1 right-1 h-1 bg-gradient-to-r from-amber-400 to-amber-600"
              layoutId="activeTab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '8px 8px' 
              }} />
            </motion.div>
            
            {/* SVG map path */}
            <svg className="absolute bottom-0 left-0 right-0 h-1 w-full" preserveAspectRatio="none">
              <motion.path
                d="M0,0.5 C20,0.2 30,0.8 50,0.5 S80,0.2 100,0.5"
                fill="none"
                stroke="rgba(245, 158, 11, 0.8)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1,
                  transition: { duration: 1.2 }
                }}
              />
            </svg>
          </>
        )}
      </motion.button>
      
      <motion.button
        variants={tabVariants}
        initial="inactive" 
        animate={activeTab === 'order' ? 'active' : 'inactive'}
        className="relative px-4 py-2.5 text-base md:text-lg font-medium rounded-full cursor-pointer focus:outline-none overflow-hidden group"
        onClick={() => setActiveTab('order')}
      >
        <span className="flex items-center relative z-10">
          <ShoppingBag size={18} className="mr-2" />
          Order Method
        </span>
        
        {activeTab === 'order' && (
          <>
            {/* Order-specific animation - moving dots like items */}
            <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ 
                    x: ["-10%", "110%"], 
                    opacity: [0, 1, 1, 0] 
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                  className="w-1 h-1 absolute bottom-0 bg-amber-300 rounded-full"
                />
              ))}
            </div>
            
            {/* Main indicator with shopping cart pattern */}
            <motion.div 
              className="absolute bottom-0 left-1 right-1 h-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500"
              layoutId="activeTab"
              initial={{ opacity: 0, scaleX: 0.9 }}
              animate={{ 
                opacity: 1, 
                scaleX: 1,
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Barcode-like effect */}
            <div className="absolute bottom-0 left-5 right-5 h-1 flex justify-between">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ 
                    scaleY: [0, i % 3 === 0 ? 1.5 : 1, 0],
                    transition: { 
                      duration: 1.5,
                      delay: i * 0.05,
                      repeat: Infinity,
                      repeatDelay: 1
                    }
                  }}
                  className="w-0.5 h-1 bg-white opacity-40 origin-bottom"
                />
              ))}
            </div>
          </>
        )}
      </motion.button>
          </div>
        </motion.div>
        
        {/* Tab content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'contact' ? (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8"
              >
                {/* Contact form */}
                <motion.div 
                  className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-100 rounded-full opacity-50" />
                  <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-amber-200 rounded-full opacity-40" />
                  
                  <motion.h2 
                    variants={itemVariants}
                    className="text-2xl font-bold text-amber-900 mb-6 relative z-10"
                  >
                    Send Message
                  </motion.h2>
                  
                  <AnimatePresence>
                    {!submitted ? (
                      <motion.form 
                        onSubmit={handleSubmit}
                        className="space-y-4 relative z-10"
                      >
                        <motion.div variants={formFieldVariants}>
                          <label className="block text-sm font-medium text-amber-800 mb-1" htmlFor="name">Your Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                            required
                          />
                        </motion.div>
                        
                        <motion.div variants={formFieldVariants}>
                          <label className="block text-sm font-medium text-amber-800 mb-1" htmlFor="email">Your Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                            required
                          />
                        </motion.div>
                        
                        <motion.div variants={formFieldVariants}>
                          <label className="block text-sm font-medium text-amber-800 mb-1" htmlFor="subject">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                            required
                          />
                        </motion.div>
                        
                        <motion.div variants={formFieldVariants}>
                          <label className="block text-sm font-medium text-amber-800 mb-1" htmlFor="message">Your Message</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                            required
                          ></textarea>
                        </motion.div>
                        
                        <motion.div variants={formFieldVariants} className="text-right">
                          <motion.button
                            type="submit"
                            variants={buttonVariants}
                            initial="idle"
                            whileHover="hover"
                            whileTap="tap"
                            disabled={submitting}
                            className={`bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                          >
                            {submitting ? (
                              <>
                                <Loader size={18} className="mr-2 animate-spin" />
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <Send size={18} className="mr-2" />
                                <span>Submit</span>
                              </>
                            )}
                          </motion.button>
                        </motion.div>
                      </motion.form>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                      >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Check size={32} className="text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-green-800 mb-2">Pesan Terkirim!</h3>
                        <p className="text-green-700">Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* Contact info */}
                <motion.div 
                  className="lg:col-span-2 space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="bg-amber-100 rounded-full p-3 mr-4">
                        <Phone className="text-amber-600 h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-900 text-lg mb-1">Phone</h3>
                        <p className="text-gray-700">0819-2901-4069</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="bg-amber-100 rounded-full p-3 mr-4">
                        <Mail className="text-amber-600 h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-900 text-lg mb-1">Our Email</h3>
                        <p className="text-gray-700">cisbredmozatto@gmail.com</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="bg-amber-100 rounded-full p-3 mr-4">
                        <Clock className="text-amber-600 h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-900 text-lg mb-1">Operational Hours</h3>
                        <p className="text-gray-700">Monday - Friday: 08:00 - 20:00</p>
                        <p className="text-gray-700">Saturday - Sunday: 09:00 - 22:00</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg p-6 text-white"
                  >
                    <h3 className="font-bold text-xl mb-2">Need Assistance?</h3>
                    <p className="mb-4">Our Customer Service Team is always ready to help you every day.</p>
                    <motion.a
                    href="https://wa.me/6281929014069"  // ← ganti nomor ini
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    initial="idle"
                    whileHover="hover"
                    whileTap="tap"
                    className="inline-flex items-center bg-white text-amber-600 px-4 py-2 rounded-lg font-medium"
                    >
                    <MessageCircle size={16} className="mr-2" />
                    <span>Chat Now</span>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
           ) : activeTab === 'locations' ? (
            <motion.div
              key="locations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-gradient-to-br from-amber-100 via-white to-amber-50 rounded-3xl shadow-2xl overflow-hidden p-10 md:p-20"
              >
                {/* Enhanced background elements */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-amber-300/30 blur-3xl rounded-full z-0 animate-pulse" 
                     style={{ animationDuration: '8s' }} />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-200/40 blur-2xl rounded-full z-0"
                     style={{ animation: 'ping 5s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
                
                {/* Additional decorative elements */}
                <div className="absolute top-1/4 right-10 w-40 h-40 bg-amber-400/20 blur-xl rounded-full z-0" 
                     style={{ animation: 'float 10s ease-in-out infinite' }} />
                <div className="absolute bottom-1/3 left-10 w-24 h-24 bg-amber-500/15 blur-lg rounded-full z-0" 
                     style={{ animation: 'float 7s ease-in-out infinite alternate' }} />
                     
                {/* Coffee bean decorative elements */}
                <div className="absolute top-10 right-20 text-amber-700/20 transform rotate-12 z-0">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2,21V19C2,15.13 5.13,12 9,12C12.87,12 16,15.13 16,19V21H2M9,10C6.24,10 4,7.76 4,5C4,2.24 6.24,0 9,0C11.76,0 14,2.24 14,5C14,7.76 11.76,10 9,10Z" />
                  </svg>
                </div>
                <div className="absolute bottom-16 left-16 text-amber-700/20 transform -rotate-12 z-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2,21V19C2,15.13 5.13,12 9,12C12.87,12 16,15.13 16,19V21H2M9,10C6.24,10 4,7.76 4,5C4,2.24 6.24,0 9,0C11.76,0 14,2.24 14,5C14,7.76 11.76,10 9,10Z" />
                  </svg>
                </div>
          
                <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                  {/* Enhanced title with text effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6 relative"
                  >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-amber-900 leading-tight relative z-10">
                      Help Us Grow Better
                    </h2>
                    <div className="absolute -bottom-2 left-0 right-0 h-3 bg-amber-400/40 transform -rotate-1 rounded-full"></div>
                  </motion.div>
          
                  {/* Enhanced description with icon */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-700 mb-8 flex flex-col items-center"
                  >
                    <p className="mb-4">
                    We need you! Take just 1 minute to fill out this form, because every feedback is the fuel for our change.
                    </p>
                    <div className="flex items-center gap-2 p-3 bg-amber-100 rounded-xl text-amber-800 text-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      <span>Your feedback means a lot to our development!</span>
                    </div>
                  </motion.div>
          
                  {/* Enhanced CTA button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                    <motion.a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSd5BILrxYNtAt3nio9VABCMbJm_QM5qshyFXxyM8nyqe0q49g/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-gradient-to-br from-amber-700 to-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all flex items-center gap-3"
                    >
                      <span>Send Feedback Now</span>
                      <motion.span
                        animate={{ 
                          x: [0, 5, 0],
                          rotate: [0, 10, 0, -10, 0]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2,
                          ease: "easeInOut" 
                        }}
                        className="text-xl"
                      >
                        🚀
                      </motion.span>
                    </motion.a>
                  </motion.div>
                  
                  {/* Added benefits section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-10 grid grid-cols-3 gap-4"
                  >
                    <div className="flex flex-col items-center p-3">
                      <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-700">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </div>
                      <span className="text-xs text-amber-800 font-medium text-center">Improve Services</span>
                    </div>
                    <div className="flex flex-col items-center p-3">
                      <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-700">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <span className="text-xs text-amber-800 font-medium text-center">Get Rewards</span>
                    </div>
                    <div className="flex flex-col items-center p-3">
                      <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-700">
                          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <span className="text-xs text-amber-800 font-medium text-center">New Location</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Custom animation styles */}
                <style jsx>{`
                  @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                  }
                `}</style>
              </motion.section>
            </motion.div>
          ) : (
              <motion.div
                key="order"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                
                <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative py-6"
              >
                {/* Background decorative elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl"></div>
                
                {/* Animated dots pattern */}
                <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={`dot-${i}`}
                      className="absolute w-2 h-2 rounded-full bg-amber-800"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, Math.random() * 30 - 15],
                        opacity: [0.2, 0.8, 0.2],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Section header */}
                <motion.div 
                  className="text-center mb-12 relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Choose Your Perfect Order Method</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Experience seamless ordering through your preferred platform. Each option is designed for your convenience and satisfaction.</p>
                  <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* 3D Card Carousel for methods */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {orderingMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ 
                        y: -10, 
                        scale: 1.02,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      className={`${method.bgColor} rounded-2xl overflow-hidden group relative`}
                      style={{
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        transformStyle: "preserve-3d",
                        perspective: "1000px"
                      }}
                    >
                      {/* Card Background Pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <svg width="100%" height="100%" className="text-black/5">
                          <defs>
                            <pattern id={`pattern-${index}`} patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(45)">
                              <rect x="0" y="0" width="100%" height="100%" fill="none" />
                              <path d="M0 15h30M15 0v30" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                        </svg>
                      </div>
                      
                      {/* Accent decoration */}
                      <div className={`absolute top-0 left-0 w-full h-1 ${method.color}`}></div>
                      <div className={`absolute -top-6 -right-6 w-24 h-24 ${method.color} opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                      
                      <div className="p-8 relative z-10">
                        {/* Icon with animated circle */}
                        <div className="mb-6 relative">
                          <motion.div
                            className={`${method.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg relative z-10`}
                            whileHover={{ rotate: 5 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                          >
                            <Image 
                              src={method.icon} 
                              alt={method.name} 
                              width={200} 
                              height={300} 
                              className="w-8 h-8 drop-shadow" 
                            />
                          </motion.div>
                          <div className={`absolute -bottom-2 -right-2 w-16 h-16 ${method.color} opacity-50 blur-md rounded-2xl`}></div>
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-4">
                          <h3 className={`font-bold text-2xl ${method.textColor} group-hover:translate-x-1 transition-transform duration-300`}>
                            {method.name}
                          </h3>
                          
                          <p className="text-gray-700 leading-relaxed">
                            {method.description}
                          </p>
                          
                          {/* Features */}
                          <div className="pt-2 space-y-2">
                            {[
                              "Fast Delivery", 
                              "Easy Tracking", 
                              "Secure Payment"
                            ].map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded-full ${method.color} flex items-center justify-center`}>
                                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-white">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                                </div>
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Rating */}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => {
                            const full = i < Math.floor(4.9);
                            const half = i < 4.9 && i >= Math.floor(4.9);
                            return (
                              <svg
                                key={i}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill={full ? "currentColor" : "none"}
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="text-amber-400"
                              >
                                {half ? (
                                  <>
                                    <defs>
                                      <linearGradient id={`half-grad-${i}`}>
                                        <stop offset="50%" stopColor="currentColor" />
                                        <stop offset="50%" stopColor="transparent" />
                                      </linearGradient>
                                    </defs>
                                    <polygon
                                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                      fill={`url(#half-grad-${i})`}
                                    />
                                  </>
                                ) : (
                                  <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                  />
                                )}
                              </svg>
                            );
                          })}
                          <span className="text-xs text-gray-500 ml-1">4.9/5</span>
                        </div>
                        </div>
                        
                        {/* Button with animation */}
                        <div className="mt-8 relative">
                          <div className={`absolute inset-0 ${method.color} opacity-70 blur-md rounded-xl transform group-hover:scale-105 transition-transform duration-300`}></div>
                          <motion.a
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative flex items-center justify-between ${method.color} text-white px-6 py-3 rounded-xl font-medium shadow-lg w-full overflow-hidden group/btn z-10`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="relative z-10 font-medium">Order via {method.name}</span>
                            <motion.div
                              className="flex items-center gap-1 relative z-10"
                              whileHover={{ x: 3 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <span className="text-sm">Go</span>
                              <ExternalLink size={16} />
                            </motion.div>
                            
                            {/* Button Background Animation */}
                            <motion.div
                              className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "0%" }}
                              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                            />
                          </motion.a>
                        </div>

                        {/* "Popular" tag for one method */}
                        {index === 0 && (
                          <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-3 flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                              <line x1="9" y1="9" x2="9.01" y2="9"></line>
                              <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                            <span>POPULAR</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                    </motion.div>
                    ))
                  </motion.div>
                
                {/* How to order instructional section */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-16 bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-100 rounded-full opacity-50" />
                  
                  <h3 className="text-2xl font-bold text-amber-900 mb-6 relative z-10">How to Order via WhatsApp</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="bg-amber-50 rounded-xl p-6">
                      <div className="bg-amber-200 w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-amber-800">1</div>
                      <h4 className="font-bold text-amber-900 mb-2">Contact Us</h4>
                      <p className="text-gray-700">Send a message to our WhatsApp number at 0819-2901-4069</p>
                    </div>
                    
                    <div className="bg-amber-50 rounded-xl p-6">
                      <div className="bg-amber-200 w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-amber-800">2</div>
                      <h4 className="font-bold text-amber-900 mb-2">Choose Menu</h4>
                      <p className="text-gray-700">Please state your order clearly along with the desired quantity.</p>
                    </div>
                    
                    <div className="bg-amber-50 rounded-xl p-6">
                      <div className="bg-amber-200 w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-amber-800">3</div>
                      <h4 className="font-bold text-amber-900 mb-2">Confirm & pay</h4>
                      <p className="text-gray-700">Make payment according to the available methods and wait for your order.</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-amber-50 rounded-xl p-6 relative z-10">
                    <h4 className="font-bold text-amber-900 mb-2">Vital Records:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Orders via WhatsApp are available daily during store operating hours.</li>
                    <li>Delivery fees vary based on distance and order weight.</li>
                    <li>Payments can be made via bank transfer or e-wallet.</li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Newsletter */}
        <div className="mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-amber-800 rounded-3xl overflow-hidden shadow-xl relative"
      >
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            variants={slideInLeft} 
            className="p-8 md:p-12 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1.5 w-8 bg-amber-400 rounded-full"></div>
              <span className="text-amber-300 text-sm font-medium uppercase tracking-wider">Stay Updated</span>
            </div>
            
            <motion.h3 
              variants={scaleUp}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Join Our Coffee <span className="relative inline-block">
                Journey
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-amber-500 -z-10 transform -rotate-1 opacity-60"></span>
              </span>
            </motion.h3>
            
            <motion.p 
              variants={slideInLeft}
              className="text-amber-200 mb-8"
            >
              Subscribe to our newsletter to get promo info, new menus, exclusive events, 
              brewing tips, and special surprises from Mozatto delivered to your inbox.
            </motion.p>
            
            <div className="relative">
              <div className="flex flex-col sm:flex-row gap-3 mb-2">
                <div className="relative flex-grow">
                  <input 
                    ref={inputRef}
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                    placeholder="Your Email Address"
                    disabled={isLoading}
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-800/50">
                    <Send size={18} />
                  </span>
                </div>
                
                <button 
                  onClick={handleNewsletterSubmit}
                  disabled={isLoading}
                  className={`bg-amber-500 hover:bg-amber-600 text-white font-medium py-3.5 px-6 rounded-lg transition-all duration-300 whitespace-nowrap relative overflow-hidden ${isLoading ? 'cursor-not-allowed' : ''}`}
                >
                  <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
                    Subscribe Now
                  </span>
                  
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Loader size={20} className="animate-spin text-white" />
                    </div>
                  )}
                </button>
              </div>
              
              {/* Privacy text */}
              <p className="text-xs text-amber-300 mt-4 flex items-start gap-2">
                <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                <span>By subscribing, you agree to our privacy policy. We respect your inbox and will not send spam.</span>
              </p>
            </div>

            {/* Newsletter benefits */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-700/50 flex items-center justify-center flex-shrink-0">
                  <GiftIcon className="text-amber-300" size={16} />
                </div>
                <span className="text-sm text-amber-200">Exclusive Offers</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-700/50 flex items-center justify-center flex-shrink-0">
                  <CalendarIcon className="text-amber-300" size={16} />
                </div>
                <span className="text-sm text-amber-200">Event Invites</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-700/50 flex items-center justify-center flex-shrink-0">
                  <CoffeeIcon className="text-amber-300" size={16} />
                </div>
                <span className="text-sm text-amber-200">New Menu Items</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-700/50 flex items-center justify-center flex-shrink-0">
                  <TrendingUpIcon className="text-amber-300" size={16} />
                </div>
                <span className="text-sm text-amber-200">Coffee Trends</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={slideInRight}
            className="hidden lg:block relative h-full min-h-[400px]"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <Image 
                src="/whychooseussectionimages/excellent.png" 
                alt="Mozatto Newsletter" 
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-800/90 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl"></div>
            <div className="absolute right-10 top-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl"></div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute top-1/4 right-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 w-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center">
                  <CoffeeIcon className="text-amber-800" size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium">New Item Alert</h4>
                  <p className="text-xs text-amber-200">Don&apos;t miss updates</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 right-24 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 w-56"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center">
                  <ZapIcon className="text-amber-800" size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Flash Sales</h4>
                  <p className="text-xs text-amber-200">Subscriber-only deals</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* Decorative coffee beans */}
        <div className="absolute top-10 left-16 opacity-10">
          <CoffeeIcon size={24} className="text-amber-200" />
        </div>
        <div className="absolute bottom-20 left-40 opacity-10 rotate-45">
          <CoffeeIcon size={16} className="text-amber-200" />
        </div>
        
        {/* Notification Toast */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`absolute top-4 right-4 rounded-lg shadow-lg flex items-center gap-2 p-3 ${
                notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {notification.type === 'success' ? (
                <CheckCircle size={18} className="text-green-600" />
              ) : (
                <AlertCircle size={18} className="text-red-600" />
              )}
              <span className="text-sm font-medium">{notification.message}</span>
              <button 
                onClick={() => setNotification(null)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <X size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MozattoContactPage;