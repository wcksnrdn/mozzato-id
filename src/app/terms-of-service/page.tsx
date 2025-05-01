"use client";

import { useState } from "react";
import { 
  FileText, 
  Handshake, 
  AlertTriangle, 
  ChevronDown, 
  ChevronRight, 
  Shield, 
  Globe, 
  Clock,
  Scale,
  Check,
  UserCheck,
  FileQuestion,
  CornerRightDown,
  RefreshCcw,
  CheckSquare
} from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Terms of Service Accordion component
import { ReactNode } from "react";

const TermsSectionAccordion = ({ title, children }: { title: string; children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-amber-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-medium text-amber-900">{title}</span>
        <ChevronDown className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      
      {isOpen && (
        <div className="mt-3 text-sm text-amber-700 pl-1">
          {children}
        </div>
      )}
    </div>
  );
};

// Terms Version History component
const TermsVersionHistory = () => {
  const versions = [
    {
      version: "v3.0",
      date: "April 15, 2025",
      changes: [
        "Updated payment terms and refund policy",
        "Added section on international shipping",
        "Clarified intellectual property rights"
      ]
    },
    {
      version: "v2.5",
      date: "November 10, 2024",
      changes: [
        "Updated dispute resolution process",
        "Added section on user-generated content",
        "Revised limitation of liability clause"
      ]
    },
    {
      version: "v2.0",
      date: "June 22, 2024",
      changes: [
        "Major revision of terms structure",
        "Added privacy compliance section",
        "Updated account termination policy"
      ]
    },
    {
      version: "v1.0",
      date: "January 5, 2024",
      changes: [
        "Initial terms of service released"
      ]
    }
  ];
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-amber-800 mb-4">Terms Version History</h3>
      
      <div className="relative pl-6 border-l-2 border-amber-200">
        {versions.map((version, index) => (
          <div key={index} className={`relative pb-6 ${index !== versions.length - 1 ? "" : ""}`}>
            <div className="absolute -left-[21px] bg-white p-1">
              <div className="w-6 h-6 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center">
                <Clock className="w-3 h-3 text-amber-600" />
              </div>
            </div>
            
            <div className="mb-1">
              <h4 className="text-md font-semibold text-amber-800 inline-block mr-3">{version.version}</h4>
              <span className="text-sm text-amber-600">{version.date}</span>
            </div>
            
            <ul className="space-y-1 mt-2">
              {version.changes.map((change, changeIndex) => (
                <li key={changeIndex} className="flex items-start">
                  <CornerRightDown className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-amber-700">{change}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// Terms Acceptance Checkbox component
const TermsAcceptance = () => {
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (accepted) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 rounded-lg border border-green-200 p-6 text-center">
        <Check className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-700 mb-2">Terms Accepted</h3>
        <p className="text-sm text-green-600 mb-4">
          Thank you for accepting our Terms of Service. You can now continue using our platform with full access to all features.
        </p>
        <button 
          onClick={() => {
            setAccepted(false);
            setSubmitted(false);
          }}
          className="text-white bg-amber-600 px-4 py-2 rounded hover:bg-amber-700 transition-colors"
        >
          Return to Terms
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-amber-50 rounded-lg border border-amber-200 p-6">
      <h3 className="text-lg font-semibold text-amber-800 mb-4">Accept Terms of Service</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="text-sm text-amber-700 mb-4">
            To use our services, you must read and agree to our Terms of Service. By checking the box below, you acknowledge that you have read, understood, and agree to be bound by these terms.
          </p>
          
          <div className="flex items-start mt-4">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
                className="w-4 h-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500"
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm text-amber-700">
              I have read and agree to the Terms of Service and Privacy Policy
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={!accepted}
          className={`w-full py-2 rounded-md flex items-center justify-center gap-2 ${
            accepted ? "bg-amber-600 text-white hover:bg-amber-700" : "bg-amber-200 text-amber-500 cursor-not-allowed"
          } transition-colors`}
        >
          <CheckSquare className="w-4 h-4" />
          Accept Terms
        </button>
      </form>
    </div>
  );
};

// Common Questions Component
const CommonQuestions = () => {
  const questions = [
    {
      question: "How can I cancel my subscription?",
      answer: "You can cancel your subscription at any time through your account settings. Navigate to 'Subscriptions' and click 'Cancel Subscription'. Your access will continue until the end of your current billing period."
    },
    {
      question: "What happens to my data if I close my account?",
      answer: "When you close your account, we retain your data for 30 days in case you change your mind. After this period, all personal information is permanently deleted from our active systems, though some information may remain in our backups for up to 90 days."
    },
    {
      question: "Can I use Mozatto content for commercial purposes?",
      answer: "No, all content on Mozatto is for personal, non-commercial use only. If you wish to use our content commercially, you must obtain written permission first. Contact our licensing team at licensing@mozatto.com for inquiries."
    },
    {
      question: "How do I report violations of these terms?",
      answer: "If you believe someone is violating our Terms of Service, please report it immediately by emailing support@mozatto.com with details of the violation. Our team will investigate and take appropriate action."
    }
  ];
  
  return (
    <div className="bg-white rounded-lg border border-amber-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
        <FileQuestion className="w-5 h-5 mr-2 text-amber-600" />
        Common Questions
      </h3>
      
      <div className="space-y-1">
        {questions.map((item, index) => (
          <TermsSectionAccordion key={index} title={item.question}>
            <p>{item.answer}</p>
          </TermsSectionAccordion>
        ))}
      </div>
    </div>
  );
};

export default function TermsOfServicePage() {
  const [activeTab, setActiveTab] = useState("main");
  
  // Detailed terms sections
  const termsSections = [
    {
      id: "account",
      title: "Account Terms",
      icon: <UserCheck className="w-6 h-6 text-amber-600" />,
      content: (
        <>
          <p className="mb-3 text-amber-600">You are responsible for maintaining the security of your account and password. Mozatto cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.</p>
          
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 my-4">
            <h4 className="font-medium text-amber-700 mb-2">Account Requirements</h4>
            <ul className="list-disc pl-5 text-sm text-amber-700 space-y-1">
              <li>You must be at least 18 years old to create an account</li>
              <li>You must provide accurate and complete information during registration</li>
              <li>You are responsible for all activity that occurs under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
            </ul>
          </div>
          
          <p className="mb-3 text-amber-600">We reserve the right to suspend or terminate accounts that violate our terms, engage in fraudulent activity, or pose a security risk to other users.</p>
          
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
            <h4 className="font-medium text-amber-700 mb-2">Account Termination</h4>
            <p className="text-sm text-amber-700">
              You may terminate your account at any time through your account settings. Upon termination, we will delete your profile and remove your access to our services. Some information may be retained as required by law or for legitimate business purposes.
            </p>
          </div>
        </>
      )
    },
    {
      id: "intellectual",
      title: "Intellectual Property",
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      content: (
        <>
          <p className="mb-3 text-amber-600">All rights, title, and interest in and to the Mozatto services, including all content, designs, interfaces, text, graphics, logos, images, videos, and code are the exclusive property of Mozatto and its licensors.</p>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-start">
              <ChevronRight className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-amber-700">Copyright Protection</p>
                <p className="text-sm text-amber-600">All content is protected by copyright laws and may not be copied, reproduced, distributed, or modified without our express written permission.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <ChevronRight className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-amber-700">Trademark Rights</p>
                <p className="text-sm text-amber-600">The Mozatto name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Mozatto or its affiliates.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <ChevronRight className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-amber-700">Limited License</p>
                <p className="text-sm text-amber-600">We grant you a limited, non-exclusive, non-transferable license to access and use our services for personal, non-commercial purposes.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 mt-4">
            <h4 className="font-medium text-amber-700 mb-2">Reporting Infringement</h4>
            <p className="text-sm text-amber-700">
              If you believe your intellectual property rights have been violated, please contact us at <span className="text-amber-600">legal@mozatto.com</span> with details of the alleged infringement.
            </p>
          </div>
        </>
      )
    },
    {
      id: "modifications",
      title: "Service Modifications",
      icon: <RefreshCcw className="w-6 h-6 text-amber-600" />,
      content: (
        <>
          <p className="mb-3 text-amber-600">Mozatto reserves the right to modify, suspend, or discontinue any part of our services at any time, with or without notice. We may also change our terms, policies, fees, or other aspects of our services.</p>
          
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 my-4">
            <h4 className="font-medium text-amber-700 mb-2">Types of Changes</h4>
            <ul className="list-disc pl-5 text-sm text-amber-700 space-y-1">
              <li>Feature updates and improvements</li>
              <li>Removal of obsolete functionality</li>
              <li>Changes to pricing or payment terms</li>
              <li>Updates to reflect changes in laws or regulatory requirements</li>
              <li>Security enhancements</li>
            </ul>
          </div>
          
          <p className="mb-3 text-amber-600">When we make material changes to these terms, we will provide notice through our website or by other means as appropriate. Your continued use of our services after such changes constitutes your acceptance of the new terms.</p>
          
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
            <div className="flex items-center mb-1">
              <AlertTriangle className="w-4 h-4 text-amber-600 mr-2" />
              <h5 className="font-medium text-amber-700">Important Notice</h5>
            </div>
            <p className="text-sm text-amber-600 pl-6">
              If you do not agree with the new terms, you must stop using our services. We encourage you to review our terms regularly to stay informed about any changes.
            </p>
          </div>
        </>
      )
    },
    {
      id: "governing",
      title: "Governing Law",
      icon: <Scale className="w-6 h-6 text-amber-600" />,
      content: (
        <>
          <p className="mb-3 text-amber-600">These terms and your use of our services are governed by and construed in accordance with the laws of the Republic of Indonesia, without regard to its conflict of law provisions.</p>
          
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 my-4">
            <h4 className="font-medium text-amber-700 mb-2">Dispute Resolution</h4>
            <p className="text-sm text-amber-700 mb-3">
              Any legal action or proceeding arising out of these terms shall be settled exclusively in the courts located in Jakarta, Indonesia. You consent to the personal jurisdiction and venue in such courts.
            </p>
            
            <h5 className="font-medium text-amber-700 mb-1">Dispute Process:</h5>
            <ol className="list-decimal pl-5 text-sm text-amber-700 space-y-1">
              <li>Attempt to resolve the dispute informally by contacting us first</li>
              <li>If informal resolution fails, submit a formal complaint in writing</li>
              <li>We will respond to formal complaints within 30 days</li>
              <li>If the matter remains unresolved, either party may pursue legal action</li>
            </ol>
          </div>
          
          <p className="mb-3 text-amber-600">Nothing in these terms shall prevent either party from seeking injunctive or other equitable relief from the courts for matters related to data security, intellectual property, or unauthorized access.</p>
          
          <div className="flex items-start mt-4">
            <Globe className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-700">
              If you access our services from outside Indonesia, you are responsible for complying with local laws and regulations.
            </p>
          </div>
        </>
      )
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
                Terms of Service
              </h1>
              <p className="text-lg text-amber-900 max-w-2xl mx-auto">
                By accessing and using Mozatto, you agree to the following terms and conditions. Please read them carefully.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 max-w-xl w-full border border-amber-200 shadow-lg">
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium border-b border-amber-200 pb-3 mb-3">
                  <div className="text-amber-700 flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>Legal Agreement</span>
                  </div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  <div className="text-amber-700 flex items-center gap-1">
                    <Scale className="w-4 h-4" />
                    <span>Binding Terms</span>
                  </div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                  <div className="text-amber-700 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Last Updated</span>
                  </div>
                </div>
                
                <p className="text-amber-800 text-sm">
                  Last updated: April 15, 2025. These terms constitute a legally binding agreement between you and Mozatto governing your use of our services.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Navigation tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("main")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
              activeTab === "main" 
                ? "bg-amber-600 text-white" 
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            Main Terms
          </button>
          <button
            onClick={() => setActiveTab("detailed")}
            className={`px-4 py-2 rounded-lg cursor-pointertransition-colors duration-200 ${
              activeTab === "detailed" 
                ? "bg-amber-600 text-white" 
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            Detailed Terms
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
              activeTab === "history" 
                ? "bg-amber-600 text-white" 
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            Version History
          </button>
          <button
            onClick={() => setActiveTab("questions")}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
              activeTab === "questions" 
                ? "bg-amber-600 text-white" 
                : "bg-white text-amber-800 hover:bg-amber-100"
            }`}
          >
            Questions
          </button>
        </div>
        
        {activeTab === "main" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            {/* Main terms highlights */}
            <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <FileText className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 mb-2">Use of Service</h2>
                <p className="text-amber-700 text-sm">
                  All content on this website is for personal, non-commercial use. Republishing without permission is not allowed.
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <Handshake className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 mb-2">User Responsibility</h2>
                <p className="text-amber-700 text-sm">
                  You agree to provide accurate information and not engage in fraudulent or harmful behavior while using our services.
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <AlertTriangle className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 mb-2">Limitation of Liability</h2>
                <p className="text-amber-700 text-sm">
                  Mozatto is not liable for any direct or indirect loss caused by misuse of the website or service interruption.
                </p>
              </div>
            </div>
            
            {/* Main terms highlights */}
            <div className="border-t border-amber-200 pt-8 space-y-6 text-amber-800 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Account</h3>
                <p className="text-sm">
                  You are responsible for maintaining the confidentiality of your account and password. Notify us immediately if you suspect unauthorized access.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Intellectual Property</h3>
                <p className="text-sm">
                  All designs, text, images, and logos are owned by Mozatto. They may not be copied or reused without written consent.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Service Modifications</h3>
                <p className="text-sm">
                  We reserve the right to change, suspend, or discontinue parts of the service at any time without prior notice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Governing Law</h3>
                <p className="text-sm">
                  These terms are governed by the laws of the Republic of Indonesia. Any disputes shall be resolved under local jurisdiction.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p className="text-sm">
                  If you have any questions about these terms, contact us at <span className="underline text-amber-600">support@mozatto.com</span>.
                </p>
              </div>
            </div>
            
            {/* Terms Acceptance */}
            <TermsAcceptance />
          </section>
        )}
        
        {activeTab === "detailed" && (
          <section className="grid md:grid-cols-3 gap-8">
            {/* Left sidebar navigation */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-amber-100 h-fit">
              <h3 className="text-lg font-semibold text-amber-800 mb-4">Sections</h3>
              <nav className="space-y-2">
                {termsSections.map((section) => (
                  <a 
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center p-2 rounded-lg text-amber-700 hover:bg-amber-50 transition-colors"
                  >
                    <div className="mr-3">{section.icon}</div>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Main content area */}
            <div className="md:col-span-2 space-y-8">
              {termsSections.map((section) => (
                <div 
                  key={section.id}
                  id={section.id}
                  className="bg-white shadow-lg rounded-xl p-6 border border-amber-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 rounded-full p-2 mr-3">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-amber-800">{section.title}</h3>
                  </div>
                  
                  <div className="prose prose-amber max-w-none">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {activeTab === "history" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            <TermsVersionHistory />
          </section>
        )}
        
        {activeTab === "questions" && (
          <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-amber-100">
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">Common Questions</h3>
            <p className="text-amber-700 mb-6">
              Find answers to common questions about our Terms of Service below. If you can&apos;t find what you&apos;re looking for, please contact our support team.
            </p>
            <CommonQuestions />
          </section>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
}