// app/returns-refunds/page.tsx
"use client";

import { useState } from "react";
import { 
  RotateCcw, 
  BadgeDollarSign, 
  HelpCircle, 
  CheckCircle,
  XCircle,
  MessageSquare,
  Camera,
  Clock,
  AlertTriangle,
  ChevronDown,
  Send,
  FileImage,
  Phone
} from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// RefundProcess timeline component
const RefundProcess = () => {
  return (
    <div className="my-10">
      <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">Refund Process Timeline</h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-amber-200 transform md:translate-x-px"></div>
        
        {/* Steps */}
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0">
              <h4 className="text-lg font-medium text-amber-700">Submit Request</h4>
              <p className="text-sm text-amber-600 mt-1">
                Send us an email with photos of the issue and your order details.
              </p>
            </div>
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-amber-600 rounded-full order-1 md:order-2">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <div className="md:w-1/2 md:pl-8 order-3 mt-4 md:mt-0 md:text-left">
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex gap-2 items-center text-amber-700">
                  <Camera className="w-4 h-4" />
                  <span className="text-xs font-medium">Attach clear photos</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0">
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex gap-2 items-center text-amber-700 justify-end">
                  <span className="text-xs font-medium">Usually within 24 hours</span>
                  <Clock className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-amber-600 rounded-full order-1 md:order-2">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <div className="md:w-1/2 md:pl-8 order-3 mt-4 md:mt-0 md:text-left">
              <h4 className="text-lg font-medium text-amber-700">Review Process</h4>
              <p className="text-sm text-amber-600 mt-1">
                Our team reviews your claim and may request additional information.
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0">
              <h4 className="text-lg font-medium text-amber-700">Decision</h4>
              <p className="text-sm text-amber-600 mt-1">
                We will inform you of our decision and the next steps.
              </p>
            </div>
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-amber-600 rounded-full order-1 md:order-2">
              <span className="text-white text-sm font-bold">3</span>
            </div>
            <div className="md:w-1/2 md:pl-8 order-3 mt-4 md:mt-0 md:text-left">
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex gap-2 items-center text-amber-700">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-xs font-medium">Email notification sent</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0">
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex gap-2 items-center text-amber-700 justify-end">
                  <span className="text-xs font-medium">Within 5 business days</span>
                  <BadgeDollarSign className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-amber-600 rounded-full order-1 md:order-2">
              <span className="text-white text-sm font-bold">4</span>
            </div>
            <div className="md:w-1/2 md:pl-8 order-3 mt-4 md:mt-0 md:text-left">
              <h4 className="text-lg font-medium text-amber-700">Refund Processing</h4>
              <p className="text-sm text-amber-600 mt-1">
                If approved, refund is issued to your original payment method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Accordion component
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
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

// Refund Eligibility Checker
const RefundEligibilityChecker = () => {
  const [step, setStep] = useState(1);
  const [issue, setIssue] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [hasPhoto, setHasPhoto] = useState(false);
  interface Result {
    eligible: boolean;
    message: string;
  }

  const [result, setResult] = useState<Result | null>(null);
  
  const handleSubmit = () => {
    // Simple logic to determine eligibility
    if (
      (issue === "damaged" || issue === "incorrect" || issue === "incomplete") &&
      timeframe === "within24" &&
      hasPhoto
    ) {
      setResult({
        eligible: true,
        message: "Based on your inputs, you appear to be eligible for a refund. Please submit a request using the form below."
      });
    } else if (timeframe !== "within24") {
      setResult({
        eligible: false,
        message: "Unfortunately, all claims must be made within 24 hours of delivery to be considered for a refund."
      });
    } else if (issue === "taste") {
      setResult({
        eligible: false,
        message: "We do not offer refunds for personal taste preferences, but we value your feedback to improve our products."
      });
    } else {
      setResult({
        eligible: false,
        message: "Based on your inputs, you may not be eligible for a standard refund. Please contact our customer support team directly to discuss your situation."
      });
    }
  };
  
  return (
    <div className="bg-amber-50 rounded-lg border border-amber-200 p-6">
      <h3 className="text-lg font-semibold text-amber-800 mb-4">Check Your Refund Eligibility</h3>
      
      {step === 1 && (
        <div>
          <p className="text-sm text-amber-700 mb-4">What issue are you experiencing with your order?</p>
          <div className="space-y-2">
            <button 
              onClick={() => { setIssue("damaged"); setStep(2); }}
              className={`w-full text-left p-3 rounded border ${issue === "damaged" ? "bg-amber-100 border-amber-300" : "bg-white border-amber-200"} hover:bg-amber-50`}
            >
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-amber-600">My order arrived damaged</span>
              </div>
            </button>
            <button 
              onClick={() => { setIssue("incorrect"); setStep(2); }}
              className={`w-full text-left p-3 rounded border ${issue === "incorrect" ? "bg-amber-100 border-amber-300" : "bg-white border-amber-200"} hover:bg-amber-50`}
            >
              <div className="flex items-center">
                <XCircle className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-amber-600">I received incorrect items</span>
              </div>
            </button>
            <button 
              onClick={() => { setIssue("incomplete"); setStep(2); }}
              className={`w-full text-left p-3 rounded border ${issue === "incomplete" ? "bg-amber-100 border-amber-300" : "bg-white border-amber-200"} hover:bg-amber-50`}
            >
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-amber-600">My order was incomplete</span>
              </div>
            </button>
            <button 
              onClick={() => { setIssue("taste"); setStep(2); }}
              className={`w-full text-left p-3 rounded border ${issue === "taste" ? "bg-amber-100 border-amber-300" : "bg-white border-amber-200"} hover:bg-amber-50`}
            >
              <div className="flex items-center">
                <XCircle className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-amber-600">I did not like the taste</span>
              </div>
            </button>
          </div>
        </div>
      )}
      
      {step === 2 && (
        <div>
          <p className="text-sm text-amber-700 mb-4">When did you receive your order?</p>
          <div className="space-y-2">
            <button 
              onClick={() => { setTimeframe("within24"); setStep(3); }}
              className={`w-full text-left p-3 rounded border ${timeframe === "within24" ? "bg-amber-100 border-amber-300" : "bg-white border-amber-200"} hover:bg-amber-50`}
            >
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-amber-600">Within the last 24 hours</span>
              </div>
            </button>
            <button 
              onClick={() => { setTimeframe("within48"); setStep(3); }}
              className={`w-full text-left p-3 rounded border ${timeframe === "within48" ? "bg-amber-100 border-amber-300" : "bg-white border-amber-200"} hover:bg-amber-50`}
            >
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-amber-600">Between 24-48 hours ago</span>
              </div>
            </button>
            <button 
              onClick={() => { setTimeframe("moreThan48"); setStep(3); }}
              className={`w-full text-left p-3 rounded border ${timeframe === "moreThan48" ? "bg-amber-100 border-amber-300" : "bg-white border-amber-200"} hover:bg-amber-50`}
            >
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-amber-600">More than 48 hours ago</span>
              </div>
            </button>
          </div>
          <div className="mt-4">
            <button 
              onClick={() => setStep(1)}
              className="text-amber-600 text-sm hover:underline"
            >
              &larr; Back
            </button>
          </div>
        </div>
      )}
      
      {step === 3 && (
        <div>
          <p className="text-sm text-amber-700 mb-4">Do you have photos of the issue?</p>
          <div className="space-y-2">
            <button 
              onClick={() => { setHasPhoto(true); handleSubmit(); setStep(4); }}
              className={`w-full text-left p-3 rounded border ${hasPhoto ? "bg-amber-100 border-amber-300" : "bg-white border-amber-200"} hover:bg-amber-50`}
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-amber-600">Yes, I have photos</span>
              </div>
            </button>
            <button 
              onClick={() => { setHasPhoto(false); handleSubmit(); setStep(4); }}
              className={`w-full text-left p-3 rounded border ${hasPhoto === false ? "bg-amber-100 border-amber-300" : "bg-white border-amber-200"} hover:bg-amber-50`}
            >
              <div className="flex items-center">
                <XCircle className="w-5 h-5 text-amber-600 mr-2" />
                <span className="text-amber-600">No, I don&apos;t have photos</span>
              </div>
            </button>
          </div>
          <div className="mt-4">
            <button 
              onClick={() => setStep(2)}
              className="text-amber-600 text-sm hover:underline"
            >
              &larr; Back
            </button>
          </div>
        </div>
      )}
      
      {step === 4 && result && (
        <div className={`p-4 rounded-lg ${result.eligible ? "bg-green-50 border border-green-200" : "bg-amber-100 border border-amber-300"}`}>
          <div className="flex items-start mb-3">
            {result.eligible ? (
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
            )}
            <h4 className={`font-medium ${result.eligible ? "text-green-700" : "text-amber-800"}`}>
              {result.eligible ? "Likely Eligible for Refund" : "May Not Be Eligible"}
            </h4>
          </div>
          <p className="text-sm mb-4 ml-7 text-amber-600">{result.message}</p>
          
          {result.eligible && (
            <div className="bg-white p-4 rounded border border-green-200 ml-7">
              <h5 className="font-medium text-green-700 mb-2">Next Steps:</h5>
              <ol className="text-sm space-y-1 list-decimal list-inside">
                <li className="text-amber-600">Gather your order number and photos</li>
                <li className="text-amber-600">Fill out the refund request form below</li>
                <li className="text-amber-600">Our team will contact you within 24 hours</li>
              </ol>
            </div>
          )}
          
          <div className="mt-4">
            <button 
              onClick={() => setStep(1)}
              className="text-amber-600 text-sm hover:underline"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Refund Request Form
const RefundRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    reason: "",
    description: ""
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-700 mb-2">Request Submitted</h3>
        <p className="text-sm text-green-600 mb-4">
          Thank you for submitting your refund request. We will review your case and respond within 24 hours.
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
      <h3 className="text-lg font-semibold text-amber-800 mb-4">Submit Refund Request</h3>
      
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
              className="w-full px-3 py-2 border border-amber-300 text-amber-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
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
            <label htmlFor="orderNumber" className="block text-sm font-medium text-amber-700 mb-1">
              Order Number
            </label>
            <input
              type="text"
              id="orderNumber"
              name="orderNumber"
              value={formData.orderNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-amber-300 text-amber-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-amber-700 mb-1">
              Reason for Refund
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-amber-300 text-amber-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select a reason</option>
              <option value="damaged">Damaged Product</option>
              <option value="incorrect">Incorrect Product</option>
              <option value="incomplete">Incomplete Order</option>
              <option value="other">Other Issue</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-amber-700 mb-1">
              Description of Issue
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-amber-300 text-amber-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>
          
          <div className="bg-amber-50 p-3 rounded border border-amber-200 flex items-center gap-3">
            <FileImage className="w-5 h-5 text-amber-600" />
            <div className="text-sm text-amber-700">
              <p className="font-medium">Attach Photos (Recommended)</p>
              <p className="text-xs">Please email photos to support@mozatto.com with your order number</p>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default function ReturnsRefundsPage() {
  const [activeTab, setActiveTab] = useState("policy");
  
  const faqData = [
    {
      question: "How long do I have to report an issue with my order?",
      answer: "All claims must be made within 24 hours of delivery to be considered for a refund. This timeframe helps us properly assess product quality issues."
    },
    {
      question: "What if I simply don't like the taste of the product?",
      answer: "While we don't offer refunds based on personal taste preferences, we value your feedback to improve our recipes. Please share your specific feedback with us."
    },
    {
      question: "How will I receive my refund?",
      answer: "Refunds are always processed to your original payment method. The processing time can take up to 5 business days depending on your bank or payment provider."
    },
    {
      question: "Can I exchange my order instead of getting a refund?",
      answer: "Yes, in certain cases we can offer a replacement order instead of a refund, especially for damaged or incorrect items. Please specify this preference when contacting us."
    },
    {
      question: "What photos should I include with my refund request?",
      answer: "Please include clear photos showing the issue with your order (damaged packaging, incorrect product, quality issues, etc.) and a photo of your order receipt or packaging label."
    }
  ];
  
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-16 px-6" style={{ fontFamily: "'poppins', sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        {/* Hero section with animated elements */}
        <section className="relative overflow-hidden bg-amber-100 mt-6 md:mt-14 rounded-3xl shadow-xl mb-12">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200 rounded-full -mr-20 -mt-20 opacity-50" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-300 rounded-full -ml-12 -mb-12 opacity-30" />
          
          <div className="relative p-8 md:p-12 z-10">
            <div className="mb-6 md:mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)]">
                Returns & Refunds
              </h1>
              <p className="text-lg text-amber-900 max-w-2xl mx-auto">
                We want you to enjoy every bite of our Potato Cheese Bread. If something goes wrong, we are here to make it right.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 max-w-xl w-full border border-amber-200 shadow-lg">
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium border-b border-amber-200 pb-3 mb-3">
                  <div className="text-amber-700 flex items-center gap-1">
                    <RotateCcw className="w-4 h-4" />
                    <span>24-Hour Reporting Window</span>
                  </div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  <div className="text-amber-700 flex items-center gap-1">
                    <BadgeDollarSign className="w-4 h-4" />
                    <span>Fast Refund Processing</span>
                  </div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  <div className="text-amber-700 flex items-center gap-1">
                    <HelpCircle className="w-4 h-4" />
                    <span>Dedicated Support</span>
                  </div>
                </div>
                
                <p className="text-amber-800 text-sm">
                  We stand behind our products and want to ensure your complete satisfaction. Our simple refund process helps resolve issues quickly and efficiently.
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
            Return Policy
          </button>
          <button
            onClick={() => setActiveTab("check")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
              activeTab === "check" 
                ? "bg-amber-600 text-white" 
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            Check Eligibility
          </button>
          <button
            onClick={() => setActiveTab("request")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
              activeTab === "request" 
                ? "bg-amber-600 text-white" 
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            Request Refund
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
            {/* Core policy cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <RotateCcw className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 mb-2">Return Policy</h2>
                <p className="text-amber-700 text-sm">
                  Due to the perishable nature of our products, we do not accept physical returns. However, we assess all issues case by case.
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <BadgeDollarSign className="w-8 h-8 text-amber-600" />
                </div>

                <h2 className="text-xl font-semibold text-amber-800 mb-2">Refund Policy</h2>
                <p className="text-amber-700 text-sm">
                  We offer full refunds for damaged products, incorrect items, or incomplete deliveries when reported within 24 hours of receipt.
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <HelpCircle className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 mb-2">Support Process</h2>
                <p className="text-amber-700 text-sm">
                  Our dedicated team reviews each refund request personally to ensure fast resolution and the best possible customer experience.
                </p>
              </div>
            </div>
            
            {/* Policy details */}
            <div className="prose prose-amber max-w-none">
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">Our Refund Policy in Detail</h3>
              
              <p className="text-amber-700 mb-4">
                At Mozatto, we take pride in delivering the highest quality Potato Cheese Bread to your doorstep. However, we understand that sometimes things don&apos;t go as planned. Here&apos;s our comprehensive refund policy:
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-amber-800 mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Eligible for Refund
                </h4>
                <ul className="list-disc pl-8 text-amber-700 space-y-1">
                  <li>Products damaged during delivery</li>
                  <li>Incorrect items received</li>
                  <li>Incomplete orders (missing items)</li>
                  <li>Quality issues (mold, spoilage, foreign objects)</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-amber-800 mb-2 flex items-center">
                  <XCircle className="w-5 h-5 text-amber-600 mr-2" />
                  Not Eligible for Refund
                </h4>
                <ul className="list-disc pl-8 text-amber-700 space-y-1">
                  <li>Personal taste preferences</li>
                  <li>Issues reported after 24 hours from delivery</li>
                  <li>Improper storage by the customer</li>
                  <li>Orders consumed despite visible issues</li>
                </ul>
              </div>
              
              <h4 className="text-lg font-medium text-amber-800 mb-2">Reporting Timeframe</h4>
              <p className="text-amber-700 mb-4">
                All issues must be reported within 24 hours of delivery. This timeframe is crucial for us to properly assess product quality issues and ensure you receive the best possible resolution.
              </p>
              
              <h4 className="text-lg font-medium text-amber-800 mb-2">Documentation Required</h4>
              <p className="text-amber-700 mb-4">
                To process your refund efficiently, please provide:
              </p>
              <ul className="list-disc pl-8 text-amber-700 space-y-1 mb-4">
                <li>Your order number</li>
                <li>Clear photos of the issue (for damaged/incorrect products)</li>
                <li>Brief description of the problem</li>
              </ul>
              
              <h4 className="text-lg font-medium text-amber-800 mb-2">Processing Time</h4>
              <p className="text-amber-700 mb-4">
                Once approved, refunds are typically processed within 24-48 hours. The funds may take 3-5 business days to appear in your account, depending on your bank or payment provider.
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-4">
                <h4 className="text-md font-medium text-amber-800 mb-2 flex items-center">
                  <Phone className="w-5 h-5 text-amber-600 mr-2" />
                  Contact Us
                </h4>
                <p className="text-sm text-amber-700">
                  If you have any questions about our refund policy or need assistance with a specific issue, please contact our customer support team at <a href="mailto:support@mozatto.com" className="text-amber-600 hover:underline">support@mozatto.com</a> or call <a href="tel:+15551234567" className="text-amber-600 hover:underline">+1 (555) 123-4567</a>.
                </p>
              </div>
            </div>
            
            {/* Refund process */}
            <RefundProcess />
          </section>
        )}
        
        {activeTab === "check" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Check Your Refund Eligibility</h2>
            <p className="text-amber-700 mb-8">
              Use our interactive tool below to quickly determine if your issue qualifies for a refund under our policy. This will help you understand your options before submitting a formal request.
            </p>
            
            <RefundEligibilityChecker />
          </section>
        )}
        
        {activeTab === "request" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Request a Refund</h2>
            <p className="text-amber-700 mb-8">
              If you&apos;ve experienced an issue with your order, please fill out the form below. Our team will review your request and get back to you within 24 hours.
            </p>
            
            <RefundRequestForm />
          </section>
        )}
        
        {activeTab === "faq" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-amber-700 mb-8">
              Find answers to common questions about our refund process and policies. If you can&apos;t find what you&apos;re looking for, please contact our support team.
            </p>
            
            <div className="divide-y divide-amber-200">
              {faqData.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-700 text-sm">
                Have a question not answered here? Contact our customer support team at{" "}
                <a href="mailto:cisbredmozatto@gmail.com" className="text-amber-600 hover:underline">cisbredmozatto@gmail.com</a>
              </p>
            </div>
          </section>
        )}
        
        {/* Footer CTA */}
        <section className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-amber-800 mb-3">Still Have Questions?</h2>
          <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
            Our dedicated customer support team is ready to assist you with any questions or concerns about our products or refund process.
          </p>
          <a 
            href="/contact-us"
            className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Contact Support
          </a>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}