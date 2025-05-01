"use client";

import { useState } from "react";
import { 
  Lock, 
  EyeOff, 
  Shield, 
  ChevronDown, 
  AlertCircle, 
  ChevronRight, 
  Globe, 
  Clock, 
  Fingerprint, 
  Mail, 
  MessageSquare, 
  Check,
  UserCheck,
  Cookie,
  Share2,
  FileText,
  Trash2,
  ShieldAlert
} from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Privacy FAQ Accordion component
const PrivacyFAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
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
        <div className="mt-3 text-sm text-amber-700 pl-1">
          {answer}
        </div>
      )}
    </div>
  );
};

// Right Request Form component
const DataRightRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requestType: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as string;
    const value = e.target.value as string;
    setFormData(prev => ({ ...prev, [name]: value }));
  };  
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="bg-green-50 rounded-lg border border-green-200 p-6 text-center">
        <Check className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-700 mb-2">Request Submitted</h3>
        <p className="text-sm text-green-600 mb-4">
          Thank you for submitting your data privacy request. We will process your request and respond within 30 days as required by law.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-white bg-amber-600 px-4 py-2 rounded hover:bg-amber-700 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg border border-amber-200 p-6">
      <h3 className="text-lg font-semibold text-amber-800 mb-4">Submit Data Privacy Request</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-amber-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border text-amber-600 border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-amber-300 text-amber-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          
          <div>
            <label htmlFor="requestType" className="block text-sm font-medium text-amber-700 mb-1">
              Request Type
            </label>
            <select
              id="requestType"
              name="requestType"
              value={formData.requestType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-amber-300 text-amber-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select request type</option>
              <option value="access">Access My Data</option>
              <option value="update">Update My Data</option>
              <option value="delete">Delete My Data</option>
              <option value="portability">Data Portability</option>
              <option value="marketing">Opt-out of Marketing</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-amber-700 mb-1">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-amber-300 text-amber-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Please provide any additional information that may help us process your request."
            ></textarea>
          </div>
          
          <div className="bg-amber-50 p-3 rounded border border-amber-200">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <p className="text-sm font-medium text-amber-700">Verification Required</p>
            </div>
            <p className="text-xs text-amber-600 pl-6">
              For security purposes, we may require additional verification of your identity before processing certain requests.
            </p>
          </div>
          
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
          >
            <Shield className="w-4 h-4" />
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

// Cookie Policy Viewer component
const CookiePolicyViewer = () => {
  const cookieCategories = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      examples: ["Session Cookies", "Load Balancing Cookies", "Security Cookies"],
      required: true
    },
    {
      name: "Functionality Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization.",
      examples: ["Language Preference", "Region Selection", "Font Size Settings"],
      required: false
    },
    {
      name: "Analytics Cookies",
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve site performance.",
      examples: ["Google Analytics", "Hotjar", "Mixpanel"],
      required: false
    },
    {
      name: "Marketing Cookies",
      description: "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
      examples: ["Facebook Pixel", "Google Ads", "Twitter Pixel"],
      required: false
    }
  ];
  
  const [preferences, setPreferences] = useState({
    essential: true,
    functionality: true,
    analytics: false,
    marketing: false
  });
  
  const handleToggle = (category: string) => {
    if (category === 'essential') return; // Cannot toggle essential cookies
    setPreferences(prev => ({
      ...prev,
      [category as keyof typeof preferences]: !prev[category as keyof typeof preferences]
    }));
  };
  
  const [saved, setSaved] = useState(false);
  
  const handleSave = () => {
    // In a real app, this would save to browser storage or server
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
  
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Cookie Settings</h3>
        <p className="text-sm text-amber-700 mb-4">
          You can customize your cookie preferences below. Some cookies are necessary for the website to function properly and cannot be disabled.
        </p>
      </div>
      
      <div className="space-y-4">
        {cookieCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg border border-amber-200 p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Cookie className="w-5 h-5 text-amber-600 mr-2" />
                <h4 className="font-medium text-amber-800">{category.name}</h4>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={category.name === "Essential Cookies" ? true : preferences[category.name.split(' ')[0].toLowerCase() as keyof typeof preferences]}
                  onChange={() => handleToggle(category.name.split(' ')[0].toLowerCase())}
                  disabled={category.required}
                />
                <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
                  ${category.required ? 'opacity-60' : 'peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-amber-600'} 
                  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
              </label>
            </div>
            <p className="text-xs text-amber-700 mb-2">{category.description}</p>
            <div className="bg-amber-50 rounded p-2">
              <p className="text-xs text-amber-600 font-medium mb-1">Examples:</p>
              <div className="flex flex-wrap gap-1">
                {category.examples.map((example, i) => (
                  <span key={i} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors flex items-center gap-2"
        >
          <Check className="w-4 h-4" />
          Save Preferences
        </button>
      </div>
      
      {saved && (
        <div className="fixed bottom-4 right-4 bg-green-100 border border-green-200 text-green-700 py-2 px-4 rounded-lg shadow-lg flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span className="text-sm font-medium">Preferences saved successfully</span>
        </div>
      )}
    </div>
  );
};

// Data Protection Principles component
const DataProtectionPrinciples = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
        <div className="flex items-center mb-4">
          <div className="bg-amber-100 rounded-full p-2 mr-3">
            <Fingerprint className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-lg font-semibold text-amber-800">Lawful Processing</h3>
        </div>
        <p className="text-sm text-amber-700">
          We only process your data based on legitimate grounds such as consent, contract fulfillment, legal obligations, or our legitimate business interests.
        </p>
      </div>
      
      <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
        <div className="flex items-center mb-4">
          <div className="bg-amber-100 rounded-full p-2 mr-3">
            <FileText className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-lg font-semibold text-amber-800">Transparency</h3>
        </div>
        <p className="text-sm text-amber-700">
          We clearly inform you about how we collect and use your data, ensuring you understand our practices before providing your information.
        </p>
      </div>
      
      <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
        <div className="flex items-center mb-4">
          <div className="bg-amber-100 rounded-full p-2 mr-3">
            <Trash2 className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-lg font-semibold text-amber-800">Data Minimization</h3>
        </div>
        <p className="text-sm text-amber-700">
          We collect only the data that&apos;s necessary for the specific purpose and keep it only as long as needed, after which it is securely deleted.
        </p>
      </div>
      
      <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
        <div className="flex items-center mb-4">
          <div className="bg-amber-100 rounded-full p-2 mr-3">
            <ShieldAlert className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-lg font-semibold text-amber-800">Security Measures</h3>
        </div>
        <p className="text-sm text-amber-700">
          We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or destruction.
        </p>
      </div>
    </div>
  );
};

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState("policy");
  
  const privacyFAQs = [
    {
      question: "How do I request a copy of my personal data?",
      answer: "You can request access to your personal data by submitting a request through our Data Rights Request form on this page. We will process your request and provide a copy of your data within 30 days."
    },
    {
      question: "How long do you keep my personal information?",
      answer: "We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Order information is typically kept for 7 years for tax purposes, while browsing data is deleted after 12 months."
    },
    {
      question: "Do you share my data with third parties?",
      answer: "We share your data only with service providers who help us operate our business (such as payment processors and delivery services). These providers are contractually obligated to protect your data and can only use it for specified purposes. We never sell your personal information to third parties."
    },
    {
      question: "How do you protect my payment information?",
      answer: "We do not store your complete payment information on our servers. All payment transactions are processed through secure, PCI-compliant third-party payment processors. Only limited transaction information is stored in our system."
    },
    {
      question: "Can I opt out of marketing communications?",
      answer: "Yes, you can opt out of marketing communications at any time by clicking the 'unsubscribe' link in any marketing email, updating your communication preferences in your account settings, or by submitting a request through our Data Rights Request form."
    }
  ];
  
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-16 px-6" style={{ fontFamily: "'poppins', sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        {/* Hero section with animated elements */}
        <section className="relative overflow-hidden bg-amber-100 rounded-3xl mt-6 md:mt-14 shadow-xl mb-12">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200 rounded-full -mr-20 -mt-20 opacity-50" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-300 rounded-full -ml-12 -mb-12 opacity-30" />
          
          <div className="relative p-8 md:p-12 z-10">
            <div className="mb-6 md:mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)]">
                Privacy Policy
              </h1>
              <p className="text-lg text-amber-900 max-w-2xl mx-auto">
                We value your trust and are committed to protecting your personal information. This policy explains how we handle your data.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 max-w-xl w-full border border-amber-200 shadow-lg">
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium border-b border-amber-200 pb-3 mb-3">
                  <div className="text-amber-700 flex items-center gap-1">
                    <Lock className="w-4 h-4" />
                    <span>Secure Encryption</span>
                  </div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  <div className="text-amber-700 flex items-center gap-1">
                    <EyeOff className="w-4 h-4" />
                    <span>No Data Selling</span>
                  </div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  <div className="text-amber-700 flex items-center gap-1">
                    <UserCheck className="w-4 h-4" />
                    <span>Data Rights</span>
                  </div>
                </div>
                
                <p className="text-amber-800 text-sm">
                  Last updated: April 15, 2025. This privacy policy outlines how we collect, use, and protect your personal information when you use our services.
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
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab("cookies")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
              activeTab === "cookies" 
                ? "bg-amber-600 text-white" 
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            Cookie Policy
          </button>
          <button
            onClick={() => setActiveTab("rights")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
              activeTab === "rights" 
                ? "bg-amber-600 text-white" 
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            Your Data Rights
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
            {/* Policy highlights */}
            <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <Lock className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 mb-2">Data Security</h2>
                <p className="text-amber-700 text-sm">
                  All personal data is stored securely using modern encryption and access control to prevent unauthorized access.
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <EyeOff className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 mb-2">No Unwanted Sharing</h2>
                <p className="text-amber-700 text-sm">
                  We never sell or share your data with third parties without your consent, except where required by law.
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 mb-2">Your Control</h2>
                <p className="text-amber-700 text-sm">
                  You may request to view, update, or delete your personal data at any time by contacting us.
                </p>
              </div>
            </div>
            
            {/* Data protection principles */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-amber-800 mb-6">Our Data Protection Principles</h3>
              <DataProtectionPrinciples />
            </div>
            
            {/* Policy details */}
            <div className="prose prose-amber max-w-none">
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">Privacy Policy Details</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-amber-800 mb-2">Information We Collect</h4>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 mb-4">
                  <h5 className="font-medium text-amber-700 mb-2">Personal Information</h5>
                  <ul className="list-disc pl-5 text-sm text-amber-700 space-y-1">
                    <li>Full name and contact details (email, phone number, address)</li>
                    <li>Delivery address and billing information</li>
                    <li>Payment information (processed securely via third-party providers)</li>
                    <li>Account login credentials (if you create an account)</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 mb-4">
                  <h5 className="font-medium text-amber-700 mb-2">Usage Information</h5>
                  <ul className="list-disc pl-5 text-sm text-amber-700 space-y-1">
                    <li>Browsing behavior and purchase history</li>
                    <li>Device information (browser type, IP address, device type)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Customer service interactions and feedback</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-amber-800 mb-2">How We Use Your Information</h4>
                <p className="text-amber-700 mb-3">We use your personal information for the following purposes:</p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-700">Order Processing</p>
                      <p className="text-sm text-amber-600">To process and fulfill your orders, send order confirmations, and provide delivery updates.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-700">Customer Support</p>
                      <p className="text-sm text-amber-600">To provide customer service, respond to inquiries, and assist with refunds or product issues.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-700">Service Improvement</p>
                      <p className="text-sm text-amber-600">To analyze usage patterns, troubleshoot issues, and enhance our products and services.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-700">Marketing Communications</p>
                      <p className="text-sm text-amber-600">To send you promotional offers, newsletters, and updates about our products (with your consent).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-700">Legal Compliance</p>
                      <p className="text-sm text-amber-600">To comply with legal obligations and resolve disputes.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-amber-800 mb-2">Information Sharing</h4>
                <p className="text-amber-700 mb-3">We share your information with:</p>
                
                <div className="space-y-4">
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <div className="flex items-center mb-1">
                      <Share2 className="w-4 h-4 text-amber-600 mr-2" />
                      <h5 className="font-medium text-amber-700">Service Providers</h5>
                    </div>
                    <p className="text-sm text-amber-600 pl-6">
                      Third-party service providers who perform services on our behalf, such as payment processing, shipping, data analysis, and customer support.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <div className="flex items-center mb-1">
                      <Share2 className="w-4 h-4 text-amber-600 mr-2" />
                      <h5 className="font-medium text-amber-700">Legal Requirements</h5>
                    </div>
                    <p className="text-sm text-amber-600 pl-6">
                      When required by law, court order, or governmental regulation, or to protect our rights, property, or safety.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <div className="flex items-center mb-1">
                      <Share2 className="w-4 h-4 text-amber-600 mr-2" />
                      <h5 className="font-medium text-amber-700">Business Transfers</h5>
                    </div>
                    <p className="text-sm text-amber-600 pl-6">
                      In connection with a merger, acquisition, or sale of assets, in which case personal data would be among the transferred assets.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-amber-800 mb-2">Data Retention</h4>
                <p className="text-amber-700 mb-3">
                  We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, including:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start bg-amber-50 p-3 rounded-lg border border-amber-100">
                    <Clock className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-amber-700">Accounts & Orders</p>
                      <p className="text-xs text-amber-600">Stored for 7 years for tax and accounting purposes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-amber-50 p-3 rounded-lg border border-amber-100">
                    <Clock className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-amber-700">Customer Support</p>
                      <p className="text-xs text-amber-600">Stored for 3 years after the last interaction</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-amber-50 p-3 rounded-lg border border-amber-100">
                    <Clock className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-amber-700">Marketing Data</p>
                      <p className="text-xs text-amber-600">Stored until you unsubscribe or withdraw consent</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-amber-50 p-3 rounded-lg border border-amber-100">
                    <Clock className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-amber-700">Browsing Data</p>
                      <p className="text-xs text-amber-600">Deleted after 12 months of inactivity</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-amber-800 mb-2">International Data Transfers</h4>
                <p className="text-amber-700 mb-3">
                  Your information may be transferred to and processed in countries outside of your residence that may have different data protection laws. We ensure that:
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    <p className="text-sm text-amber-700">We implement appropriate safeguards like standard contractual clauses</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    <p className="text-sm text-amber-700">We only work with trusted partners who maintain adequate data protection standards</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                    <p className="text-sm text-amber-700">Your data is protected regardless of where it is processed</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-amber-800 mb-2">Contact Us</h4>
                <p className="text-amber-700 mb-3">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                
                <div className="space-y-3 ml-2">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-amber-600 mr-3" />
                    <p className="text-amber-700">cisbredmozatto@gmail.com</p>
                  </div>
                  
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-amber-600 mr-3" />
                    <p className="text-amber-700">+62819 2901 4069</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {activeTab === "cookies" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">Cookie Policy</h3>
            <div className="mb-8">
              <p className="text-amber-700 mb-3">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow certain features to work.
              </p>
              
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-8">
                <div className="flex items-center mb-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
                  <h4 className="font-medium text-amber-800">Why We Use Cookies</h4>
                </div>
                <ul className="list-disc pl-5 text-sm text-amber-700 space-y-1">
                  <li>To ensure the website functions properly</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how our website is used so we can improve it</li>
                  <li>To personalize content and advertisements (with your consent)</li>
                </ul>
              </div>
              
              <CookiePolicyViewer />
            </div>
          </section>
        )}
        
        {activeTab === "rights" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-amber-800 mb-6">Your Data Rights</h3>
                <p className="text-amber-700 mb-6">
                  Under data protection laws, you have rights regarding your personal data. These include:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <div className="flex items-center mb-1">
                      <Fingerprint className="w-5 h-5 text-amber-600 mr-2" />
                      <h4 className="font-medium text-amber-700">Right to Access</h4>
                    </div>
                    <p className="text-sm text-amber-600 pl-7">
                      You can request a copy of the personal data we hold about you.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <div className="flex items-center mb-1">
                      <FileText className="w-5 h-5 text-amber-600 mr-2" />
                      <h4 className="font-medium text-amber-700">Right to Rectification</h4>
                    </div>
                    <p className="text-sm text-amber-600 pl-7">
                      You can request that we correct inaccurate or incomplete data about you.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <div className="flex items-center mb-1">
                      <Trash2 className="w-5 h-5 text-amber-600 mr-2" />
                      <h4 className="font-medium text-amber-700">Right to Erasure</h4>
                    </div>
                    <p className="text-sm text-amber-600 pl-7">
                      You can request that we delete your personal data in certain circumstances.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <div className="flex items-center mb-1">
                      <EyeOff className="w-5 h-5 text-amber-600 mr-2" />
                      <h4 className="font-medium text-amber-700">Right to Restrict Processing</h4>
                    </div>
                    <p className="text-sm text-amber-600 pl-7">
                      You can request that we limit how we use your data in certain circumstances.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <div className="flex items-center mb-1">
                      <Share2 className="w-5 h-5 text-amber-600 mr-2" />
                      <h4 className="font-medium text-amber-700">Right to Data Portability</h4>
                    </div>
                    <p className="text-sm text-amber-600 pl-7">
                      You can request that we transfer your data to another service provider in a machine-readable format.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <div className="flex items-center mb-1">
                      <MessageSquare className="w-5 h-5 text-amber-600 mr-2" />
                      <h4 className="font-medium text-amber-700">Right to Object</h4>
                    </div>
                    <p className="text-sm text-amber-600 pl-7">
                      You can object to the processing of your personal data for marketing purposes or based on legitimate interests.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-amber-800 mb-6">Exercise Your Rights</h3>
                <p className="text-amber-700 mb-6">
                  To exercise any of these rights, please submit a request using the form below. We will respond to all requests within 30 days.
                </p>
                
                <DataRightRequestForm />
              </div>
            </div>
          </section>
        )}
        
        {activeTab === "faq" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">Frequently Asked Questions</h3>
            
            <div className="mb-6">
              <p className="text-amber-700 mb-3">
                Find answers to common questions about our privacy practices below. If you can&apos;t find what you&apos;re looking for, please contact our privacy team.
              </p>
            </div>
            
            <div className="space-y-1">
              {privacyFAQs.map((faq, index) => (
                <PrivacyFAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
}