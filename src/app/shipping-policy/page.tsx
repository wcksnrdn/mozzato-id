// app/shipping-policy/page.tsx
"use client";

import { useState } from "react";
import { 
  Truck, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Package, 
  AlertCircle, 
  ChevronDown, 
  Search,
  Phone
} from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Component for animated shipping timeline visualization
const ShippingTimeline = () => {
  return (
    <div className="mt-8 mb-12 relative">
        <Navbar />
      <div className="absolute top-6 left-0 right-0 h-2 bg-amber-200 rounded-full" />
      
      {/* Timeline steps */}
      <div className="flex justify-between relative">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center z-10 border-4 border-amber-100">
            <Package className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm font-medium text-amber-800 mt-2">Order Placed</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center z-10 border-4 border-amber-100">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm font-medium text-amber-800 mt-2">Processing</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center z-10 border-4 border-amber-100">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm font-medium text-amber-800 mt-2">In Transit</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center z-10 border-4 border-amber-100">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm font-medium text-amber-800 mt-2">Delivered</p>
        </div>
      </div>
    </div>
  );
};

// FAQ accordion component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-amber-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-medium text-amber-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      
      {isOpen && (
        <div className="mt-2 text-sm text-amber-700 pl-1">
          {answer}
        </div>
      )}
    </div>
  );
};

