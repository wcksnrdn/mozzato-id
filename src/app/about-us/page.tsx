"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { 
  Star, Award, Heart, Users, 
  MapPin, Coffee, Instagram,
  Camera, Sparkles, CheckCircle, Calendar,
  BookOpen, Gift, Leaf, ThumbsUp, Wheat, Loader, Send, AlertCircle, X,
  CalendarIcon,
  CoffeeIcon,
  GiftIcon,
  TrendingUpIcon,
  ZapIcon
} from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export default function AboutUsPage() {
  
  const storyRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  type Notification = {
    type: 'success' | 'error';
    message: string;
  };
  
  const [notification, setNotification] = useState<Notification | null>(null);
  const inputRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  
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
  
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    const teamMembers = [
      {
        name: "Munauwaroh",
        role: "Executive Director",
        bio: "Oversees overall strategy and business direction at Mozatto with a decade of experience in the culinary industry.",
        image: "/aboutuspageimages/munauwaroh.png",
        socials: {
          instagram: "https://www.instagram.com/de.nauuu/"
        }
      },
      {
        name: "Nabila Khairunnisa",
        role: "Marketing Staff",
        bio: "Responsible for planning and executing marketing initiatives to grow Mozatto’s brand presence.",
        image: "/aboutuspageimages/nabila.png",
        socials: {
          instagram: "https://www.instagram.com/nbilakhrnn.sa/"
        }
      },
      {
        name: "Kayla Nahdah Hermansyah",
        role: "Creative Staff",
        bio: "Handles visual content and branding, ensuring consistent and engaging creative output for Mozatto.",
        image: "/aboutuspageimages/kayla.png",
        socials: {
          instagram: "https://www.instagram.com/kaylanahdah/"
        }
      },
      {
        name: "Adrian Firmansyah",
        role: "Operational Staff",
        bio: "Supports daily operations and coordinates logistical aspects to ensure smooth business activities.",
        image: "/aboutuspageimages/adrian.png",
        socials: {
          instagram: "https://www.instagram.com/adri.frmn/"
        }
      },
      {
        name: "Shinta Nuraini",
        role: "Finance Staff",
        bio: "Manages financial records, budgeting, and reporting to maintain Mozatto’s financial health.",
        image: "/aboutuspageimages/shinta.png",
        socials: {
          instagram: "https://www.instagram.com/shntanurainiii/"
        }
      }
    ];    
  
  // Milestones
  const milestones = [
    {
      year: "2025",
      title: "The Beginning",
      description: "Mozatto started from a small kitchen in our home, offering potato cheese bread online through social media.",
      icon: <Calendar size={24} className="text-amber-500" />
    },
    {
      year: "2025",
      title: "First Sales",
      description: "Our first sales began in the West Java region, offering three potato cheese bread variants.",
      icon: <Gift size={24} className="text-amber-500" />
    },
    {
      year: "2025",
      title: "Menu Expansion",
      description: "We expanded our menu by introducing one new variant every month, including seasonal specials.",
      icon: <BookOpen size={24} className="text-amber-500" />
    },
    {
      year: "2025",
      title: "Public Recognition",
      description: "Mozatto received positive feedback from customers and started gaining popularity on social media.",
      icon: <Award size={24} className="text-amber-500" />
    },
    {
      year: "2025",
      title: "Sustainability",
      description: "We implemented a sustainability program by using eco-friendly packaging and sourcing local ingredients.",
      icon: <Leaf size={24} className="text-amber-500" />
    },
    {
      year: "2025",
      title: "Present Day",
      description: "Mozatto continues to innovate and plans to expand nationally, bringing the premium potato cheese bread concept to major cities across Indonesia.",
      icon: <ThumbsUp size={24} className="text-amber-500" />
    }
  ];  
  
  // Animations
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

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
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
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
      
        {/* Small decorative dots */}
        <div className="absolute top-32 left-1/4 w-3 h-3 rounded-full bg-amber-400 opacity-60"></div>
        <div className="absolute top-1/2 left-1/5 w-2 h-2 rounded-full bg-amber-500 opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-amber-300 opacity-70"></div>
        <div className="absolute top-2/3 right-1/5 w-3 h-3 rounded-full bg-amber-400 opacity-60"></div>
        
        <div className="relative container mx-auto px-4 py-16 lg:py-24 pt-20 lg:pt-16">
        {/* Hero Section */}
        <motion.div 
          style={{ opacity, scale }}
          className="text-center mb-20 lg:mb-24"
        >
         <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block mb-9"
            >
            <div className="absolute -top-8 -left-6 w-12 h-12 bg-amber-200 rounded-full opacity-90 hidden md:block"></div>
            <div className="absolute -bottom-4 -right-8 w-16 h-16 bg-amber-300 rounded-full opacity-80 hidden md:block"></div>
            <h1 className="font-black text-5xl md:text-6xl mt-0 md:mt-9 lg:text-7xl text-amber-900 tracking-tight relative z-10 drop-shadow-sm">
                <span className="lock relative">
                <span className="relative z-10">About</span> 
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-amber-400 opacity-70 transform -rotate-1"></span>
                </span>{" "}
                <span className="inline-block relative mt-1 md:mt-0 md:-mt-2">
                <span className="relative z-10 mt-0 md:-mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700 drop-shadow-md font-extrabold">Mozatto</span>
                <svg
                    className="absolute -bottom-5 left-0 w-full h-4 pointer-events-none"
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
            </motion.div>
                    
            <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-800 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
            Our journey to create the best potato cheese bread reflects passion, dedication, and commitment to provide an unforgettable culinary experience.
            </motion.p>
                    
            {/* Navigation pills */}
            <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white rounded-full shadow-md inline-flex p-1 mx-auto mb-12"
            >
            <button 
                onClick={() => scrollToSection(storyRef)}
                className="py-2 px-4 md:px-6 text-[13px] md:text-xl rounded-full transition-all duration-300 focus:outline-none hover:bg-amber-100 text-amber-900 font-medium"
            >
                Our Story
            </button>
            <button 
                onClick={() => scrollToSection(missionRef)}
                className="py-2 px-4 md:px-6 text-sm md:text-xl rounded-full transition-all duration-300 focus:outline-none hover:bg-amber-100 text-amber-900 font-medium"
            >
                Mission
            </button>
            <button 
                onClick={() => scrollToSection(teamRef)}
                className="py-2 px-4 md:px-6 text-sm md:text-xl rounded-full transition-all duration-300 focus:outline-none hover:bg-amber-100 text-amber-900 font-medium"
            >
                Team
            </button>
            </motion.div>
                    
            {/* Floating badges */}
            <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
            >
            <motion.div
                whileHover={{ y: -5 }}
                className="bg-amber-100 border border-amber-400 rounded-full px-5 py-2 md:px-8 md:py-3 flex items-center"
            >
                <Calendar size={16} className="text-amber-800 mr-2" />
                <span className="text-amber-900 font-medium text-[14px] md:text-lm">Est. 2025</span>
            </motion.div>
            <motion.div
                whileHover={{ y: -5 }}
                className="bg-amber-100 border border-amber-400 rounded-full px-4 py-2 flex items-center"
            >
                <MapPin size={16} className="text-amber-800 mr-2" />
                <span className="text-amber-900 font-medium text-[14px] md:text-lm">1 Locations</span>
            </motion.div>
            <motion.div
                whileHover={{ y: -5 }}
                className="bg-amber-100 border border-amber-400 rounded-full px-4 py-2 flex items-center"
            >
                <Users size={16} className="text-amber-800 mr-2" />
                <span className="text-amber-900 font-medium text-[14px] md:text-lm">5 Team Members</span>
            </motion.div>
            </motion.div>
        </motion.div>

        {/* Our Story Section */}
        <div ref={storyRef} className="mb-24 lg:mb-32 scroll-mt-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <motion.div 
                variants={slideInLeft}
                className="relative h-64 md:h-auto overflow-hidden"
              >
                <Image 
                  src="/aboutuspageimages/herosectionmozatto.png"
                  alt="Mozatto Story"
                  fill
                  className="object-cover"
                  priority
                />
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-4 left-4 bg-amber-500 text-white py-1 px-3 rounded-full text-sm font-medium shadow-md backdrop-blur-sm"
                >
                  <Camera size={14} className="inline-block mr-1" /> Our Product
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-amber-300 rounded-full opacity-70 hidden md:block"></div>
                <div className="absolute top-8 left-8 w-16 h-16 bg-amber-200 rounded-full opacity-50 hidden md:block"></div>
              </motion.div>
              
              {/* Text Side */}
              <motion.div 
                variants={slideInRight}
                className="p-6 md:p-10 flex flex-col justify-center"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-amber-500 mr-4"></div>
                  <h2 className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Our Journey</h2>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6">The Story Behind Mozatto</h3>
                
                <div className="space-y-4 text-amber-700">
                  <motion.p variants={fadeIn}>
                  Mozatto was born from passion and obsession for the perfect potato cheese bread. Starting in 2025 from a small home kitchen in West Java, we experimented endlessly to create a harmonious combination of potatoes and cheese.
                  </motion.p>
                  
                  <motion.p variants={fadeIn}>
                  With a professional culinary background and cooking experience, we combine traditional baking techniques with an innovative approach to create a texture that is crispy on the outside but soft on the inside, with a rich and characteristic cheese flavor.
                  </motion.p>
                  
                  <motion.p variants={fadeIn}>
                  From serving only online orders, Mozatto has grown rapidly thanks to the support of loyal customers and positive word-of-mouth. In 2025, we opened our first store.
                  </motion.p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-amber-100">
                  <motion.div 
                    variants={fadeIn}
                    className="flex flex-col sm:flex-row items-start gap-4"
                  >
                    <div className="bg-amber-50 p-4 rounded-xl flex items-center flex-shrink-0">
                      <Coffee className="text-amber-600 w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800 mb-1">Our Philosophy</h4>
                      <p className="text-amber-600 text-sm">
                      We believe that the best food comes from high-quality ingredients, perfect technique, and irreplaceable passion. Every potato cheese bread we make is an expression of our commitment to providing an unforgettable culinary experience.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mt-16 md:mt-24"
          >
            <motion.h2 
              variants={textReveal}
              className="text-3xl md:text-4xl font-bold text-amber-800 text-center mb-3"
            >
              Our Journey
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="w-24 h-1 bg-amber-500 mx-auto mb-12"
            ></motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-amber-200 transform md:translate-x-px"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={`${milestone.year}-${index}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-amber-500 rounded-full shadow-md transform -translate-x-3 md:-translate-x-3 flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'} pl-12 md:pl-0`}>
                      <div className={`bg-white rounded-2xl shadow-md p-6 border border-amber-100 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                        <div className="flex items-center mb-4">
                          <div className={`rounded-full bg-amber-100 p-2 mr-3 ${index % 2 === 0 && 'md:order-last md:ml-3 md:mr-0'}`}>
                            {milestone.icon}
                          </div>
                          <h3 className="font-bold text-amber-800 text-xl">{milestone.year}</h3>
                        </div>
                        <h4 className="font-bold text-amber-700 mb-2">{milestone.title}</h4>
                        <p className="text-amber-600 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                    {/* Empty div for grid layout */}
                    {index % 2 === 0 ? <div className="hidden md:block"></div> : null}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Mission & Values */}
        <div ref={missionRef} className="mb-24 lg:mb-32 scroll-mt-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={textReveal}
              className="text-3xl md:text-4xl font-bold text-amber-800 text-center mb-3"
            >
              Our Mission & Values
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="w-24 h-1 bg-amber-500 mx-auto mb-12"
            ></motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Mission Card */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100"
                >
                <div className="bg-amber-800 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-amber-100">
                    Creating joyful culinary experiences through innovation and uncompromised quality.
                    </p>
                </div>
                <div className="p-6">
                    <p className="text-amber-700 mb-6">
                    Mozatto is committed to delivering premium potato cheese bread with the highest quality standards, using carefully selected ingredients and perfected baking techniques to provide an unforgettable experience for every customer.
                    </p>
                    <ul className="space-y-3">
                    <li className="flex items-start">
                        <CheckCircle size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-amber-700">Consistency in taste and quality across every product</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-amber-700">Continuous innovation in recipes and product variants</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle size={20} className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-amber-700">Personalized and warm customer service</span>
                    </li>
                    </ul>
                </div>
                </motion.div>
              
              {/* Values Cards */}
              <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 flex flex-col"
            >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Our Core Values</h3>
                <p className="text-amber-100">The principles that guide every step of our journey at Mozatto.</p>
            </div>
            <div className="p-6 flex-grow">
                <div className="space-y-6">
                <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-xl mr-4">
                    <Star size={24} className="text-amber-600" />
                    </div>
                    <div>
                    <h4 className="font-bold text-amber-800 mb-1">Excellence</h4>
                    <p className="text-sm text-amber-600">We are never satisfied with the ordinary. We continuously strive for excellence in every aspect.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-xl mr-4">
                    <Heart size={24} className="text-amber-600" />
                    </div>
                    <div>
                    <h4 className="font-bold text-amber-800 mb-1">Passion</h4>
                    <p className="text-sm text-amber-600">A deep love for what we do drives our innovation and commitment.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-xl mr-4">
                    <Wheat size={24} className="text-amber-600" />
                    </div>
                    <div>
                    <h4 className="font-bold text-amber-800 mb-1">Quality</h4>
                    <p className="text-sm text-amber-600">We use the finest ingredients and apply strict standards throughout every production process.</p>
                    </div>
                </div>
                </div>
            </div>
            </motion.div>

                        
            {/* Vision Card */}
            <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100"
            >
            <div className="bg-amber-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                <p className="text-amber-100">To be the pioneer and the new standard for premium potato cheese bread in Indonesia.</p>
            </div>
            <div className="p-6">
                <p className="text-amber-700 mb-6">
                We envision making Mozatto a name synonymous with high-quality potato cheese bread, with a national presence and recognition as an innovator in the bakery category.
                </p>
                <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h4 className="text-amber-800 font-bold mb-3 flex items-center">
                    <Sparkles size={18} className="text-amber-500 mr-2" />
                    2025 Goals
                </h4>
                <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                    <span>Expansion to major cities across Indonesia</span>
                    </li>
                    <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                    <span>Launch of a healthy and organic product line</span>
                    </li>
                    <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                    <span>Competency training program for all teams</span>
                    </li>
                    <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                    <span>Full implementation of 100% sustainability program</span>
                    </li>
                </ul>
                </div>
            </div>
            </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Our Team */}
        <div ref={teamRef} className="mb-24 lg:mb-32 scroll-mt-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={textReveal}
              className="text-3xl md:text-4xl font-bold text-amber-800 text-center mb-3"
            >
              Our Team
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="w-24 h-1 bg-amber-500 mx-auto mb-6"
            ></motion.div>
            <motion.p
              variants={fadeIn}
              className="text-center text-amber-700 max-w-2xl mx-auto mb-12"
            >
              Meet the incredible talents that make Mozatto what it is today. Their passion, creativity and dedication are the keys to our success and the reason we can deliver the best potato cheese bread to you.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                  <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={300}
                      className="w-full h-85 md:w-full md:h-98 object-fill"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-800 to-transparent h-24"></div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                      {member.socials.instagram && (
                        <a href={member.socials.instagram} className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 backdrop-blur-sm transition-all duration-300">
                          <Instagram size={18} className="text-amber-700" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-amber-800 mb-1">{member.name}</h3>
                    <p className="text-amber-600 font-medium text-sm mb-4">{member.role}</p>
                    <p className="text-amber-700 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
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
                  onClick={handleSubmit}
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
<Footer />
</div>
  );
}