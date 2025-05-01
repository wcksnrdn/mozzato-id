"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFoundPage() {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Coffee steam animation trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col items-center justify-center px-4 relative overflow-hidden" style={{ fontFamily: "'poppins', sans-serif" }}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Coffee beans scattered around */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-800/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              width: `${20 + Math.random() * 15}px`,
              height: `${30 + Math.random() * 15}px`,
            }}
            animate={{
              rotate: 360,
              y: [0, Math.random() * 10 - 5]
            }}
            transition={{
              rotate: {
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              },
              y: {
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2,21V19C2,15.13 5.13,12 9,12C12.87,12 16,15.13 16,19V21H2M9,10C6.24,10 4,7.76 4,5C4,2.24 6.24,0 9,0C11.76,0 14,2.24 14,5C14,7.76 11.76,10 9,10Z" />
            </svg>
          </motion.div>
        ))}
        
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content container */}
      <motion.div 
        className="max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl relative z-10 border border-amber-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Cup illustration with steam */}
        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            <motion.div 
              className="w-24 h-24 bg-amber-800 rounded-b-3xl rounded-t-lg flex items-center justify-center shadow-lg relative"
              whileHover={{ rotate: [0, -5, 5, -3, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-6 left-0 right-0 h-2 bg-amber-700 rounded-full"></div>
              <Coffee size={40} className="text-amber-200" />
              
              {/* Cup handle */}
              <div className="absolute right-0 top-1/2 w-3 h-10 bg-amber-800 rounded-r-full transform translate-x-2 -translate-y-1/2"></div>
              
              {/* Saucer */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-3 bg-amber-700 rounded-full"></div>
            </motion.div>
            
            {/* Steam animation */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 left-0 w-4 h-4 bg-amber-100 rounded-full"
                  style={{ 
                    x: (i - 1) * 8,
                    opacity: isAnimating ? 0.7 : 0
                  }}
                  animate={isAnimating ? {
                    y: [-5, -30],
                    opacity: [0.7, 0],
                    scale: [0.8, 1.2]
                  } : {}}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Text content */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-2">Oops! Page Not Found</h1>
            <div className="h-1 w-24 bg-amber-400 mx-auto my-4 rounded-full"></div>
            <p className="text-gray-600 text-lg mb-4">
              Looks like this brew doesn&apos;t exist! The page you&apos;re looking for may have been moved or is taking a coffee break.
            </p>
            <p className="text-amber-700 text-lg font-medium">
              Don&apos;t worry, our menu has plenty of other delightful options!
            </p>
          </motion.div>
        </div>
        
        {/* Action buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-amber-800 text-white px-6 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 font-medium"
            >
              <Home size={18} />
              <span>Back to Homepage</span>
            </motion.div>
          </Link>
          
          <Link href="/product" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-amber-100 text-amber-900 px-6 py-4 rounded-xl shadow-md flex items-center justify-center gap-2 font-medium border border-amber-200"
            >
              <Coffee size={18} />
              <span>View Our Menu</span>
            </motion.div>
          </Link>
        </motion.div>
        
        {/* Fun facts */}
        <motion.div
        className="mt-10 p-4 bg-amber-50 rounded-xl border border-amber-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        >
        <h3 className="font-medium text-amber-800 mb-2 flex items-center gap-2">
            <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">!</span>
            </div>
            <span>Fun Potato Cheese Bread Fact</span>
        </h3>
        <p className="text-gray-600 text-sm">
            Did you know? The combination of potato and cheese in bread not only enhances flavor but also helps retain moisture. 
            This allows each slice of Mozatto signature bread to remain soft and chewy even after several hours.
        </p>
        </motion.div>
      </motion.div>
      
      {/* Footer */}
      <motion.div
        className="mt-6 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p>© Mozatto Shop • <Link href="/contact-us" className="text-amber-700 hover:underline">Need help?</Link></p>
      </motion.div>
    </div>
  );
}