// Shipment tracking simulator
const TrackingSimulator = () => {
  const [trackingId, setTrackingId] = useState("");
  const [showResult, setShowResult] = useState(false);
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setShowResult(true);
    }
  };
  
  return (
    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
      <h3 className="text-lg font-semibold text-amber-800 mb-3">Track Your Order</h3>
      
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <div className="flex-1 relative">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter tracking number"
            className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 pl-10"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-amber-400" />
        </div>
        <button 
          type="submit" 
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          Track
        </button>
      </form>
      
      {showResult && (
        <div className="bg-white p-4 rounded-md border border-amber-200">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="text-amber-600 w-5 h-5" />
            <p className="font-medium text-amber-800">Demo Tracking Result</p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-amber-700">Tracking ID: <span className="font-medium">{trackingId}</span></p>
            <p className="text-amber-700">Status: <span className="font-medium text-green-600">In Transit</span></p>
            <p className="text-amber-700">Estimated Delivery: <span className="font-medium">May 3, 2025</span></p>
            <p className="text-amber-700">Current Location: <span className="font-medium">Jakarta Distribution Center</span></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ShippingPolicyPage() {
  const [activeTab, setActiveTab] = useState("policy");
  
  const faqData = [
    {
      question: "How long will shipping take to my location?",
      answer: "Delivery times vary by location: Jakarta (1-2 days), major Indonesian cities (2-4 days), and rural areas (up to 5 days). You can get a more precise estimate by entering your address during checkout."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within Indonesia to ensure our products arrive in optimal condition. We hope to expand to international shipping in the future."
    },
    {
      question: "What if my order arrives damaged?",
      answer: "We take great care in packaging, but if your order arrives damaged, please take a photo and contact us within 24 hours. We will arrange a replacement or refund."
    },
    {
      question: "Can I change my shipping address after ordering?",
      answer: "Address changes can be accommodated if the order has not been processed yet. Please contact customer service immediately to request any changes."
    },
    {
      question: "How are shipping fees calculated?",
      answer: "Shipping fees are based on your location, order weight, and selected shipping method. We offer free shipping on all orders above Rp150,000."
    }
  ];

  return (
    <>
    <Navbar />
    
    {/* Main content */}
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-16 px-6" style={{ fontFamily: "'poppins', sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        {/* Hero section with bread animation */}
        <section className="relative overflow-hidden bg-amber-100 rounded-3xl shadow-xl mt-0 md:mt-14 mb-12">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200 rounded-full -mr-20 -mt-20 opacity-50" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-300 rounded-full -ml-12 -mb-12 opacity-30" />
          
          <div className="relative p-8 md:p-12 z-10">
            <div className="mb-6 md:mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)]">
                Shipping Policy
              </h1>
              <p className="text-lg text-amber-900 max-w-2xl mx-auto">
                At Mozatto, we ensure your freshly baked Potato Cheese Bread arrives at your doorstep warm and perfect. Here is everything you need to know about how we ship our products.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 max-w-xl w-full border border-amber-200 shadow-lg">
                <div className="flex items-center gap-3 text-sm font-medium border-b border-amber-200 pb-3 mb-3">
                  <div className="text-amber-700 flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    <span>Fast Delivery</span>
                  </div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  <div className="text-amber-700 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Same-Day Shipping</span>
                  </div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  <div className="text-amber-700 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Quality Guarantee</span>
                  </div>
                </div>
                
                <p className="text-amber-800 text-sm">
                  Orders placed before 3 PM will be shipped the same day to ensure freshness. Track your order in real-time and enjoy our premium insulated packaging that keeps your bread in perfect condition.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Navigation tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("policy")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
              activeTab === "policy" 
                ? "bg-amber-600 text-white" 
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            Shipping Policy
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
              activeTab === "faq" 
                ? "bg-amber-600 text-white" 
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            FAQs
          </button>
        </div>
        
        {activeTab === "policy" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            {/* Shipping methods with animated hover */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <Truck className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 mb-2">Express Delivery</h2>
                <p className="text-amber-700 text-sm">
                  Orders placed before 3 PM are shipped the same day. We use express couriers to preserve product quality.
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 mb-2">Shipping Schedule</h2>
                <p className="text-amber-700 text-sm">
                  We ship Monday to Saturday. Orders placed on Sunday will be processed the next business day.
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 mb-2">Secure Packaging</h2>
                <p className="text-amber-700 text-sm">
                  All items are carefully sealed using insulated eco-packaging to maintain freshness and prevent damage.
                </p>
              </div>
            </div>

            {/* Shipping timeline visualization */}
            <ShippingTimeline />

            <div className="space-y-8 text-amber-800">
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  Delivery Time Estimates
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <p className="text-sm flex-1">
                      <span className="font-medium">Jakarta area:</span> 1–2 business days
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <p className="text-sm flex-1">
                      <span className="font-medium">Other major cities in Indonesia:</span> 2–4 business days
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-600"></div>
                    <p className="text-sm flex-1">
                      <span className="font-medium">Rural areas:</span> may take up to 5 business days
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5 text-amber-600" />
                  Shipping Fees
                </h3>
                <p className="text-sm mb-4">
                  Shipping is calculated at checkout based on your location and order weight.
                </p>
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <div className="flex items-center justify-between border-b border-amber-100 pb-2 mb-2">
                    <span className="font-medium">Order Value</span>
                    <span className="font-medium">Shipping Fee</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Under Rp50,000</span>
                    <span>Rp15,000 - Rp30,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Rp50,000 - Rp100,000</span>
                    <span>Rp10,000 - Rp25,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Rp100,000 - Rp150,000</span>
                    <span>Rp5,000 - Rp15,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium text-green-600">
                    <span>Above Rp150,000</span>
                    <span>FREE Shipping</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <SearchIcon className="w-5 h-5 text-amber-600" />
                  Order Tracking
                </h3>
                <p className="text-sm">
                  Once your order is shipped, you will receive a tracking number via email or WhatsApp. You can also track your order directly on our website or contact customer support for assistance.
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-6 rounded-xl border border-amber-200">
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:customercare@mozatto.com" 
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-amber-200 hover:bg-amber-50 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-amber-600" />
                    <span className="text-amber-800">cisbredmozatto@gmail.com</span>
                  </a>
                  <a 
                    href="https://wa.me/6281929014069" 
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-amber-200 hover:bg-amber-50 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-amber-600" />
                    <span className="text-amber-800">+62 819-2901-4069</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {activeTab === "track" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            <h2 className="text-2xl font-bold text-amber-800 mb-6">Track Your Order</h2>
            <TrackingSimulator />
          </section>
        )}
        
        {activeTab === "faq" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            <h2 className="text-2xl font-bold text-amber-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-1">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>
        )}
      </div>
      
      {/* Call to action banner */}
      <div className="max-w-5xl mx-auto mt-12">
        <div className="bg-amber-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to try our famous Potato Cheese Bread?</h2>
          <p className="mb-6">Order now and experience the taste of freshly baked goodness delivered to your doorstep.</p>
          <a href="/contact-us" className="bg-white text-amber-700 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors">
            Shop Now
          </a>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

// Icon components to fix error with missing components
const Mail = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const SearchIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);