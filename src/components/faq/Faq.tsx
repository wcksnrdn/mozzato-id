"use client";

import { useState, useEffect, useRef, SetStateAction } from 'react';
import { ChevronDown, Search, MessageSquare, Star, Bookmark, PlusCircle, MinusCircle } from 'lucide-react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [highlightedFAQ, setHighlightedFAQ] = useState<number | null>(null);
  
  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "What makes Mozatto's potato cheese bread so special?",
      answer: "Our potato cheese bread combines premium Idaho potatoes with artisanal cheese using a century-old family recipe. The potatoes create an incredibly moist texture while the cheese melts into pockets of flavor throughout the bread. We use a special 24-hour fermentation process that develops complex flavors you won't find anywhere else.",
      category: "product",
      popularity: 98
    },
    {
      id: 2,
      question: "Are there any preservatives in your potato cheese bread?",
      answer: "We pride ourselves on using only natural ingredients in our potato cheese bread. There are absolutely no artificial preservatives, additives, or flavor enhancers. The bread's exceptional shelf life comes from our special fermentation process and the natural properties of potato starch, not from artificial preservatives.",
      category: "ingredients",
      popularity: 87
    },
    {
      id: 3,
      question: "How should I store my Mozatto potato cheese bread?",
      answer: "For optimal freshness, keep your Mozatto potato cheese bread in its original packaging at room temperature for up to 3 days. For longer storage, slice the bread and freeze it in an airtight container for up to 3 months. To refresh, simply toast directly from frozen or warm in a 350°F oven for 5 minutes.",
      category: "storage",
      popularity: 92
    },
    {
      id: 4,
      question: "Can I place bulk orders for events or restaurants?",
      answer: "Absolutely! We offer special bulk pricing for events and restaurant partnerships. Our potato cheese bread is a favorite at weddings, corporate events, and high-end restaurants. Please contact our wholesale department at wholesale@mozatto.com or use our online form to discuss your specific needs and receive a custom quote.",
      category: "orders",
      popularity: 75
    },
    {
      id: 5,
      question: "Is Mozatto potato cheese bread suitable for vegetarians?",
      answer: "Yes, our potato cheese bread is vegetarian-friendly! We use vegetarian-suitable cheese that doesn't contain animal rennet. However, please note that while vegetarian, our bread does contain dairy products (cheese) and is made in a facility that processes eggs, so it's not suitable for vegans.",
      category: "dietary",
      popularity: 83
    },
    {
      id: 6,
      question: "Do you ship your potato cheese bread nationwide?",
      answer: "Yes! We've perfected a special shipping method that preserves the quality and freshness of our potato cheese bread. We currently ship throughout the continental United States with 2-day and overnight shipping options. Orders placed before 11am EST are baked and shipped the same day.",
      category: "shipping",
      popularity: 90
    },
    {
      id: 7,
      question: "Is there a gluten-free version of your potato cheese bread?",
      answer: "We're currently in the final testing stage of our gluten-free potato cheese bread recipe! After two years of development, we've created a gluten-free version that maintains the same incredible taste and texture our customers love. Sign up for our newsletter to be notified when it launches next month.",
      category: "product",
      popularity: 78
    },
    {
      id: 8,
      question: "How many calories are in a serving of potato cheese bread?",
      answer: "A standard serving (one 2-ounce slice) of our potato cheese bread contains approximately 120 calories. It also provides 4g of protein and is a good source of calcium thanks to our premium cheese blend. Complete nutritional information is available on our Nutrition page and on each product label.",
      category: "nutrition",
      popularity: 81
    }
  ];
  
  // Category data
  const categories = [
    { id: 'all', name: 'All Questions', icon: <MessageSquare size={18} /> },
    { id: 'product', name: 'Our Products', icon: <Star size={18} /> },
    { id: 'ingredients', name: 'Ingredients', icon: <PlusCircle size={18} /> },
    { id: 'dietary', name: 'Dietary Info', icon: <Bookmark size={18} /> },
    { id: 'storage', name: 'Storage & Care', icon: <MinusCircle size={18} /> },
    { id: 'shipping', name: 'Shipping', icon: <MinusCircle size={18} /> },
    { id: 'orders', name: 'Orders', icon: <MinusCircle size={18} /> },
    { id: 'nutrition', name: 'Nutrition', icon: <MinusCircle size={18} /> }
  ];
  
  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Setup intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const toggleFAQ = (index: number | null) => {
      setActiveIndex(activeIndex === index ? null : index);
      setHighlightedFAQ(index);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-amber-100 to-amber-700 relative overflow-hidden" style={{ fontFamily: 'poppins, sans-serif' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-20 w-96 h-96 bg-amber-100 rounded-full opacity-80 transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-80 left-0 w-80 h-80 bg-amber-200 rounded-full opacity-100 transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        {/* Decorative bread icon patterns */}
        <div className="absolute top-20 left-10 text-amber-200 opacity-10">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 text-amber-200 opacity-10">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-amber-900 mb-4 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-amber-700 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            Everything you need to know about our renowned potato cheese bread. Can't find your answer? Contact our friendly team anytime.
          </p>
        </div>
        
        {/* Search and category filters */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search bar */}
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-3 flex items-center text-amber-500">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm transition-all"
              />
            </div>
            
            {/* Popular questions prompt */}
            <div className="hidden md:block self-center text-amber-600 italic">
              {searchTerm ? `${filteredFaqs.length} results found` : 'Or browse by category'}
            </div>
          </div>
          
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`mb-4 border border-amber-200 rounded-xl overflow-hidden shadow-sm transition-all duration-500 ${
                  activeIndex === index ? 'shadow-md bg-white' : 'bg-amber-50'
                } ${
                  highlightedFAQ === index ? 'ring-2 ring-amber-400' : ''
                }`}
              >
                <button
                  className="w-full text-left p-5 flex justify-between items-center transition-all"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center">
                    <div className={`mr-4 text-xs px-2 py-1 rounded-full ${
                      faq.popularity > 90 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {faq.popularity > 90 ? 'Popular' : categories.find(c => c.id === faq.category)?.name}
                    </div>
                    <h3 className="font-medium text-amber-900">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`transform transition-transform text-amber-600 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all max-h-0 ${
                    activeIndex === index ? 'max-h-96' : ''
                  }`}
                >
                  <div className="p-5 pt-0 border-t border-amber-100">
                    <p className="text-amber-800 leading-relaxed">{faq.answer}</p>
                    
                    {/* Extra actions */}
                    <div className="mt-4 flex justify-between items-center pt-3 border-t border-amber-100">
                      <span className="text-amber-500 text-sm">Was this helpful?</span>
                      <div className="flex gap-2">
                        <button className="text-amber-600 hover:text-amber-800 text-sm flex items-center">
                          <span className="mr-1">👍</span> Yes
                        </button>
                        <button className="text-amber-600 hover:text-amber-800 text-sm flex items-center">
                          <span className="mr-1">👎</span> No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-8 bg-amber-50 rounded-xl border border-amber-200">
              <div className="text-amber-600 mb-2 text-5xl">🔍</div>
              <h3 className="text-xl font-medium text-amber-900 mb-2">No matching questions found</h3>
              <p className="text-amber-700 mb-4">Try adjusting your search or category filters.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}
                className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
        
        {/* Contact CTA */}
        <div className={`mt-16 max-w-3xl mx-auto bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white shadow-xl transition-all duration-1000 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
              <p className="text-amber-100">Our bread experts are ready to help with any questions about our potato cheese bread.</p>
            </div>
            <div className="shrink-0">
              <button className="bg-white text-amber-600 hover:bg-amber-100 font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}