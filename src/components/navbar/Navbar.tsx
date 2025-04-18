"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ShoppingBag, Home, Cake, Users, 
  MessageCircle, PhoneCall, Instagram, Send, 
  X as XIcon, ChevronRight, ChevronLeft, ArrowRight, ShoppingCart, Truck
} from 'lucide-react';

// Definisi tipe untuk props komponen
interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

interface OrderOptionProps {
  name: string;
  logo: React.ReactNode;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  link: string;
  description: string;
}

interface ProductImageProps {
  src: string;
  alt: string;
}

// Custom TikTok icon karena tidak tersedia di Lucide
const TiktokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
    <path d="M15 8v7a4 4 0 0 1-4 4"></path>
    <path d="M15 5v3h3"></path>
    <path d="M16 8a5 5 0 0 0 5 5v-3a2 2 0 0 1-2-2h-3z"></path>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showOrderOptions, setShowOrderOptions] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const slideshowInterval = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = (): void => setIsOpen(!isOpen);
  const toggleOrderOptions = (): void => setShowOrderOptions(!showOrderOptions);

  // Sample product images for slideshow
  const productImages: ProductImageProps[] = [
    { src: "/mozattooriginal.png", alt: "Mozatto Cheese Bread" },
    { src: "/mozattocoklat.png", alt: "Mozatto Chocolate Bread" },
    { src: "/mozattotiramisu.png", alt: "Mozatto Tiramisu Bread" },
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowOrderOptions(false);
      }
    };

    if (showOrderOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOrderOptions]);

  // Mencegah scroll saat modal terbuka
  useEffect(() => {
    if (showOrderOptions) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showOrderOptions]);

  // Slideshow autoplay
  useEffect(() => {
    if (slideshowInterval.current) {
      clearInterval(slideshowInterval.current);
    }
    
    slideshowInterval.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % productImages.length);
    }, 3000);
    
    return () => {
      if (slideshowInterval.current) {
        clearInterval(slideshowInterval.current);
      }
    };
  }, [productImages.length]);

  // Fungsi untuk navigasi slideshow
  const goToSlide = (index: number): void => {
    setActiveSlide(index);
    // Reset interval saat navigasi manual
    if (slideshowInterval.current) {
      clearInterval(slideshowInterval.current);
      slideshowInterval.current = setInterval(() => {
        setActiveSlide(prev => (prev + 1) % productImages.length);
      }, 3000);
    }
  };

  const closeOrderOptions = (): void => {
    setShowOrderOptions(false);
  };  

  const nextSlide = (): void => {
    goToSlide((activeSlide + 1) % productImages.length);
  };

  const prevSlide = (): void => {
    goToSlide(activeSlide === 0 ? productImages.length - 1 : activeSlide - 1);
  };

  // Opsi pemesanan dengan icon dari Lucide
  const orderOptions: OrderOptionProps[] = [
    {
      name: "GoFood",
      logo: (
        <div className="bg-white rounded-full p-1 h-8 w-8 flex items-center justify-center">
          <Image 
            src="/gofood.jpg"
            alt="GoFood"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ),
      icon: <ShoppingCart size={20} />,
      color: "text-green-500",
      gradient: "from-green-500/10 to-green-400/30",
      link: "https://gofood.co.id/jakarta/restaurant/mozatto-5b9a34aa-11f9-4fb9-8303-b5a5fb379585",
      description: "Bebas ongkir hingga 10km"
    },
    {
      name: "ShopeeFood",
      logo: (
        <div className="bg-white rounded-full p-1 h-8 w-8 flex items-center justify-center">
          <Image 
            src="/shopeefood.png"
            alt="ShopeeFood"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ),
      icon: <ShoppingBag size={20} />,
      color: "text-orange-500",
      gradient: "from-orange-500/10 to-orange-400/30",
      link: "https://shopee.co.id/mozatto346",
      description: "Diskon 20% untuk pengguna baru"
    },
    {
      name: "GrabFood",
      logo: (
        <div className="bg-white rounded-full p-1 h-8 w-8 flex items-center justify-center">
          <Image 
            src="/grabfood.png"
            alt="GrabFood"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ),
      icon: <Truck size={20} />,
      color: "text-green-600",
      gradient: "from-green-600/10 to-green-500/30",
      link: "https://food.grab.com/id/en/restaurant/mozatto-pancoran-mas-depok-delivery/",
      description: "Gratis ongkir untuk pembelian pertama"
    },
    {
        name: "WhatsApp",
        logo: (
          <div className="bg-white rounded-full p-1 h-8 w-8 flex items-center justify-center">
            <Image 
              src="/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        ),
        icon: <Send size={20} />,
        color: "text-green-500",
        gradient: "from-green-500/10 to-green-400/30",
        link: "https://wa.me/6281929014069?text=Halo%20Mimo!%20Saya%20ingin%20memesan%20Potato%20Cheese%20Breadnya!",
        description: "Pesan langsung via chat"
      },      
    {
      name: "Instagram",
      logo: (
        <div className="bg-white rounded-full p-1 h-8 w-8 flex items-center justify-center">
          <Image 
            src="/instagram.png"
            alt="Instagram"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ),
      icon: <Instagram size={20} />,
      color: "text-pink-600",
      gradient: "from-pink-600/10 to-pink-400/30",
      link: "https://instagram.com/mozatto.id",
      description: "DM kami untuk pemesanan khusus"
    },
    {
      name: "TikTok",
      logo: (
        <div className="bg-white rounded-full p-1 h-8 w-8 flex items-center justify-center">
          <Image 
            src="/tiktok.webp"
            alt="TikTok"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      ),
      icon: <TiktokIcon size={20} />,
      color: "text-black",
      gradient: "from-gray-700/10 to-gray-900/30",
      link: "https://tiktok.com/@mozatto.id",
      description: "Lihat video produk kami"
    }
  ];
  

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'py-2 backdrop-blur-md bg-white/50 shadow-lg' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo - Larger and positioned left */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative h-16 w-16 transition-all duration-300 group overflow-hidden rounded-full shadow-lg hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-600 opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
                  <Image 
                    src="/LOGO ROTI PBL.png" 
                    alt="Logo Mozatto" 
                    fill
                    className="object-contain p-1 transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 40px, 64px"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent hidden sm:block leading-tight" style={{ fontFamily: "'poppins', sans-serif"}}>
                    Mozatto
                  </h1>
                  <div className="flex items-center space-x-1 hidden sm:flex">
                    <span className="text-sm italic text-orange-500 font-medium" style={{ fontFamily: "'poppins', sans-serif"}}>Molor Terus Kejunya!</span>
                    <span className="animate-bounce text-yellow-500">✨</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Navigation - Centered with rounded background */}
            <div className="hidden md:flex justify-center items-center">
              <div className="bg-orange-50 bg-opacity-85 backdrop-blur-sm rounded-full px-2 py-1 shadow-md border border-orange-100">
                <div className="flex" style={{ fontFamily: "'poppins', sans-serif"}}>
                  <NavLink href="/" icon={<Home size={18} />} text="Home" />
                  <NavLink href="/produk" icon={<Cake size={18} />} text="Produk" />
                  <NavLink href="/tentang-kami" icon={<Users size={18} />} text="Tentang Kami" />
                  <NavLink href="/testimoni" icon={<MessageCircle size={18} />} text="Testimoni" />
                  <NavLink href="/kontak" icon={<PhoneCall size={18} />} text="Kontak" />
                </div>
              </div>
            </div>

            {/* Right Side - Action Button */}
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleOrderOptions}
                className="px-4 py-2 bg-gradient-to-br cursor-pointer from-orange-500 via-orange-400 to-yellow-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:translate-y-px transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <ShoppingBag size={16} strokeWidth={2.5} className="transform group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline font-semibold" style={{ fontFamily: "'poppins', sans-serif"}}>Pesan Sekarang</span>
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                onClick={toggleMenu} 
                className="md:hidden p-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 hover:text-orange-600 transition-all shadow"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 space-y-1 border border-orange-100">
              <MobileNavLink href="/" icon={<Home size={18} />} text="Home" onClick={toggleMenu} />
              <MobileNavLink href="/produk" icon={<Cake size={18} />} text="Produk" onClick={toggleMenu} />
              <MobileNavLink href="/tentang-kami" icon={<Users size={18} />} text="Tentang Kami" onClick={toggleMenu} />
              <MobileNavLink href="/testimoni" icon={<MessageCircle size={18} />} text="Testimoni" onClick={toggleMenu} />
              <MobileNavLink href="/kontak" icon={<PhoneCall size={18} />} text="Kontak" onClick={toggleMenu} />
              
              <div className="pt-2 mt-2 border-t border-orange-100">
                <button
                  onClick={() => {
                    toggleMenu();
                    setTimeout(() => toggleOrderOptions(), 300);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <ShoppingBag size={18} />
                  <span>Pesan Sekarang</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Slideshow - Desktop Only */}
      <div className="hidden md:block fixed top-28 right-4 z-30 w-64 h-40 rounded-2xl shadow-lg overflow-hidden">
        <div className="relative w-full h-full">
          {/* Slides */}
          {productImages.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                  <p className="text-white text-sm font-medium mb-[10px]" style={{ fontFamily: "'poppins', sans-serif"}} >{image.alt}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 p-1 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 p-1 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-all"
          >
            <ChevronRight size={16} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === activeSlide 
                    ? 'bg-white w-3' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Order Options Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-200 ${
        showOrderOptions ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-700 ${
        showOrderOptions ? 'opacity-100' : 'opacity-0'
        }`} />

        
        {/* Desktop Modal */}
        <div 
          ref={modalRef}
          className={`bg-white rounded-3xl shadow-2xl w-full max-w-2xl mx-4 relative transform transition-all duration-200 overflow-hidden ${
            showOrderOptions ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
          } hidden md:block`}
        >
          {/* Header with Mozatto Branding */}
          <div className="bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative h-12 w-12 bg-white rounded-full p-1 shadow-lg">
                  <Image 
                    src="/LOGO ROTI PBL.png" 
                    alt="Logo Mozatto" 
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent text-xl font-bold" style={{ fontFamily: "'poppins', sans-serif"}}>
                    Mozatto
                  </h3>
                  <p className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent text-sm" style={{ fontFamily: "'poppins', sans-serif"}}>
                    Pilih cara pemesanan favorit Anda
                  </p>
                </div>
              </div>
              <button 
                onClick={(e) => {
                    e.stopPropagation(); // cegah dianggap klik luar
                    closeOrderOptions();
                }}
                className="p-2 rounded-full bg-orange-300 hover:bg-orange-400 transition-colors text-white cursor-pointer"
                >
                <XIcon size={20} />
                </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4">
              {orderOptions.map((option, index) => (
                <a 
                  key={index}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center p-5 rounded-2xl border border-gray-100 bg-gradient-to-br hover:border-gray-200 transition-all duration-200 group overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${option.gradient})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  
                  {/* Logo */}
                  <div className="mb-3">
                    {option.logo}
                  </div>
                  
                  {/* Name */}
                  <span className={`font-semibold text-base mb-1 ${option.color}`} style={{ fontFamily: "'poppins', sans-serif"}}>{option.name}</span>
                  
                  {/* Description */}
                  <span className="text-xs text-gray-500 text-center mb-3">{option.description}</span>
                  
                  {/* Order Button */}
                  <div className={`mt-auto flex items-center justify-center space-x-1 text-xs font-medium ${option.color} opacity-70 group-hover:opacity-100 transition-all`}>
                    <span>Pesan</span>
                    <ArrowRight size={12} />
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute top-3 right-3 ${option.color} opacity-20 group-hover:opacity-30 transition-opacity`}>
                    {option.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Modal - Redesigned for better mobile experience */}
        <div 
          ref={modalRef}
          className={`bg-white rounded-t-3xl shadow-2xl w-full max-h-[85vh] overflow-y-auto absolute bottom-0 transform transition-all duration-300 ${
            showOrderOptions ? 'translate-y-0' : 'translate-y-full'
          } md:hidden`}
        >
          {/* Pull indicator */}
          <div className="w-full flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
          </div>
          
          {/* Header with Mozatto Branding */}
          <div className="px-5 pt-2 pb-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full p-1 shadow-md">
                <Image 
                  src="/LOGO ROTI PBL.png" 
                  alt="Logo Mozatto" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-gray-800 text-lg font-bold" style={{ fontFamily: "'poppins', sans-serif"}}>
                  Mozatto
                </h3>
                <p className="text-gray-500 text-xs">
                  Molor Terus Kejunya!
                </p>
              </div>
            </div>
            <button 
              onClick={toggleOrderOptions}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500"
            >
              <XIcon size={18} />
            </button>
          </div>
          
          <div className="px-5 pb-8">
            <h4 className="text-sm font-medium text-gray-500 mb-3">PILIH METODE PEMESANAN</h4>
            
            <div className="space-y-3">
              {orderOptions.map((option, index) => (
                <a 
                  key={index}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 bg-white hover:bg-gray-50 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    {/* Logo */}
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${option.gradient}`}>
                      {option.icon}
                    </div>
                    
                    {/* Info */}
                    <div>
                      <p className="font-medium text-gray-800" style={{ fontFamily: "'poppins', sans-serif"}}>
                        {option.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`${option.color}`}>
                    <ChevronRight size={18} />
                  </div>
                </a>
              ))}
            </div>
            
            {/* Promo Banner */}
            <div className="mt-5 bg-orange-50 rounded-xl p-4 border border-orange-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-500/10 rounded-full text-orange-500">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-orange-800" style={{ fontFamily: "'poppins', sans-serif"}}>
                    Promo Spesial!
                  </p>
                  <p className="text-xs text-orange-600">
                    Gratis 1 roti untuk pembelian 5 roti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Component untuk desktop navigation links
const NavLink: React.FC<NavLinkProps> = ({ href, icon, text }) => (
  <Link 
    href={href} 
    className="px-4 py-2 mx-1 rounded-full text-orange-800 hover:bg-orange-200 hover:text-orange-600 transition-all duration-200 flex items-center gap-2 font-medium"
  >
    <span className="text-orange-500">{icon}</span>
    <span>{text}</span>
  </Link>
);

// Component untuk mobile navigation links
const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, icon, text, onClick }) => (
  <Link 
    href={href} 
    onClick={onClick} 
    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-orange-100 transition-all duration-200"
  >
    <div className="p-2 bg-orange-100 rounded-full text-orange-500">
      {icon}
    </div>
    <span className="font-medium text-gray-800" style={{ fontFamily: "'poppins', sans-serif"}}>{text}</span>
  </Link>
);

export default Navbar;