'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const servicesRef = useRef<HTMLLIElement | null>(null);
  const resourcesRef = useRef<HTMLLIElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Mobile dropdowns
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="flex justify-between items-center py-5 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-primary to-indigo-400 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold shadow-md transform transition-transform active:scale-95">H</div>
            <div className="font-bold text-2xl text-gray-800">Helix Processing</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex space-x-10">
            <li>
              <Link href="/" prefetch={true} scroll={true} passHref className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                <span onClick={() => window.location.href = '/'}>Home</span>
              </Link>
            </li>
            <li className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setResourcesDropdownOpen(false);
                }}
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center"
              >
                Services
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100 animate-fadeIn">
                  <Link href="/services" prefetch={true} scroll={true} passHref className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <div onClick={() => window.location.href = '/services'}>All Services</div>
                  </Link>
                  <Link href="/services/ai-customer-support" prefetch={true} scroll={true} passHref className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <div onClick={() => window.location.href = '/services/ai-customer-support'}>AI Customer Support</div>
                  </Link>
                  <Link href="/services/phototherapy-equipment" prefetch={true} scroll={true} passHref className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <div onClick={() => window.location.href = '/services/phototherapy-equipment'}>Phototherapy Equipment</div>
                  </Link>
                  <Link href="/services/ai-powered-solutions" prefetch={true} scroll={true} passHref className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <div onClick={() => window.location.href = '/services/ai-powered-solutions'}>AI-Powered Solutions</div>
                  </Link>
                  <Link href="/services/equipment-leasing" prefetch={true} scroll={true} passHref className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <div onClick={() => window.location.href = '/services/equipment-leasing'}>Equipment Leasing</div>
                  </Link>
                </div>
              )}
            </li>
            <li className="relative" ref={resourcesRef}>
              <button
                onClick={() => {
                  setResourcesDropdownOpen(!resourcesDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center"
              >
                Resources
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {resourcesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100 animate-fadeIn">
                  <Link href="/resources" prefetch={true} scroll={true} passHref className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <div onClick={() => window.location.href = '/resources'}>All Resources</div>
                  </Link>
                  <Link href="/resources/phototherapy-guide" prefetch={true} scroll={true} passHref className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <div onClick={() => window.location.href = '/resources/phototherapy-guide'}>Phototherapy Guide</div>
                  </Link>
                  <Link href="/resources#faq" prefetch={true} scroll={true} passHref className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <div onClick={() => window.location.href = '/resources#faq'}>FAQ</div>
                  </Link>
                  <Link href="/resources#guides" prefetch={true} scroll={true} passHref className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <div onClick={() => window.location.href = '/resources#guides'}>Equipment Guides</div>
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link href="/contact" prefetch={true} scroll={true} passHref className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                <span onClick={() => window.location.href = '/contact'}>Contact</span>
              </Link>
            </li>
          </ul>
          <Link href="/contracts" prefetch={true} scroll={true} passHref>
            <Button 
              variant="cta" 
              onClick={() => window.location.href = '/contracts'}
              className="bg-gradient-to-r from-blue-600 to-indigo-400 hover:from-blue-700 hover:to-indigo-500 rounded-full px-8 py-2.5 text-white font-medium transform transition-all active:scale-95 hover:shadow-lg active:shadow-md" 
            >
              Customer Portal
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="flex flex-col justify-center items-center md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col py-6 px-6">
            <li className="py-3 border-b border-gray-100">
              <Link href="/" prefetch={true} scroll={true} passHref className="block font-medium text-gray-700 hover:text-primary transition-colors">
                <span onClick={() => window.location.href = '/'}>Home</span>
              </Link>
            </li>
            <li className="py-3 border-b border-gray-100">
              <div>
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full font-medium text-gray-700"
                >
                  <span>Services</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="mt-2 pl-4 border-l-2 border-gray-200 animate-fadeIn">
                    <Link href="/services/ai-customer-support" prefetch={true} scroll={true} passHref className="block py-2 text-sm text-gray-600 hover:text-blue-600">
                      <span onClick={() => window.location.href = '/services/ai-customer-support'}>AI Customer Support</span>
                    </Link>
                    <Link href="/services/phototherapy-equipment" prefetch={true} scroll={true} passHref className="block py-2 text-sm text-gray-600 hover:text-blue-600">
                      <span onClick={() => window.location.href = '/services/phototherapy-equipment'}>Phototherapy Equipment</span>
                    </Link>
                    <Link href="/services/ai-powered-solutions" prefetch={true} scroll={true} passHref className="block py-2 text-sm text-gray-600 hover:text-blue-600">
                      <span onClick={() => window.location.href = '/services/ai-powered-solutions'}>AI-Powered Solutions</span>
                    </Link>
                    <Link href="/services/equipment-leasing" prefetch={true} scroll={true} passHref className="block py-2 text-sm text-gray-600 hover:text-blue-600">
                      <span onClick={() => window.location.href = '/services/equipment-leasing'}>Equipment Leasing</span>
                    </Link>
                  </div>
                )}
              </div>
            </li>
            <li className="py-3 border-b border-gray-100">
              <div>
                <button 
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex items-center justify-between w-full font-medium text-gray-700"
                >
                  <span>Resources</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileResourcesOpen && (
                  <div className="mt-2 pl-4 border-l-2 border-gray-200 animate-fadeIn">
                    <Link href="/resources" className="block py-2 text-sm text-gray-600 hover:text-blue-600">
                      All Resources
                    </Link>
                    <Link href="/resources/phototherapy-guide" className="block py-2 text-sm text-gray-600 hover:text-blue-600">
                      Phototherapy Guide
                    </Link>
                    <Link href="/resources#faq" className="block py-2 text-sm text-gray-600 hover:text-blue-600">
                      FAQ
                    </Link>
                    <Link href="/resources#guides" className="block py-2 text-sm text-gray-600 hover:text-blue-600">
                      Equipment Guides
                    </Link>
                  </div>
                )}
              </div>
            </li>
            <li className="py-3">
              <Link href="/contact" prefetch={true} scroll={true} passHref className="block font-medium text-gray-700 hover:text-primary transition-colors">
                <span onClick={() => window.location.href = '/contact'}>Contact</span>
              </Link>
            </li>
          </ul>
          <div className="py-4 px-6 pt-0">
            <Link href="/contracts" className="w-full" prefetch={true} scroll={true} passHref>
              <Button 
                onClick={() => window.location.href = '/contracts'}
                className="w-full bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90 rounded-full py-3 transform active:scale-95 transition-all" 
                variant="cta" 
              >
                Customer Portal
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;